const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value.trim();

    //alert contents
    if (title && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("please enter both title and content");
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  