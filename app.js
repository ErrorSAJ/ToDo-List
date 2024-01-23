$(document).ready(() => {
    $('#hemburger').click(() => {
        $('.side_nav').css('width', '250px')
        $('#hemburger').hide()
        $('#close_window').css('display', 'block')
        $('.hidden_text').show('');
        var multipleCss = {
            'width': '100%'
        }
        $('#hidden-content').css(multipleCss)
        var divHidden_contaner = {
            'width': '70%',
            'height': '80%',
        }
        $('#hidden_contaner').css(divHidden_contaner)

        $('.close-Tab').css('width', '70%')
    })
    $('#close_window').click(() => {
        $('.side_nav').css('width', '50px')
        $('#hemburger').show()
        $('#close_window').hide()
        $('.hidden_text').hide();
        var reversmultipleCss = {
            'width': '100%'
        }
        $('#hidden-content').css(reversmultipleCss)
        var reversdivHidden_contaner = {
            'height': '70%',
            'width': '80%'
        }
        $('#hidden_contaner').css(reversdivHidden_contaner)
        $('.close-Tab').css('width', '70%')
    })
    /*$('.task').on('keyup', (ev) => {
        if (ev.key === 'Enter') {
            console.log('enter is work')
        }
    })*/
    // --- i don't know how to get common function for both eventlister
    $('.addTask').click(() => {
        if ($('.task').val() === "") {
            alert('Your task is empty');
        }

        else {
            let list = $('<li id="lisT">')
            let delte = $(`<span class="material-symbols-outlined delet_pen">delete_forever</span>`);
            let edit = $('<ion-icon name="create-outline" class="edit_pen">')
            $('.conten_task').append(list)
            $(list).append(`<input type="text" class="editPen" value="${$('.task').val()}" readonly>`)
            $(list).append(edit)
            $(list).append(delte)
            $('.task').val('');
            updateLists();
            $('.new_numbers').remove()
            $('.numbers').remove()
            let knowElements = $('.moreTask li').length
            $('.show_quantity').append(`<span class="numbers">${knowElements}</span>`)
            $('.delet_pen').click((e) => {
                if (e.target.tagName === 'SPAN') {
                    e.target.parentElement.remove();
                    updateLists();
                    $('.numbers').remove();
                    $('.new_numbers').remove();
                    $('.show_quantity').append(`<span class="new_numbers">${$('.moreTask li').length}</span>`)
                }
            })
        }
    });
    $('.conten_task').click((e) => {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle('checked')
        }
        else if (e.target.tagName === 'ION-ICON') {
            let inputBox = $('.editPen')
            $(inputBox, this).prop('readonly', (_, ele) => { return !ele });
        }

    });
    $('.moreTask').click((ele) => {
        if (ele.target.tagName === 'LI') {
            ele.target.classList.toggle('checked')
        }
        else if (ele.target.tagName === 'ION-ICON') {
            let inputBox = $('.editPen')
            $(inputBox, this).prop('readonly', (_, ele) => { return !ele });
        }

    });

    $('#clear_task').on('click', () => {
        $('.task').val('');
    });
    function updateLists() {
        const maxLength = 8;
        const contenTaskLi = $('.conten_task li');
        const moreOtherLi = $('.moreTask li');

        if (contenTaskLi.length >= maxLength) {
            contenTaskLi.slice(maxLength).appendTo('.moreTask');
        } else if (moreOtherLi.length > 0) {
            moreOtherLi.appendTo('.conten_task');
        }
    }
    $('#hidden_info').click(() => {
        $('#hidden-content').show()
        $('#hidden-content').css('display', 'flex')
        $('.side_nav').hide()
    })
    
    $('#close_Task_tab').click(() => {
        $('#hidden-content').hide()
        $('.side_nav').show()
    })

});