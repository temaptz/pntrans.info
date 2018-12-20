$.material.init();

function openNewsContent(id){
    $('.news').addClass('min');
    $('#' + id).removeClass('min');
    $('#' + id + ' .news-content').removeClass('min');
    $('#' + id + ' .close').removeClass('min');
    $('#' + id).addClass('max');
}
function closeNewsContent(id){
    $('#' + id).removeClass('max');
    $('.news').removeClass('min');
    $('#' + id + ' .news-content').addClass('min');
    $('#' + id + ' .close').addClass('min');
}

$('.right-header').hover(function(){
    $('.right-header').addClass('sr-only');
    $('.right-header').removeClass('col-md-3');
    $('.right-header').addClass('col-md-6');
    $('.right-header').removeClass('sr-only');

    $('.left-header').addClass('sr-only');
    $('.left-header').removeClass('col-md-9');
    $('.left-header').addClass('col-md-6');
    $('.left-header').removeClass('sr-only');

    $('#header').removeClass('intro-body');
    $('#header').addClass('intro-body-hovered');

   /* $('.navbar-header').addClass('sr-only');
    $('.intro-text').addClass('sr-only');*/
}, function(){
    $('.right-header').addClass('sr-only');
    $('.right-header').removeClass('col-md-6');
    $('.right-header').addClass('col-md-3');
    $('.right-header').removeClass('sr-only');

    $('.left-header').addClass('sr-only');
    $('.left-header').removeClass('col-md-6');
    $('.left-header').addClass('col-md-9');
    $('.left-header').removeClass('sr-only');

    $('#header').removeClass('intro-body-hovered');
    $('#header').addClass('intro-body');

   /* $('.navbar-header').removeClass('sr-only');
    $('.intro-text').removeClass('sr-only');*/
});

var height = 400; // высота шапки
var margin = 0;    // отступ когда шапка уже не видна
$(function(){
    $(window).scroll(function(){
        var top = $(this).scrollTop();
        var elem = $('#navbar');
        if (top > height) {
            elem.addClass('fixed-top');
        }
        if(top < height){
            $('#navbar').removeClass('fixed-top');
        }
    });
});

$(document).ready(function(){
    $('a[href^="#"], a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
        var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });
});

'use strict';
/* Controllers */
var app = angular.module('myApp', ['ngRoute']);

app.controller('MyCtrl1', ['$scope', 'myService', function($scope, myService) {
    $scope.formInfo = {};

    $scope.sendEmail = function() {
        console.log(111);
        $scope.nameRequired = '';
        $scope.emailRequired = '';
        $scope.telRequired = '';

        // if (!$scope.formInfo.name) {
        //     $scope.nameRequired = 'Пожалуйста, введите имя';
        // }
        //
        // if (!$scope.formInfo.email) {
        //     $scope.emailRequired = 'Пожалуйста, введите Email';
        // }
        //
        // if (!$scope.formInfo.text) {
        //     $scope.telRequired = 'Пожалуйста, введите номер телефона';
        // }

        myService.sendEmailService($scope.formInfo.company, $scope.formInfo.name, $scope.formInfo.email, $scope.formInfo.phone, $scope.formInfo.text);
    };
}]);

app.factory('myService', function($http){
    var factory = {};

    //Указать причину пропуска
    factory.sendEmailService = function(company, name, email, phone, text){
        console.log(222);
        $http.post('/feedback/sendMail.php',{
            company: company,
            name: name,
            email: email,
            phone: phone,
            text: text
        }).then(function () {
            alert("Ваше сообщение отправлено!");
        });
    };
    return factory;
});
