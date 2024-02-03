import 'package:flutter/material.dart';
import 'package:jewellry_shop/ui_kit/_ui_kit.dart';

class ProfileScreen extends StatelessWidget {
  const ProfileScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: _appBar(context),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Padding(
            padding: const EdgeInsets.all(30),
            child: CircleAvatar(
              radius: 150,
              backgroundImage: AssetImage(AppAsset.profileImage),
            ),
          ),
          Text(
            "Добро пожаловать Энвер",
            style: Theme.of(context).textTheme.displayLarge,
          ),
          const SizedBox(height: 20),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Добавьте сюда необходимые виджеты
            ],
          ),
        ],
      ),
    );
  }

  PreferredSizeWidget _appBar(BuildContext context) {
    return AppBar(
      title: Text(
        "Профиль",
        style: Theme.of(context).textTheme.displayMedium,
      ),
    );
  }
}
