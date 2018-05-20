(function () {

    var tabs = document.querySelectorAll('.contact-widget__tab');
    var panels = document.querySelectorAll('.contact-widget__panel');
    var toggleInfoButton = document.querySelector('.error-text__toggle-button');
    var infoBox = document.querySelector('.error-text__info-box');
    var show = document.querySelector('.error-text__show');
    var hide = document.querySelector('.error-text__hide');


    var toggleNumber = function (i, e) {

        for (var j = 0; j < tabs.length; j++) {

            panels[j].className = 'contact-widget__panel';
            tabs[j].className = 'col-3 contact-widget__tab';
        }

        panels[i].className += ' contact-widget__panel--selected';
        tabs[i].className += ' contact-widget__tab--checked';
    };

    var open = false;

    var toggleInfo = function () {

        if(open){
            open= false;
            show.className = 'error-text__show';
            hide.className = 'error-text__hide--hide';
            infoBox.className = 'error-text__info-box';
        }else{
            open= true;
            show.className = 'error-text__show--hide';
            hide.className = 'error-text__hide';
            infoBox.className += ' error-text__info-box--open';
        }
    };

    for (var i = 0; i < tabs.length; i++) {

        tabs[i].addEventListener('click', toggleNumber.bind(null, i))
    }

    toggleInfoButton.addEventListener('click', toggleInfo)

})();


// // grapheController.js
// (function () {
//
//     function controller($http, $element) {
//
//         var vm = this;
//
//         console.log(':)');
//
//
//
//     }
//
//     angular
//         .module('app')
//         .controller('controller', controller);
//
//     controller.$inject = ['$http', '$element'];
//
// })();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250YWN0LXdpZGdldF9fdGFiJyk7XHJcbiAgICB2YXIgcGFuZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRhY3Qtd2lkZ2V0X19wYW5lbCcpO1xyXG4gICAgdmFyIHRvZ2dsZUluZm9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dF9fdG9nZ2xlLWJ1dHRvbicpO1xyXG4gICAgdmFyIGluZm9Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItdGV4dF9faW5mby1ib3gnKTtcclxuICAgIHZhciBzaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHRfX3Nob3cnKTtcclxuICAgIHZhciBoaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yLXRleHRfX2hpZGUnKTtcclxuXHJcblxyXG4gICAgdmFyIHRvZ2dsZU51bWJlciA9IGZ1bmN0aW9uIChpLCBlKSB7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGFicy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgcGFuZWxzW2pdLmNsYXNzTmFtZSA9ICdjb250YWN0LXdpZGdldF9fcGFuZWwnO1xyXG4gICAgICAgICAgICB0YWJzW2pdLmNsYXNzTmFtZSA9ICdjb2wtMyBjb250YWN0LXdpZGdldF9fdGFiJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBhbmVsc1tpXS5jbGFzc05hbWUgKz0gJyBjb250YWN0LXdpZGdldF9fcGFuZWwtLXNlbGVjdGVkJztcclxuICAgICAgICB0YWJzW2ldLmNsYXNzTmFtZSArPSAnIGNvbnRhY3Qtd2lkZ2V0X190YWItLWNoZWNrZWQnO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb3BlbiA9IGZhbHNlO1xyXG5cclxuICAgIHZhciB0b2dnbGVJbmZvID0gZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICBpZihvcGVuKXtcclxuICAgICAgICAgICAgb3Blbj0gZmFsc2U7XHJcbiAgICAgICAgICAgIHNob3cuY2xhc3NOYW1lID0gJ2Vycm9yLXRleHRfX3Nob3cnO1xyXG4gICAgICAgICAgICBoaWRlLmNsYXNzTmFtZSA9ICdlcnJvci10ZXh0X19oaWRlLS1oaWRlJztcclxuICAgICAgICAgICAgaW5mb0JveC5jbGFzc05hbWUgPSAnZXJyb3ItdGV4dF9faW5mby1ib3gnO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBvcGVuPSB0cnVlO1xyXG4gICAgICAgICAgICBzaG93LmNsYXNzTmFtZSA9ICdlcnJvci10ZXh0X19zaG93LS1oaWRlJztcclxuICAgICAgICAgICAgaGlkZS5jbGFzc05hbWUgPSAnZXJyb3ItdGV4dF9faGlkZSc7XHJcbiAgICAgICAgICAgIGluZm9Cb3guY2xhc3NOYW1lICs9ICcgZXJyb3ItdGV4dF9faW5mby1ib3gtLW9wZW4nO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgIHRhYnNbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVOdW1iZXIuYmluZChudWxsLCBpKSlcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVJbmZvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlSW5mbylcclxuXHJcbn0pKCk7XHJcblxyXG4iLCIvLyAvLyBncmFwaGVDb250cm9sbGVyLmpzXHJcbi8vIChmdW5jdGlvbiAoKSB7XHJcbi8vXHJcbi8vICAgICBmdW5jdGlvbiBjb250cm9sbGVyKCRodHRwLCAkZWxlbWVudCkge1xyXG4vL1xyXG4vLyAgICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbi8vXHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJzopJyk7XHJcbi8vXHJcbi8vXHJcbi8vXHJcbi8vICAgICB9XHJcbi8vXHJcbi8vICAgICBhbmd1bGFyXHJcbi8vICAgICAgICAgLm1vZHVsZSgnYXBwJylcclxuLy8gICAgICAgICAuY29udHJvbGxlcignY29udHJvbGxlcicsIGNvbnRyb2xsZXIpO1xyXG4vL1xyXG4vLyAgICAgY29udHJvbGxlci4kaW5qZWN0ID0gWyckaHR0cCcsICckZWxlbWVudCddO1xyXG4vL1xyXG4vLyB9KSgpOyJdfQ==
