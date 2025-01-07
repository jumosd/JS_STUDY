const ATTACK_VALUE = 10; //플레이어의 공격력 전역적으로 사용할것임 전역적으로 사용하는 상수는 일반적으로 대문자로 활용됨
const STRONG_ATTACK_VALUE = 20; //강공격 추가
const MONSTER_ATTACK_VALUE = 14;
let chooseMaxLife = 100; //몬스터와 플레이어의 최대체력임 
let currentMonsterHealth = chooseMaxLife; //몬스터의 체력을 초기화
let currentPlayerHealth = chooseMaxLife;  //플레이어의 체력을 초기화

adjustHealthBars(chooseMaxLife); //html에최대 체력바 초기화 하는 함수

function attackMonster(mode) {
    let maxDamage
    if (mode === "ATTACK") {
        maxDamage = ATTACK_VALUE
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = STRONG_ATTACK_VALUE
    }
    const damage = dealMonsterDamage(maxDamage)
    currentMonsterHealth -= damage //몬스터체력에서 데미지 깍음
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("이겼다!!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("졌다 ")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("비겼어요")
    }
}

//공격함수
function attackHandler() {
    attackMonster("ATTACK")
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK")
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);