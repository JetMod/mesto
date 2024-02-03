import 'package:flutter/material.dart';

import '../ui_kit/_ui_kit.dart';
import 'models/_models.dart';

class AppData {
  const AppData._();

  static const dummyText =
      "Lorem Ipsum is simply dummy text of the printing and typesetting "
      "industry. Lorem Ipsum has been the industry's standard dummy text ever "
      "since the 1500s, when an unknown printer took a galley of type and "
      "scrambled it to make a type specimen book. It has survived not only five "
      "centuries, but also the leap into electronic typesetting, remaining "
      "essentially unchanged. It was popularised in the 1960s with the release "
      "of Letraset sheets containing Lorem Ipsum passages, and more recently "
      "with desktop publishing software like Aldus PageMaker including versions "
      "of Lorem Ipsum.";

  static List<Jew> jewItems = [
    Jew(
      id: 1,
      image: AppAsset.ring1,
      name: "IPHONE 15 PRO",
      price: 1500.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.iphone,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 2,
      image: AppAsset.ring2,
      name: "IPHONE 15",
      price: 1300.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.iphone,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 3,
      image: AppAsset.ring3,
      name: "IPHONE 14",
      price: 1150.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.iphone,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 4,
      image: AppAsset.ring4,
      name: "IPHONE 14 PRO",
      price: 1400.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.iphone,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 5,
      image: AppAsset.ear1,
      name: "Xiomi 15",
      price: 700.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.xiomi,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 6,
      image: AppAsset.ear2,
      name: "Xiomi 16",
      price: 800.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.xiomi,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 7,
      image: AppAsset.ear3,
      name: "Xiomi 10",
      price: 250.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.xiomi,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 8,
      image: AppAsset.braslet1,
      name: "Asus",
      price: 750.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.asus,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 9,
      image: AppAsset.braslet2,
      name: "asus",
      price: 10.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.asus,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 10,
      image: AppAsset.braslet3,
      name: "Asus 10",
      price: 1000.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.asus,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 11,
      image: AppAsset.brooch1,
      name: "Meizu 13",
      price: 1200.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.meizu,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 12,
      image: AppAsset.brooch2,
      name: "Meizu 12",
      price: 950.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.meizu,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 13,
      image: AppAsset.pend1,
      name: "oneFox",
      price: 205.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.oneFox,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 14,
      image: AppAsset.pend2,
      name: "OneFox 12",
      price: 1000.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.oneFox,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 15,
      image: AppAsset.watch1,
      name: "Samsung S15",
      price: 1300.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.samsung,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 16,
      image: AppAsset.watch2,
      name: "samsung 17",
      price: 1550.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.samsung,
      voter: 150,
      cart: false,
    ),
    Jew(
      id: 17,
      image: AppAsset.watch3,
      name: "samsung 17S",
      price: 1150.0,
      quantity: 1,
      isFavorite: false,
      description: "Характеристики iPhone 15 и 15 Pro"
          "Дисплей: 6,1″, OLED, 2556 × 1179, 60 Гц / 6,1″, OLED, 2556 × 1179, 120 Гц"
          "Чип: A16 / A17 Pro"
          "Оперативная память: 6 ГБ / 8 ГБ"
          "Постоянная память: 128, 256 и 512 ГБ / 128, 256, 512 и 1024 ГБ"
          "Основная камера: 48 Мп + 12 Мп / 48 Мп + 12 Мп + 12 Мп"
          "Фронтальная камера: 12 Мп / 12 Мп"
          "Аккумулятор: 3349 мА·ч / 3274 мА·ч"
          "Габариты: 147,6 × 71,6 × 7,8 мм, 187 г / 146,6 × 70,6 × 8,3 мм, 187 г",
      score: 5.0,
      type: JewType.samsung,
      voter: 150,
      cart: false,
    ),
  ];

  static List<BottomNavigationItem> bottomNavigationItems = [
    BottomNavigationItem(
      const Icon(Icons.home_outlined),
      const Icon(Icons.home),
      'Home',
      isSelected: true,
    ),
    BottomNavigationItem(
      const Icon(Icons.shopping_cart_outlined),
      const Icon(Icons.shopping_cart),
      'Shopping cart',
    ),
    BottomNavigationItem(
      const Icon(AppIcon.outlinedHeart),
      const Icon(AppIcon.heart),
      'Favorite',
    ),
    BottomNavigationItem(
      const Icon(Icons.person_outline),
      const Icon(Icons.person),
      'Profile',
    )
  ];

  static List<JewCategory> categories = [
    JewCategory(type: JewType.all, isSelected: true),
    JewCategory(type: JewType.iphone, isSelected: false),
    JewCategory(type: JewType.xiomi, isSelected: false),
    JewCategory(type: JewType.meizu, isSelected: false),
    JewCategory(type: JewType.asus, isSelected: false),
    JewCategory(type: JewType.oneFox, isSelected: false),
    JewCategory(type: JewType.samsung, isSelected: false),
  ];

  static List<Jew> cartItems = [jewItems[0], jewItems[1], jewItems[2]];

  static List<Jew> favoriteItems = [
    jewItems[0]..isFavorite = true,
    jewItems[1]..isFavorite = true,
    jewItems[2]..isFavorite = true
  ];

  static Jew jew = Jew(
    id: 16,
    image: AppAsset.watch2,
    name: "samsung2",
    price: 10.0,
    quantity: 1,
    isFavorite: false,
    description: dummyText,
    score: 5.0,
    type: JewType.samsung,
    voter: 150,
    cart: false,
  );
}
