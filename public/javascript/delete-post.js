const deleteFormHandler = async (event) => {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            alert("post Deleted successfully!!");
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
}

document
        .querySelector('.delete-post-form')
        .addEventListener('submit', deleteFormHandler);
