const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name = "post-title"]').value.trim();
    const contents = document.querySelector('input[name = "post-content"]').value.trim();

    //alert contents
    if (title && contents) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, contents }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("please enter both title and contents");
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
  