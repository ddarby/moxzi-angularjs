(function () {
    /**
    * @desc loading mask for busy, loading screen that can be used across the app.
    * @example <loading-mask></loading-mask>
    */
    var module;

    function ChatBoxCtrl() {
        var chatBox = this;

        chatBox.toggler = true;

        chatBox.toggle = function() {
            chatBox.toggler = !chatBox.toggler;
            return chatBox.toggler;
        }
    }

    function getMessageResponseTemplate(user, message) {
        return $.parseHTML(
           '<li>'+
               '<div class="message-data">'+
                   '<span class="message-data-name"><i class="fa fa-circle online"></i>' + user + '</span>'+
                   '<span class="message-data-time" ng-bind="contextResponse.time">' + moment().calendar() + '</span>'+
               '</div>'+
               '<div class="message my-message">' + message + '</div>'+
           '</li>'
        );
    }

    function getMessageTemplate(user, message) {
        return $.parseHTML(
           '<li class="clearfix">'+
               '<div class="message-data align-right">'+
                   '<span class="message-data-time">' + moment().calendar() + '</span>  &nbsp; &nbsp;' +
                   '<span class="message-data-name"><i class="fa fa-circle me"></i>' + user + '</span>'+
               '</div>'+
               '<div class="message other-message float-right">' + message + '</div>'+
           '</li>'
        );
    }

    function litterBox($compile) {

        function link(scope, element, attrs) {
            var chat = {
                messageToSend: '',
                messageResponses: [
                    'Why did the web developer leave the restaurant? Because of the table layout.',
                    'How do you comfort a JavaScript bug? You console it.',
                    'An SQL query enters a bar, approaches two tables and asks: "May I join you?"',
                    'What is the most used language in programming? Profanity.',
                    'What is the object-oriented way to become wealthy? Inheritance.',
                    'An SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol'
                ],
                init: function() {
                    this.cacheDOM();
                    this.bindEvents();
                    this.render();
                },
                cacheDOM: function() {
                    this.$chatHistory = $('.chat-history');
                    this.$button = $('button');
                    this.$textarea = $('#message-to-send');
                    this.$chatHistoryList = this.$chatHistory.find('ul');
                },
                bindEvents: function() {
                    this.$button.on('click', this.addMessage.bind(this));
                    this.$textarea.on('keyup', this.addMessageEnter.bind(this));
                },
                render: function() {
                    this.scrollToBottom();
                    if (this.messageToSend.trim() !== '') {
                        var otherUser = "stan";
                        var user = "dee"
                        this.$chatHistoryList.append(getMessageTemplate(user, this.messageToSend));
                        this.scrollToBottom();
                        this.$textarea.val('');

                        setTimeout(function() {
                            this.$chatHistoryList.append(getMessageResponseTemplate(otherUser, this.getRandomItem(this.messageResponses)));
                            this.scrollToBottom();
                        }.bind(this), 1500);

                    }
                },

                addMessage: function() {
                    this.messageToSend = this.$textarea.val()
                    this.render();
                },
                addMessageEnter: function(event) {
                    // enter was pressed
                    if (event.keyCode === 13) {
                        this.addMessage();
                    }
                },
                scrollToBottom: function() {
                    this.$chatHistory.scrollTop(this.$chatHistory[0].scrollHeight);
                },
                getCurrentTime: function() {
                    return new Date().toLocaleTimeString().
                    replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
                },
                getRandomItem: function(arr) {
                    return arr[Math.floor(Math.random() * arr.length)];
                }

            };

            chat.init();
        }

        return {
            link: link,
            templateUrl: 'components/chat/chat.html',
            restrict: 'E'
        };
    }

    module = angular.module(
        'mokzi-app.chat',
        []
    );

    module.controller(
        'ChatBoxCtrl',
        ChatBoxCtrl
    );

     module.directive(
        'litterBox',
        litterBox
    );

    ChatBoxCtrl.$inject = [];

    litterBox.$inject = [
        '$compile'
    ];

}());


