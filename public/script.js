document.getElementById('todos').addEventListener('click', e => {
  if (e.target.nodeName === 'INPUT') return markAsDone(e.target);
  if (e.target.nodeName === 'A') return remove(e.target);
});

function markAsDone(element) {
  const { value: id, checked: done } = element;
  fetch(`/todos/${id}/done`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ done }),
  }).then(() => element.closest('li').classList.toggle('done'));
}

function remove(element) {
  const { value: id } = element.closest('label').querySelector('input');
  if (!confirm('Deleting element ' + id + '?')) return;
  fetch(`/todos/${id}`, {
    method: 'DELETE',
  }).then(() => {
    element.closest('li').classList.add('removed');
    const items = element.closest('ul').querySelectorAll('li:not(.removed)')
      .length;
    document.querySelector('p').innerHTML = `There are ${items} todos.`;
  });
}
