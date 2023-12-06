function goToRoom() {
    console.log(student.money);
    var room = rooms[roomId];
    document.getElementById('roomTitle').innerHTML = room.title;
    document.getElementById('roomImg').src = room.img;
    document.getElementById('description').innerHTML = room.description;
    document.getElementById('moneyCounter').innerHTML = student.money;

    deleteActions(room);
    findMoney(room.chanceToFindMoney, room, roomId);

    //создание кнопок
    for (var i = 0; i < room.actions.length; i++) {
        var button = document.createElement('div');
        button.classList.add('actionButton');
        button.id = i;
        var inButton = document.createElement('h1');
        inButton.innerHTML = room.actions[i].title;
        
        
        //навешивание обработчика кликов
        (function(i){
            button.addEventListener('click', function () {
                    roomId = room.actions[i].id;
                
                
                //урон студенту
                student.life -= room.actions[i].cost;
                if (student.life > 100) {
                    student.life = 100;
                };
                //кейс смерти
                if (student.life <= 0) {
                    roomId = 'death';
                    student.life = 0;
                };
                //реакция шкалы
                document.querySelector('.grayback').style.left = student.life + '%';
                console.log(student.life);
                
                
                //Вычитание денег
                if (room.actions[i].moneyCost) {
                    student.money -= room.actions[i].moneyCost;
                };


                //Переход в комнату
                if (room.actions[i].id){
                    buttonsClear();
                    goToRoom();
                }

        })})(i)
        //добавление кнопок в разметку
        document.getElementById('actions').appendChild(button);
        document.getElementById(button.id).appendChild(inButton);
    }

}


//Удаление кнопок старой комнаты
function buttonsClear() {
    var element = document.getElementById("actions");
    element.innerHTML = '';
}


//Нахождение денег
function findMoney(chance, room, roomId) {
    if (Math.random() <= chance) {
        room.actions.push((function(){
            return {
                title: 'Поднять чирик',
                id: roomId,
                cost: 0,
                delete: 1,
                moneyCost: -10
            }
        })())
    }
}

function deleteActions(room) {
    for (var i = 0; i < room.actions.length; i++) {
        if (room.actions[i].delete) {
            room.actions.splice(i, 1);
        }
    }
}






