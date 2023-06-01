const commentFormHandler = async (event) => {
    event.preventDefault();

    const feedback = document.querySelector('textarea[name="feedback"]').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    //alert contents
    if (feedback) {
        //console.log("REAL CALL HAPPENING HERE? ----------");
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ post_id, feedback }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("please enter comments");
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
  