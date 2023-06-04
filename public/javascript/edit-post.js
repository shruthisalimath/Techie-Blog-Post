console.log('inside edit for post')

const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('textarea[name="post-content"]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    if (title && content) {
        console.log(content);
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("please enter both title and contents");
    }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
