
    function retrieveProblem() {
        $.ajax({
            method: 'POST',
            url: _config.api.retrieveProblem + '/retrieve',
            headers: {
                Authorization: authToken
            },
            data: JSON.stringify({
                ProblemId: "1"
            }),
            contentType: 'application/json',
            success: completeRetrieve,
            error: function ajaxError(jqXHR, textStatus, errorThrown) {
                console.error('Error requesting problem: ', textStatus, ', Details: ', errorThrown);
                console.error('Response: ', jqXHR.responseText);
                alert('An error occured when requesting your problem:\n' + jqXHR.responseText);
            }
        });
    }

    function completeRetrieve(result) {
        console.log('Response received from API: ', result);
        displayProblem(result.Problem, result.Solution);
    }


    function displayProblem(problem, solution) {
        $('#problems').append($(
		'<div class="card">' +
		  '<div class="card-body">' +
		  '<form>' +
		    '<div class="form-group row">' +
		      '<label for="staticEmail" class="col-sm-2 col-form-label">Problem</label>' +
		      '<div class="col-sm-10">' +
  		        '<input type="text" readonly class="form-control-plaintext" id="staticEmail" value=' + problem + '>' +
		      '</div>' +
		    '</div>' +
		      '<div class="form-group row">' +
		        '<label for="inputPassword" class="col-sm-2 col-form-label">Solution</label>' +
		        '<div class="col-sm-10">' +
		          '<input type="text" class="form-control" id="solution" placeholder="Solution">' +
		        '</div>' +
		      '</div>' +
		      '<button type="submit" class="btn btn-primary mb-2">Submit</button>' +
		    '</form>' +
		  '</div>' +
		'</div>' 
		));
    }
