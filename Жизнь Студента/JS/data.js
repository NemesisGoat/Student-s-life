var student = {
    life: 100,
    money: 0,
    moral: 100
}

var food = 1

var rooms = {
    start: {
        title: 'Комната в общаге',
        description: 'Опять ты проснулся. Опять здесь. Опять не миллиардер.',
        img: 'Images/prison.jpg',
        chanceToFindMoney: 0.1,
        actions: [{
            title: 'Окно',
            id: 'window',
            cost: 98
        },
            {
                title: 'Коридор',
                id: 'hall',
                cost: 2
        }]
    },

    death: {
        title: 'Ты погиб.',
        description: 'Но это не причина не быть на лекции по мат.анализу',
        img: 'Images/death.jpg',
        chanceToFindMoney: -1,
        actions: [{
            title: 'Проснуться в общаге',
            id: 'start',
            cost: -200 
        }]
    },

    window: {
        title: 'Окно',
        description: 'Ну что, джентльмены, отправляемся! \n Ничего себе!',
        img: 'Images/window.jpg',
        chanceToFindMoney: 0.1,
        actions: [{
            title: 'Проснуться в общаге',
            id: 'start',
            cost: -200 
        }]
    },
    
    hall: {
        title: 'Коридор',
        description: 'Ты вышел за дверь. Пора в путь',
        img: 'Images/hallway.jpg',
        chanceToFindMoney: 0.2,
        actions: [{
            title: 'Вернуться в комнату',
            id: 'start',
            cost: -4
        },
        {
            title: 'Вахта',
            id: 'watch',
            cost: 2
        },
        {
            title: 'Кухня',
            id: 'kitchen',
            cost: 1
        }]
    },

    kitchen: {
        title: 'Кухня',
        description: 'Здесь обитает главный источник белка в жизни студента',
        img: 'Images/kitchen.jpg',
        chanceToFindMoney: 0.2,
        actions: [{
            title: 'Вернуться в коридор',
            id: 'hall',
            cost: 1
        },
        {
            title: 'Похавать',
            id: 'kitchen',
            cost: -10
        }]
    },

    watch: {
        title: 'Вахта',
        description: 'Последний рубеж перед жестоким миром',
        img: 'Images/watch.jpg',
        chanceToFindMoney: 0.2,
        actions: [{
            title: 'Вернуться в коридор',
            id: 'hall',
            cost: 2
        },
        {
            title: 'Улица',
            id: 'street',
            cost: 1
        }]
    },

    street: {
        title: 'Улица',
        description: 'Дневной свет выжигает тебе глаза, тебе больно, но ты не из слабых',
        img: 'Images/street.jpg',
        chanceToFindMoney: 0.2,
        actions: [
            {
                title:'Вернуться в общагу',
                id: 'watch',
                cost: 1
            },
            {
                title: 'Пойти на автобусную остановку',
                id: 'busStop',
                cost: 2
            },
            {
                title: 'Пойти пешком',
                id: 'walk',
                cost: - 4
            }
        ]
    },

    busStop: {
        title: 'Автобусная остановка',
        description: 'Ты не из слабых, но от этого зрелища у тебя возникло желание лечь под автобус',
        img: 'Images/busStop.jpg',
        chanceToFindMoney: 0.2,
        actions: [
            {
                title: 'Уйти с остановки',
                id: 'street',
                cost: 1
            },
            {
                title: 'Ждать автобус',
                id: 'busNumberOne',
                cost: 0
            }
        ]
    },

    busNumberOne: {
        title: 'Переполненный автобус',
        description: 'Войдя в эту консервную банку, рискуешь умереть от удушения',
        img: 'Images/busNumberOne.png',
        chanceToFindMoney: 0.1,
        actions: [
            {
                title: 'Уйти с остановки',
                id: 'street',
                cost: 1
            },
            {
                title: 'Зайти в автобус',
                id: 'fullBus',
                cost: 15
            },
            {
                title: 'Подождать следующего',
                id: 'busNumberTwo',
                cost: 0
            }
        ]
    },

    busNumberTwo: {
        title: 'Ещё один переполненный автобус',
        description: 'Времени до пары всё меньше...',
        img: 'Images/busNumberTwo.jpg',
        chanceToFindMoney: 0.1,
        actions: [
            {
                title: 'Уйти с остановки',
                id: 'street',
                cost: 1
            },
            {
                title: 'Зайти в автобус',
                id: 'fullBus',
                cost: 15
            },
            {
                title: 'Подождать следующего',
                id: 'busNumberThree',
                cost: 0
            }
        ]
    },

    busNumberThree: {
        title: 'Почти пустой автобус',
        description: 'Наконец-то. Может быть, ещё успеешь.',
        img: 'Images/busNumberThree.jpg',
        chanceToFindMoney: 0.1,
        actions: [
            {
                title: 'Уйти с остановки',
                id: 'street',
                cost: 1
            },
            {
                title: 'Зайти в автобус',
                id: 'emptyBus',
                cost: 2
            }
        ]
    },

    fullBus: {
        title: 'Переполненный автобус',
        description: 'А как дышать-то?',
        img: 'Images/fullBus.jpg',
        chanceToFindMoney: -1,
        actions: [
            {
                title: 'Доехать до университета',
                id: 'udsu',
                cost: 10,
            }
        ]
    },

    emptyBus: {
        title: 'Пустой автобус',
        description: 'Не тесно, свободно - красота...',
        img: 'Images/emptyBus.jpeg',
        chanceToFindMoney: 0.3,
        actions: [
            {
                title: 'Доехать до университета',
                id: 'udsu',
                cost: 1
            },
            {
                title: 'Доехать до университета и вздремнуть',
                id: 'udsu',
                cost: -4
            }
        ]
    },

    walk: {
        
    }
    

}




var roomId = 'start';

