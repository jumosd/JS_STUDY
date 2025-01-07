const ATTACK_VALUE = 10; //플레이어의 공격력 전역적으로 사용할것임 전역적으로 사용하는 상수는 일반적으로 대문자로 활용됨
let chooseMaxLife = 100; //몬스터와 플레이어의 최대체력임 
let currentMonsterHealth = chooseMaxLife; //몬스터의 체력을 초기화
let currentPlayerHealth = chooseMaxLife;  //플레이어의 체력을 초기화

adjustHealthBars(chooseMaxLife); //html에최대 체력바 초기화 하는 함수

//공격함수
function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE) // 0~1 * ATTACK_VALUE 값을 데미지로줌 progerss bar의 value를 깍음 AND 데미지를 반환함
    currentMonsterHealth -= damage //몬스터체력에서 데미지 깍음
}

attackBtn.addEventListener('click', attackHandler)