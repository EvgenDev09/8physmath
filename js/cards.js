let cards = {
  classic: {
    name: "8ФМ Classic",
    cards: {
      alaksiej: {
        symbol: "🐷",
        name: "Алексей Пшеничный",
        description: "Все Алексеи Пшеничные дают в сумме 1/4/9/16/25/36/49/60/75/100 соответственно их количеству"
      },
      evgen: {
        symbol: "🤫",
        name: "Женя",
        description: "Даёт 2 очка; Амогус = +3; Детектор Алексея = +1"
      },
      amogus: {
        symbol: "ඞ",
        name: "Амогус",
        description: "Даёт 3 очка или 6 очков при ровно 2 Амогусах"
      },
      olympiad: {
        symbol: "🏆",
        name: "Олимпиада",
        description: "Даёт 2/4/6 очков при хотя бы 1/3/6 Олимпиадах"
      },
      sergay: {
        symbol: "🤓",
        name: "Сергей",
        description: "Даёт 1 очко или 3 очка при хотя бы 1 карте взакрытую; Олимпиада = +1"
      },
      akim: {
        symbol: "🍌",
        name: "Аким",
        description: "Даёт 3 очка; Сергей = +2"
      },
      marat: {
        symbol: "🇰🇵",
        name: "Марат",
        description: "Даёт 4 очка или 6 очков при ровно 1 Марате; Олимпиада = +1; Нельзя играть при Алексее Пшеничном"
      },
      jaman: {
        symbol: "🥰",
        name: "Ян-Павел",
        description: "Даёт 1 очко при хотя бы 1 Жене; Женя/Сергей/Аким = +1; первые 5 карт взакрытую = +2"
      },
      vanya: {
        symbol: "🤯",
        name: "Иван Гречиха",
        description: "Даёт 5 очков; Аким = +3; Нельзя играть без закрытой карты"
      },
      leonidia: {
        symbol: "🤠",
        name: "Леонидия",
        description: "Даёт 2 очка; различный вид карт (в том числе 🐷, 🤠 и взакрытую) = +1; Алексей Пшеничный = -2"
      },
      veeeep: {
        symbol: "🧨",
        name: "Веп",
        description: "Даёт 1 очко или 3 очка при ровно 1 Вепе; Марат/Леонидия/Детектор Алексея = +3; Алексей Пшеничный = -2"
      },
      detector: {
        symbol: "⚠️",
        name: "Детектор Алексея",
        description: "Даёт 4 очка; игрок с хотя бы 1 Алексеем Пшеничным = +1; Нельзя играть при Алексее Пшеничном"
      }
    },
    extended:{
      alaksiej: {
        symbol: "🐷",
        name: "Алексей Пшеничный",
        description: "Все Алексеи Пшеничные дают в сумме 1/4/9/16/25/36/49/60/75/100 соответственно их количеству"
      },
      evgen: {
        symbol: "🤫",
        name: "Женя",
        description: "Даёт 2 очка; Амогус = +3; Детектор Алексея = +1"
      },
      amogus: {
        symbol: "ඞ",
        name: "Амогус",
        description: "Даёт 3 очка или 6 очков при ровно 2 Амогусах"
      },
      olympiad: {
        symbol: "🏆",
        name: "Олимпиада",
        description: "Даёт 2/4/6 очков при хотя бы 1/3/6 Олимпиадах"
      },
      sergay: {
        symbol: "🤓",
        name: "Сергей",
        description: "Даёт 1 очко или 3 очка при хотя бы 1 карте взакрытую; Олимпиада = +1"
      },
      akim: {
        symbol: "🍌",
        name: "Аким",
        description: "Даёт 3 очка; Сергей = +2"
      },
      marat: {
        symbol: "🇰🇵",
        name: "Марат",
        description: "Даёт 4 очка или 6 очков при ровно 1 Марате; Олимпиада = +1; Нельзя играть при Алексее Пшеничном"
      },
      jaman: {
        symbol: "🥰",
        name: "Ян-Павел",
        description: "Даёт 1 очко при хотя бы 1 Жене; Женя/Сергей/Аким/Шевчик Максим = +1; первые 5 карт взакрытую = +2"
      },
      vanya: {
        symbol: "🤯",
        name: "Иван Гречиха",
        description: "Даёт 5 очков; Аким = +3; Нельзя играть без закрытой карты"
      },
      leonidia: {
        symbol: "🤠",
        name: "Леонидия",
        description: "Даёт 2 очка; различный вид карт (в том числе 🐷, 🤠 и взакрытую) = +1; Алексей Пшеничный = -2"
      },
      veeeep: {
        symbol: "🧨",
        name: "Веп",
        description: "Даёт 1 очко или 3 очка при ровно 1 Вепе; Марат/Леонидия/Детектор Алексея = +3; Алексей Пшеничный = -2"
      },
      detector: {
        symbol: "⚠️",
        name: "Детектор Алексея",
        description: "Даёт 4 очка; игрок с хотя бы 1 Алексеем Пшеничным = +1; Нельзя играть при Алексее Пшеничном"
      },
      alexandr: {
        symbol: "😮",
        name: "Алехандр",
        description: "Даёт 4 очка; Хотя бы 6 различных видов карт (в том числе этот) = -2; Женя/Шевчик Максим/Сергей/Марат = +1"
      },
      ultramax: {
        symbol: "🎉",
        name: "Шевчик Максим",
        description: "Даёт 3 очка при отсутствии Амогусов; Хотя бы 6 различных видов карт (в том числе этот) = +2; Непересекающаяся пара 🤫 и 😮 = +4; Аким = +1"
      }
    },
    number: [
      {
        alaksiej: 0,
        evgen: 0,
        amogus: 0,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        marat: 0,
        vanya: 0,
        leonidia: 0,
        veeeep: 0,
        detector: 0,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 4,
        evgen: 1,
        amogus: 1,
        olympiad: 1,
        sergay: 0,
        akim: 2,
        jaman: 1,
        marat: 1,
        vanya: 1,
        leonidia: 0,
        veeeep: 0,
        detector: 0,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 0,
        evgen: 2,
        amogus: 2,
        olympiad: 7,
        sergay: 3,
        akim: 2,
        jaman: 3,
        marat: 2,
        vanya: 2,
        leonidia: 1,
        veeeep: 0,
        detector: 0,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 10,
        evgen: 3,
        amogus: 2,
        olympiad: 6,
        sergay: 4,
        akim: 2,
        jaman: 4,
        marat: 2,
        vanya: 2,
        leonidia: 1,
        veeeep: 0,
        detector: 0,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 11,
        evgen: 4,
        amogus: 2,
        olympiad: 9,
        sergay: 6,
        akim: 3,
        jaman: 6,
        marat: 2,
        vanya: 3,
        leonidia: 1,
        veeeep: 1,
        detector: 0,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 13,
        evgen: 5,
        amogus: 3,
        olympiad: 10,
        sergay: 7,
        akim: 4,
        jaman: 7,
        marat: 3,
        vanya: 3,
        leonidia: 2,
        veeeep: 2,
        detector: 1,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 15,
        evgen: 6,
        amogus: 4,
        olympiad: 12,
        sergay: 8,
        akim: 4,
        jaman: 8,
        marat: 3,
        vanya: 4,
        leonidia: 3,
        veeeep: 3,
        detector: 2,
        alexandr: 0,
        ultramax: 0
      },
      {
        alaksiej: 16,
        evgen: 7,
        amogus: 4,
        olympiad: 13,
        sergay: 9,
        akim: 5,
        jaman: 8,
        marat: 4,
        vanya: 4,
        leonidia: 3,
        veeeep: 3,
        detector: 3,
        alexandr: 3,
        ultramax: 2
      },
      {
        alaksiej: 17,
        evgen: 8,
        amogus: 4,
        olympiad: 14,
        sergay: 10,
        akim: 5,
        jaman: 9,
        marat: 4,
        vanya: 5,
        leonidia: 4,
        veeeep: 4,
        detector: 3,
        alexandr: 5,
        ultramax: 4
      }
    ]
  },
  v41: {
    name: "8ФМ v41",
    cards: {
      evgen: {
        symbol: "🤫",
        name: "Женя",
        description: "Даёт 2 очка; Амогус = +3; 9В ДЗ = +1"
      },
      amogus: {
        symbol: "ඞ",
        name: "Амогус",
        description: "Даёт 3 очка или 6 очков при ровно 2 Амогусах"
      },
      olympiad: {
        symbol: "🏆",
        name: "Олимпиада",
        description: "Даёт 2/4/6 очков при хотя бы 1/3/6 Олимпиадах"
      },
      sergay: {
        symbol: "🤓",
        name: "Сергей",
        description: "Даёт 1 очко или 3 очка при хотя бы 1 карте взакрытую; Олимпиада = +1"
      },
      akim: {
        symbol: "🍌",
        name: "Аким",
        description: "Даёт 3 очка; Сергей = +2"
      },
      jaman: {
        symbol: "🥰",
        name: "Ян-Павел",
        description: "Даёт 2 очка; Женя/Сергей/Аким/Рома Козлов/карта взакрытую = +1"
      },
      klinker: {
        symbol: "😃",
        name: "Рома Пянко",
        description: "Даёт 2 очка или 4 при хотя бы 2 Женях; Аким/Ян-Павел = +2"
      },
      vitaly: {
        symbol: "🧪",
        name: "Виталя",
        description: "Даёт 4 очка; Ян-Павел = +2; Женя = +1; Нельзя играть без закрытой карты"
      },
      le: {
        symbol: "⭐",
        name: "Леонид Иванович",
        description: "Даёт -2 очка или -7 очков при хотя бы 1 Яне-Павле; различный вид карт-физмата (в том числе Ян-Павел) = +2; Нельзя играть при Леониде Ивановиче"
      },
      kozlov: {
        symbol: "😇",
        name: "Рома Козлов",
        description: "Даёт 4 очка; пара Сергей + Олимпиада = +2; Нельзя играть без Олимпиады"
      },
      redkov: {
        symbol: "🗺",
        name: "Иван Редьков",
        description: "Даёт 2 очка или 6 очков при равном количестве Акимов и Сергеев, большем 1; Аким/Сергей = +1"
      },
      dzbot: {
        symbol: "📖",
        name: "9В ДЗ",
        description: "Даёт 2 очка или 4 очка при хотя бы 1 Витале; различный вид карт хотя бы в 2 экземплярах = +3; Нельзя играть без Жени"
      }
    },
    number: [
      {
        evgen: 0,
        amogus: 0,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        klinker: 0,
        vitaly: 0,
        le: 0,
        kozlov: 0,
        redkov: 0,
        dzbot: 0
      },
      {
        evgen: 1,
        amogus: 1,
        olympiad: 3,
        sergay: 2,
        akim: 1,
        jaman: 2,
        klinker: 1,
        vitaly: 0,
        le: 1,
        kozlov: 0,
        redkov: 0,
        dzbot: 0
      },
      {
        evgen: 3,
        amogus: 2,
        olympiad: 6,
        sergay: 3,
        akim: 2,
        jaman: 3,
        klinker: 2,
        vitaly: 1,
        le: 1,
        kozlov: 1,
        redkov: 0,
        dzbot: 0
      },
      {
        evgen: 4,
        amogus: 3,
        olympiad: 9,
        sergay: 5,
        akim: 3,
        jaman: 5,
        klinker: 3,
        vitaly: 1,
        le: 1,
        kozlov: 1,
        redkov: 1,
        dzbot: 0
      },
      {
        evgen: 5,
        amogus: 3,
        olympiad: 12,
        sergay: 7,
        akim: 4,
        jaman: 7,
        klinker: 4,
        vitaly: 1,
        le: 1,
        kozlov: 2,
        redkov: 2,
        dzbot: 0
      },
      {
        evgen: 6,
        amogus: 4,
        olympiad: 15,
        sergay: 8,
        akim: 4,
        jaman: 8,
        klinker: 5,
        vitaly: 2,
        le: 2,
        kozlov: 3,
        redkov: 2,
        dzbot: 1
      },
      {
        evgen: 8,
        amogus: 5,
        olympiad: 17,
        sergay: 9,
        akim: 5,
        jaman: 9,
        klinker: 6,
        vitaly: 3,
        le: 2,
        kozlov: 3,
        redkov: 3,
        dzbot: 2
      },
      {
        evgen: 0,
        amogus: 84,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        klinker: 0,
        vitaly: 0,
        le: 0,
        kozlov: 0,
        redkov: 0,
        dzbot: 0
      },
      {
        evgen: 0,
        amogus: 96,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        klinker: 0,
        vitaly: 0,
        le: 0,
        kozlov: 0,
        redkov: 0,
        dzbot: 0
      }
    ]
  },
  otr3: {
    name: "8ФМ 3ОТ",
    cards: {
      freespinio: {
        symbol: "🎰",
        name: "Фриспиньо",
        description: "Даёт 3 очка, если нет Бонусиньо; Бонусиньо = +2"
      },
      bonusinio: {
        symbol: "📈",
        name: "Бонусиньо",
        description: "Даёт 3 очка, если нет Фриспиньо; Фриспиньо = +2"
      },
      prohibited: {
        symbol: "🍫",
        name: "Запрещёнка",
        description: "Вся Запрещёнка даёт в сумме 1/4/9/16/25/36/37/37/37/37 соответственно их количеству"
      },
      jaman: {
        symbol: "🥰",
        name: "Ян-Павел",
        description: "Даёт 2 очка или 4 при хотя бы 2 Янах-Павлах; Сергей/Аким/Садовский Андрей/карта взакрытую = +1"
      },
      sergay: {
        symbol: "🤓",
        name: "Сергей",
        description: "Даёт 1 очко или 3 при хотя бы 1 карте взакрытую; Запрещёнка = +1"
      },
      akim: {
        symbol: "🍌",
        name: "Аким",
        description: "Даёт 3 очка; Сергей = +2; Нельзя играть при Бонусиньо"
      },
      alexander: {
        symbol: "😮",
        name: "Саша",
        description: "Даёт 2 очка или 5 при хотя бы 1 Садовском Андрее; Хотя бы 6 различных видов карт (в том числе этот) = +3; Хотя бы 6/7 Запрещёнок = +6/+12"
      },
      fchxl: {
        symbol: "😎",
        name: "Бородич Иван",
        description: "Даёт 2 очка; Аким = +2; Садовский Андрей/Саша = +1"
      },
      vanya: {
        symbol: "🤯",
        name: "Иван Гречиха",
        description: "Даёт 1 очков; Аким = +3; Хотя бы 1 карта взакрытую = +2; Хотя бы 1 Запрещёнка = +2"
      },
      marat: {
        symbol: "🇰🇵",
        name: "Марат",
        description: "Даёт 4 очка или 8 очков при хотя бы 1 Бородиче Иване и хотя бы 1 Саше; Иван Гречиха = +2; Нельзя играть при Фриспиньо"
      },
      sadovski: {
        symbol: "🥶",
        name: "Садовский Андрей",
        description: "Даёт 3 очка или 6 очков при не больше 6 различных видов карт (в том числе этот)"
      },
      guides: {
        symbol: "👥",
        name: "Вожатые",
        description: "Даёт 6 очков; Запрещёнка/Фриспиньо/Бонусиньо = -3"
      }
    },
    number: [
      {
        freespinio: 0,
        bonusinio: 0,
        prohibited: 0,
        jaman: 0,
        sergay: 0,
        akim: 0,
        alexander: 0,
        fchxl: 0,
        vanya: 0,
        marat: 0,
        sadovski: 0,
        guides: 0
      },
      {
        freespinio: 6,
        bonusinio: 6,
        prohibited: 0,
        jaman: 0,
        sergay: 0,
        akim: 0,
        alexander: 0,
        fchxl: 0,
        vanya: 0,
        marat: 0,
        sadovski: 0,
        guides: 0
      },
      {
        freespinio: 12,
        bonusinio: 12,
        prohibited: 0,
        jaman: 0,
        sergay: 0,
        akim: 0,
        alexander: 0,
        fchxl: 0,
        vanya: 0,
        marat: 0,
        sadovski: 0,
        guides: 0
      },
      {
        freespinio: 5,
        bonusinio: 5,
        prohibited: 6,
        jaman: 2,
        sergay: 4,
        akim: 3,
        alexander: 3,
        fchxl: 2,
        vanya: 2,
        marat: 2,
        sadovski: 1,
        guides: 1
      },
      {
        freespinio: 6,
        bonusinio: 6,
        prohibited: 8,
        jaman: 3,
        sergay: 6,
        akim: 3,
        alexander: 4,
        fchxl: 3,
        vanya: 3,
        marat: 3,
        sadovski: 2,
        guides: 1
      },
      {
        freespinio: 7,
        bonusinio: 7,
        prohibited: 10,
        jaman: 4,
        sergay: 8,
        akim: 4,
        alexander: 6,
        fchxl: 4,
        vanya: 3,
        marat: 3,
        sadovski: 2,
        guides: 2
      },
      {
        freespinio: 8,
        bonusinio: 8,
        prohibited: 12,
        jaman: 6,
        sergay: 9,
        akim: 5,
        alexander: 7,
        fchxl: 4,
        vanya: 4,
        marat: 4,
        sadovski: 3,
        guides: 2
      },
      {
        freespinio: 42,
        bonusinio: 42,
        prohibited: 0,
        jaman: 0,
        sergay: 0,
        akim: 0,
        alexander: 0,
        fchxl: 0,
        vanya: 0,
        marat: 0,
        sadovski: 0,
        guides: 0
      },
      {
        freespinio: 48,
        bonusinio: 48,
        prohibited: 0,
        jaman: 0,
        sergay: 0,
        akim: 0,
        alexander: 0,
        fchxl: 0,
        vanya: 0,
        marat: 0,
        sadovski: 0,
        guides: 0
      }
    ]
  },
  true_classic: {
    name: "8ФМ True Classic",
    cards: {
      alaksiej: {
        symbol: "🐷",
        name: "Алексей Пшеничный",
        description: "Все Алексеи Пшеничные дают в сумме 1/4/9/16/25/36/49/60/75/100 соответственно их количеству"
      },
      evgen: {
        symbol: "🤫",
        name: "Женя",
        description: "Даёт 2 очка; Амогус = +3; Детектор Алексея = +1"
      },
      amogus: {
        symbol: "ඞ",
        name: "Амогус",
        description: "Даёт 3 очка или 6 очков при ровно 2 Амогусах"
      },
      olympiad: {
        symbol: "🏆",
        name: "Олимпиада",
        description: "Даёт 2/4/6 очков при хотя бы 1/3/6 Олимпиадах"
      },
      sergay: {
        symbol: "🤓",
        name: "Сергей",
        description: "Даёт 1 очко или 3 очка при хотя бы 1 карте взакрытую; Олимпиада = +1"
      },
      akim: {
        symbol: "🍌",
        name: "Аким",
        description: "Даёт 3 очка; Сергей = +2"
      },
      marat: {
        symbol: "🇰🇵",
        name: "Марат",
        description: "Даёт 4 очка или 6 очков при ровно 1 Марате; Олимпиада = +1; Нельзя играть при Алексее Пшеничном"
      },
      jaman: {
        symbol: "🥰",
        name: "Ян-Павел",
        description: "Женя/Сергей/Аким = +1; карта взакрытую = +2"
      },
      vanya: {
        symbol: "🤯",
        name: "Иван Гречиха",
        description: "Даёт 5 очков; Аким = +3; Нельзя играть без закрытой карты"
      },
      leonidia: {
        symbol: "🤠",
        name: "Леонидия",
        description: "Даёт 2 очка; различный вид карт (в том числе 🐷, 🤠 и взакрытую) = +1; Алексей Пшеничный = -2"
      },
      veeeep: {
        symbol: "🧨",
        name: "Саша Веп",
        description: "Даёт 3 очка; Марат/Леонидия/Детектор Алексея = +3; Алексей Пшеничный = -2"
      },
      detector: {
        symbol: "⚠️",
        name: "Детектор Алексея",
        description: "Даёт 4 очка; игрок с хотя бы 1 Алексеем Пшеничным = +1; Нельзя играть при Алексее Пшеничном"
      }
    },
    number: [
      {
        alaksiej: 0,
        evgen: 0,
        amogus: 0,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        marat: 0,
        vanya: 0,
        leonidia: 0,
        veeeep: 0,
        detector: 0
      },
      {
        alaksiej: 4,
        evgen: 1,
        amogus: 1,
        olympiad: 1,
        sergay: 0,
        akim: 2,
        jaman: 1,
        marat: 1,
        vanya: 1,
        leonidia: 0,
        veeeep: 0,
        detector: 0
      },
      {
        alaksiej: 0,
        evgen: 2,
        amogus: 2,
        olympiad: 7,
        sergay: 3,
        akim: 2,
        jaman: 3,
        marat: 2,
        vanya: 2,
        leonidia: 1,
        veeeep: 0,
        detector: 0
      },
      {
        alaksiej: 10,
        evgen: 3,
        amogus: 2,
        olympiad: 6,
        sergay: 4,
        akim: 2,
        jaman: 4,
        marat: 2,
        vanya: 2,
        leonidia: 1,
        veeeep: 0,
        detector: 0
      },
      {
        alaksiej: 11,
        evgen: 4,
        amogus: 2,
        olympiad: 9,
        sergay: 6,
        akim: 3,
        jaman: 6,
        marat: 2,
        vanya: 3,
        leonidia: 1,
        veeeep: 1,
        detector: 0
      },
      {
        alaksiej: 13,
        evgen: 5,
        amogus: 3,
        olympiad: 10,
        sergay: 7,
        akim: 4,
        jaman: 7,
        marat: 3,
        vanya: 3,
        leonidia: 2,
        veeeep: 2,
        detector: 1
      },
      {
        alaksiej: 15,
        evgen: 6,
        amogus: 4,
        olympiad: 12,
        sergay: 8,
        akim: 4,
        jaman: 8,
        marat: 3,
        vanya: 4,
        leonidia: 3,
        veeeep: 3,
        detector: 2
      },
      {
        alaksiej: 84,
        evgen: 0,
        amogus: 0,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        marat: 0,
        vanya: 0,
        leonidia: 0,
        veeeep: 0,
        detector: 0
      },
      {
        alaksiej: 96,
        evgen: 0,
        amogus: 0,
        olympiad: 0,
        sergay: 0,
        akim: 0,
        jaman: 0,
        marat: 0,
        vanya: 0,
        leonidia: 0,
        veeeep: 0,
        detector: 0
      }
    ]
  }
}

function countPoints(playerCards, pack = "classic", other = [0]) {
    let points = 0;
    let curcards = {};
    curcards["closed"] = 0;
    let neededCards = cards[pack].cards;
    if ("extended" in cards[pack]) {
        neededCards = cards[pack].extended;
    }
    Object.keys(neededCards).forEach(key => {
        curcards[key] = 0;
    });
    playerCards.forEach(key => {
        curcards[key]++;
    });
    let closed = curcards["closed"];
    points += closed * 2;
    switch (pack) {
        case "classic":
            let alaksiej_points = [0, 1, 4, 9, 16, 25, 36, 49, 60, 75, 100];
            points += alaksiej_points[curcards["alaksiej"]];
            points += curcards["evgen"] * (2 + curcards["amogus"]*3 + curcards["detector"]);
            points += curcards["amogus"] * 3;
            if (curcards["amogus"] == 2)
                points += 6;
            if (curcards["olympiad"] >= 6)
                points += curcards["olympiad"] * 6;
            else if (curcards["olympiad"] >= 3)
                points += curcards["olympiad"] * 4;
            else
                points += curcards["olympiad"] * 2;
            points += curcards["sergay"] * curcards["olympiad"];
            if (closed > 0)
                points += curcards["sergay"] * 3;
            else
                points += curcards["sergay"] * 1;
            points += curcards["akim"] * (3 + curcards["sergay"]*2);
            points += curcards["marat"] * (4 + curcards["olympiad"]);
            if (curcards["marat"] == 1)
                points += 2;
            points += curcards["jaman"] * (
                (curcards["evgen"] + curcards["sergay"] + curcards["akim"] + curcards["ultramax"]) +
                Math.min(closed, 5) * 2
            );
            if (curcards["evgen"] > 0)
                points += curcards["jaman"];
            points += curcards["vanya"] * (5 + curcards["akim"]*3);
            points += curcards["leonidia"] * (2 - curcards["alaksiej"]*2);
            let card_types = 0;
            if (closed > 0)
                points += curcards["leonidia"];
                card_types += 1;
            Object.keys(neededCards).forEach(key => {
                if (curcards[key] > 0)
                    points += curcards["leonidia"];
                    card_types += 1;
            });
            points += curcards["veeeep"] * (1 +
                (curcards["marat"] + curcards["leonidia"] + curcards["detector"])*3 -
                curcards["alaksiej"] * 2
            );
            if (curcards["veeeep"] == 1)
                points += 2;
            points += curcards["detector"] * (4 + other[0]);
            points += curcards["alexandr"] * (4 + curcards["evgen"] + curcards["ultramax"] + curcards["sergay"]);
            if (card_types >= 6)
                points += curcards["alexandr"] * (-3);
            points += curcards["ultramax"] * (Math.min(curcards["evgen"], curcards["alexandr"])*4 + curcards["akim"]);
            if (curcards["amogus"] <= 0)
                points += curcards["ultramax"] * 2;
            if (card_types >= 6)
                points += curcards["ultramax"] * 2;
            break;
    }
    return points;
}

function isPlayable(card, playerCards, pack = "classic") {
    let b = true;
    switch (pack) {
        case "classic":
            if (card == "marat" || card == "detector") {
                playerCards.forEach(key => {
                    if (key == "alaksiej") {
                        b = false;
                        return;
                    }
                });
            } else if (card == "vanya") {
                playerCards.forEach(key => {
                    if (key == "closed") {
                        b = false;
                        return;
                    }
                });
                b = !b;
            }
            break;
    }
    return b;
}