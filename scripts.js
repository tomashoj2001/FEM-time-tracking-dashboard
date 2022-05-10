const d = document,
    timeframe = [...d.querySelectorAll('.timeframe')],
    card = [...d.querySelectorAll('.card__info')];

function displayTime() {
    timeframe.forEach(tf => {
        if (tf !== this) {
            tf.classList.remove('active');
        } else {
            tf.classList.add('active');
        }
    });

    if (this.textContent === 'Daily') dailyTimes();
    if (this.textContent === 'Weekly') weeklyTimes();
    if (this.textContent === 'Monthly') monthlyTimes();
}

function dailyTimes() {
    card[0].querySelector('.card__time').textContent = '5hrs';
    card[0].querySelector('.card__previous').textContent = 'Previous - 7hrs';
    card[1].querySelector('.card__time').textContent = '1hrs';
    card[1].querySelector('.card__previous').textContent = 'Previous - 2hrs';
    card[2].querySelector('.card__time').textContent = '0hrs';
    card[2].querySelector('.card__previous').textContent = 'Previous - 1hrs';
    card[3].querySelector('.card__time').textContent = '1hrs';
    card[3].querySelector('.card__previous').textContent = 'Previous - 1hrs';
    card[4].querySelector('.card__time').textContent = '1hrs';
    card[4].querySelector('.card__previous').textContent = 'Previous - 3hrs';
    card[5].querySelector('.card__time').textContent = '0hrs';
    card[5].querySelector('.card__previous').textContent = 'Previous - 1hrs';
}

function weeklyTimes() {
    card[0].querySelector('.card__time').textContent = '32hrs';
    card[0].querySelector('.card__previous').textContent = 'Previous - 36hrs';
    card[1].querySelector('.card__time').textContent = '10hrs';
    card[1].querySelector('.card__previous').textContent = 'Previous - 8hrs';
    card[2].querySelector('.card__time').textContent = '4hrs';
    card[2].querySelector('.card__previous').textContent = 'Previous - 7hrs';
    card[3].querySelector('.card__time').textContent = '4hrs';
    card[3].querySelector('.card__previous').textContent = 'Previous - 5hrs';
    card[4].querySelector('.card__time').textContent = '5hrs';
    card[4].querySelector('.card__previous').textContent = 'Previous - 10hrs';
    card[5].querySelector('.card__time').textContent = '2hrs';
    card[5].querySelector('.card__previous').textContent = 'Previous - 2hrs';
}

function monthlyTimes() {
    card[0].querySelector('.card__time').textContent = '103hrs';
    card[0].querySelector('.card__previous').textContent = 'Previous - 128hrs';
    card[1].querySelector('.card__time').textContent = '23hrs';
    card[1].querySelector('.card__previous').textContent = 'Previous - 29hrs';
    card[2].querySelector('.card__time').textContent = '13hrs';
    card[2].querySelector('.card__previous').textContent = 'Previous - 19hrs';
    card[3].querySelector('.card__time').textContent = '11hrs';
    card[3].querySelector('.card__previous').textContent = 'Previous - 18hrs';
    card[4].querySelector('.card__time').textContent = '21hrs';
    card[4].querySelector('.card__previous').textContent = 'Previous - 23hrs';
    card[5].querySelector('.card__time').textContent = '7hrs';
    card[5].querySelector('.card__previous').textContent = 'Previous - 11hrs';
}

timeframe.forEach(tf => tf.addEventListener('click', displayTime));