//console.log('inside comment')

const commentFormHandler = async (event) => {
    //console.log('inside commentFormHandler')
    event.preventDefault();

    const feedback = document.querySelector('textarea[name="feedback"]').value;
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    console.log("post id", post_id);
    //alert contents
    if (feedback) {
       console.log(feedback);
        const response = await fetch(`/api/comments`, {
           
            method: 'POST',
            body: JSON.stringify({ post_id, feedback }),
          // body: JSON.stringify({feedback }),
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
  