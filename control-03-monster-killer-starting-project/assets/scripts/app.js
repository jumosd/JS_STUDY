const ATTACK_VALUE = 10; //플레이어의 공격력 전역적으로 사용할것임 전역적으로 사용하는 상수는 일반적으로 대문자로 활용됨
const STRONG_ATTACK_VALUE = 20; //강공격 추가
const MONSTER_ATTACK_VALUE = 14; //몬스터 공격력
const HEAL_VALUE = 20
let chooseMaxLife = 100; //몬스터와 플레이어의 최대체력임 
let currentMonsterHealth = chooseMaxLife; //몬스터의 체력을 초기화
let currentPlayerHealth = chooseMaxLife;  //플레이어의 체력을 초기화
let hasBonusLife = true

adjustHealthBars(chooseMaxLife); //html에최대 체력바 초기화 하는 함수

function reset() {
    currentMonsterHealth = chooseMaxLife; //몬스터의 체력을 초기화
    currentPlayerHealth = chooseMaxLife;  //플레이어의 체력을 초기화
    resetGame(chooseMaxLife)
}
function endRound() {
    let initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        currentPlayerHealth = initialPlayerHealth + 20
        alert("보너스 생명 사용 !!")
        setPlayerHealth(initialPlayerHealth + 20)
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("이겼다!!")
        reset()
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("졌다 ")
        reset()
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("비겼어요")
        reset()
    }
}

function attackMonster(mode) {
    let maxDamage
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE
    }
    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage //몬스터체력에서 데미지 깍음
    endRound()
}

//공격함수
function attackHandler() {
    attackMonster("ATTACK")
}
//강공격함수
function strongAttackHandler() {
    attackMonster("STRONG_ATTACK")
}
//힐함수
function healHandler() {
    let healValue
    if (currentPlayerHealth >= chooseMaxLife - HEAL_VALUE) {
        healValue = chooseMaxLife - currentPlayerHealth
    } else {
        healValue = HEAL_VALUE
    }
    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue
    endRound()
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healHandler)