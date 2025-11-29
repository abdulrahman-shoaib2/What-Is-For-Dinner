const recipesList = [
  {
    title: "Caprese Sandwich",
    desc: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    img: {
      online:"https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop",
      local:"./images/caprese-sandwich.png",
    },
    rating: "4.5",
    reviews: "(189 reviews)",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Italian",
    alertHidden: true,
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "22g",
      carbs: "48g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    chefTips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
  {
    title: "Chicken Tikka Masala",
    desc: "Rich and creamy Indian curry with tender chicken pieces",
    img: {
      online:"https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800&auto=format&fit=crop",
      local:"./images/chicken-tikka-masala.png ",
    },
    rating: "4.7",
    reviews: "(389 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    level: "Intermediate",
    cuisine: "Asian",
    alertHidden: false,
    ingredients: [
      "600g chicken breast, cubed",
      "1 cup plain yogurt",
      "2 tablespoons tikka masala paste",
      "400ml coconut cream",
      "1 onion, diced",
      "4 cloves garlic, minced",
      "2 tablespoons ginger, grated",
      "400g canned tomatoes",
      "Fresh cilantro for garnish",
    ],
    instructions: [
      "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
      "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sodium: "760mg",
    },
    chefTips: [
      "Marinate chicken overnight for deeper flavor",
      "Use full-fat coconut cream for richest sauce",
      "Adjust spice level by varying the tikka paste amount",
      "Serve with naan bread and basmati rice",
    ],
  },
  {
    title: "Shrimp Scampi",
    desc: "Garlicky shrimp in white wine butter sauce",
    img: {
      online:"https://images.unsplash.com/photo-1633504581786-316c8002b1b9?q=80&w=800&auto=format&fit=crop",
      local:"./images/shrimp-scampi.png",
    },
    rating: "4.8",
    reviews: "(356 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Seafood",
    alertHidden: true,
    ingredients: [
      "400g large shrimp, peeled",
      "300g linguine pasta",
      "6 cloves garlic, minced",
      "1/2 cup white wine",
      "4 tablespoons butter",
      "2 tablespoons olive oil",
      "Fresh parsley, chopped",
      "Lemon juice and zest",
      "Red pepper flakes",
    ],
    instructions: [
      "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
      "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      "Garnish with parsley, lemon zest, and serve immediately.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },
    chefTips: [
      "Don't overcook shrimp - they cook very quickly",
      "Use good quality white wine for best flavor",
      "Toss pasta in sauce for maximum flavor absorption",
      "Add extra lemon for bright, fresh taste",
    ],
  },
  {
    title: "Honey Garlic Salmon",
    desc: "Pan-seared salmon with a sweet and savory glaze",
    img: {
      online:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
      local:"./images/honey-garlic-salmon.png",
    },
    rating: "4.9",
    reviews: "(187 reviews)",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Seafood",
    alertHidden: true,
    ingredients: [
      "2 salmon fillets (6oz each)",
      "3 tablespoons honey",
      "2 tablespoons soy sauce",
      "4 cloves garlic, minced",
      "1 tablespoon olive oil",
      "1 teaspoon fresh ginger, grated",
      "Sesame seeds for garnish",
      "Green onions, sliced",
    ],
    instructions: [
      "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      "Heat olive oil in a large skillet over medium-high heat.",
      "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
      "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },
    chefTips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    title: "Teriyaki Chicken Bowl",
    desc: "Sweet and savory chicken over rice with vegetables",
    img: {
      online:"https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=800&auto=format&fit=crop",
      local:"./images/teriyaki-chicken-bowl.png",
    },
    rating: "4.7",
    reviews: "(367 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Asian",
    alertHidden: true,
    ingredients: [
      "400g chicken thighs, sliced",
      "1/2 cup teriyaki sauce",
      "2 cups cooked rice",
      "1 broccoli head, florets",
      "1 carrot, julienned",
      "Sesame seeds",
      "Green onions, sliced",
      "1 tablespoon sesame oil",
    ],
    instructions: [
      "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      "Meanwhile, steam broccoli and carrots until tender-crisp.",
      "Divide rice between bowls.",
      "Top with teriyaki chicken and steamed vegetables.",
      "Garnish with sesame seeds and green onions. Serve hot.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg",
    },
    chefTips: [
      "Use chicken thighs for juicier meat",
      "Make homemade teriyaki sauce for better flavor control",
      "Add edamame for extra protein",
      "Meal prep by cooking rice and chicken ahead",
    ],
  },
  {
    title: "French Onion Soup",
    desc: "Rich beef broth with caramelized onions and melted cheese",
    img: {
      online:"https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop",
      local:"./images/french-onion-soup.png",
    },
    rating: "4.7",
    reviews: "(267 reviews)",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    level: "Intermediate",
    cuisine: "Mediterranean",
    alertHidden: false,
    ingredients: [
      "4 large onions, thinly sliced",
      "4 tablespoons butter",
      "1 liter beef broth",
      "1/2 cup white wine",
      "2 bay leaves",
      "Fresh thyme",
      "Baguette slices",
      "200g Gruyère cheese, grated",
    ],
    instructions: [
      "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      "Add white wine and deglaze the pot, scraping up brown bits.",
      "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      "Meanwhile, toast baguette slices until golden.",
      "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    chefTips: [
      "Patience is key - don't rush the onion caramelization",
      "Use good quality beef broth for best flavor",
      "Gruyère can be substituted with Swiss cheese",
      "Watch carefully when broiling to avoid burning",
    ],
  },
  {
    title: "Caesar Salad",
    desc: "Classic salad with crispy romaine and creamy dressing",
    img: {
      online:"https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop",
      local:"./images/caesar-salad.png",
    },
    rating: "4.4",
    reviews: "(198 reviews)",
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Mediterranean",
    alertHidden: true,
    ingredients: [
      "1 large romaine lettuce",
      "1/2 cup Caesar dressing",
      "1/2 cup parmesan cheese, shaved",
      "1 cup croutons",
      "2 anchovy fillets (optional)",
      "Lemon wedges",
      "Black pepper",
    ],
    instructions: [
      "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      "Place lettuce in a large salad bowl.",
      "Add Caesar dressing and toss until evenly coated.",
      "Add croutons and half the parmesan cheese. Toss gently.",
      "Top with remaining parmesan shavings and anchovies if using.",
      "Serve immediately with lemon wedges and fresh black pepper.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    chefTips: [
      "Use cold, crisp lettuce for best texture",
      "Make homemade croutons for better flavor",
      "Add grilled chicken for a complete meal",
      "Don't dress salad until ready to serve",
    ],
  },
  {
    title: "Lasagna Bolognese",
    desc: "Layered Italian pasta with rich meat sauce and béchamel",
    img: {
      online:"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop",
      local:"./images/lasagna-bolognese.png ",
    },
    rating: "4.9",
    reviews: "(478 reviews)",
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
    level: "Intermediate",
    cuisine: "Italian",
    alertHidden: false,
    ingredients: [
      "12 lasagna sheets",
      "500g ground beef",
      "400g canned tomatoes",
      "1 onion, diced",
      "2 carrots, diced",
      "500ml béchamel sauce",
      "200g mozzarella, grated",
      "100g parmesan cheese",
      "Fresh basil",
    ],
    instructions: [
      "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      "Cook lasagna sheets according to package directions. Drain and set aside.",
      "Preheat oven to 180°C (350°F).",
      "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
      "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "28g",
      fiber: "6g",
      sodium: "920mg",
    },
    chefTips: [
      "Make bolognese sauce a day ahead for better flavor",
      "Don't skip the resting time after baking",
      "Use fresh pasta sheets for best texture",
      "Freeze leftovers in individual portions",
    ],
  },
  {
    title: "Vegetable Curry",
    desc: "Hearty vegetarian curry with coconut milk",
    img: {
      online:"https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=800&auto=format&fit=crop",
      local:"./images/vegetable-curry.png",
    },
    rating: "4.6",
    reviews: "(289 reviews)",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "Asian",
    alertHidden: false,
    ingredients: [
      "2 potatoes, cubed",
      "1 cauliflower, florets",
      "2 carrots, sliced",
      "1 can chickpeas",
      "400ml coconut milk",
      "3 tablespoons curry powder",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "Fresh spinach",
    ],
    instructions: [
      "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      "Add potatoes and carrots, cook for 5 minutes.",
      "Pour in coconut milk and 1 cup water. Bring to simmer.",
      "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
      "Stir in fresh spinach and cook until wilted.",
      "Serve hot over basmati rice or with naan bread.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "14g",
      carbs: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },
    chefTips: [
      "Add vegetables in order of cooking time needed",
      "Adjust curry powder amount to taste",
      "Use full-fat coconut milk for creamier curry",
      "Add protein like tofu or paneer if desired",
    ],
  },
  {
    title: "Beef Tacos",
    desc: "Flavorful Mexican tacos with seasoned ground beef",
    img: {
      online:"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=800&auto=format&fit=crop",
      local:"./images/beef-tacos.png",
    },
    rating: "4.6",
    reviews: "(278 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "American",
    alertHidden: true,
    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 tablespoons taco seasoning",
      "Shredded lettuce",
      "Diced tomatoes",
      "Shredded cheddar cheese",
      "Sour cream",
      "Salsa",
    ],
    instructions: [
      "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      "Add diced onion and cook until softened, about 5 minutes.",
      "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      "Warm taco shells according to package directions.",
      "Fill each shell with seasoned beef.",
      "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "32g",
      fat: "20g",
      fiber: "4g",
      sodium: "780mg",
    },
    chefTips: [
      "Drain excess fat from beef for healthier tacos",
      "Warm shells in oven for better texture",
      "Prepare all toppings before cooking beef",
      "Use ground turkey for a lighter option",
    ],
  },
  {
    title: "Greek Moussaka",
    desc: "Traditional layered eggplant casserole with lamb",
    img: {
      online:"https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=800&auto=format&fit=crop",
      local:"./images/greek-moussaka.png",
    },
    rating: "4.8",
    reviews: "(234 reviews)",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    level: "Intermediate",
    cuisine: "Mediterranean",
    alertHidden: false,
    ingredients: [
      "3 large eggplants, sliced",
      "500g ground lamb",
      "400g canned tomatoes",
      "1 onion, diced",
      "3 cloves garlic, minced",
      "500ml béchamel sauce",
      "100g parmesan cheese",
      "Cinnamon and oregano",
      "Olive oil",
    ],
    instructions: [
      "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      "Brush eggplant slices with olive oil, grill or bake until softened.",
      "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      "Preheat oven to 180°C (350°F).",
      "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "36g",
      carbs: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg",
    },
    chefTips: [
      "Salt eggplant to remove bitterness",
      "Don't skip the resting time - it helps set the layers",
      "Use ground beef if lamb is unavailable",
      "Make ahead and reheat for easier serving",
    ],
  },
  {
    title: "Classic Beef Burger",
    desc: "Juicy homemade burger with all the fixings",
    img: {
      online:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
      local:"./images/classic-beef-burger.png",
    },
    rating: "4.6",
    reviews: "(421 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "American",
    alertHidden: true,
    ingredients: [
      "500g ground beef (80/20)",
      "4 burger buns",
      "4 slices cheddar cheese",
      "Lettuce leaves",
      "Tomato slices",
      "Red onion, sliced",
      "Pickles",
      "Burger sauce or condiments",
    ],
    instructions: [
      "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      "Season patties generously with salt and pepper on both sides.",
      "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      "Add cheese slices in the last minute of cooking and cover to melt.",
      "Toast burger buns lightly on the grill or in a pan.",
      "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },
    chefTips: [
      "Don't press down on burgers while cooking - keeps them juicy",
      "Make indent in center to prevent burger from puffing up",
      "Let patties rest for 2-3 minutes before serving",
      "Toast buns for better texture and flavor",
    ],
  },
  {
    title: "Chicken Stir-Fry",
    desc: "Quick and healthy stir-fry with colorful vegetables",
    img: {
      online:"https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=800&auto=format&fit=crop",
      local:"./images/chicken-stir-fry.png",
    },
    rating: "4.5",
    reviews: "(324 reviews)",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "Asian",
    alertHidden: true,
    ingredients: [
      "500g chicken breast, sliced",
      "2 bell peppers, sliced",
      "1 broccoli head, florets",
      "2 carrots, julienned",
      "3 tablespoons soy sauce",
      "2 tablespoons oyster sauce",
      "1 tablespoon sesame oil",
      "2 cloves garlic, minced",
      "Fresh ginger, grated",
    ],
    instructions: [
      "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
      "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      "Serve immediately over steamed rice or noodles.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbs: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },
    chefTips: [
      "Cut all ingredients before starting to cook",
      "Keep heat high for authentic stir-fry texture",
      "Don't overcrowd the wok or vegetables will steam",
      "Add cashews or peanuts for extra crunch",
    ],
  },
  {
    title: "Creamy Spaghetti Carbonara",
    desc: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    img: {
      online:"https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
      local:"./images/creamy-spaghetti-carbonara.png",
    },
    rating: "4.8",
    reviews: "(234 reviews)",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "Italian",
    alertHidden: true,
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water",
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },
    chefTips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    title: "Mediterranean Quinoa Bowl",
    desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    img: {
      online:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      local:"./images/mediterranean-quinoa-bowl.png",
    },
    rating: "4.5",
    reviews: "(156 reviews)",
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
    level: "Easy",
    cuisine: "Mediterranean",
    alertHidden: false,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes, halved",
      "Cucumber, diced",
      "Red onion, sliced",
      "Kalamata olives",
      "Feta cheese, crumbled",
      "Fresh parsley",
      "Tahini dressing",
    ],
    instructions: [
      "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      "While quinoa cooks, prepare all vegetables and set aside.",
      "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      "Fluff cooked quinoa with a fork and let cool slightly.",
      "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg",
    },
    chefTips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },
  {
    title: "Thai Green Curry",
    desc: "Vibrant and aromatic curry with vegetables and coconut milk",
    img: {
      online:"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=800&auto=format&fit=crop",
      local:"./images/thai-green-curry.png",
    },
    rating: "4.7",
    reviews: "(312 reviews)",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    level: "Intermediate",
    cuisine: "Asian",
    alertHidden: true,
    ingredients: [
      "2 tablespoons green curry paste",
      "400ml coconut milk",
      "300g chicken breast, sliced",
      "1 red bell pepper, sliced",
      "100g green beans",
      "1 eggplant, cubed",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Fresh Thai basil leaves",
    ],
    instructions: [
      "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Add half the coconut milk and stir to combine with the curry paste.",
      "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
      "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    chefTips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    title: "BBQ Pulled Pork",
    desc: "Slow-cooked tender pork in smoky barbecue sauce",
    img: {
      online:"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=800&auto=format&fit=crop",
      local:"./images/bbq-pulled-pork.png",
    },
    rating: "4.7",
    reviews: "(412 reviews)",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    level: "Easy",
    cuisine: "American",
    alertHidden: false,
    ingredients: [
      "1kg pork shoulder",
      "1 cup BBQ sauce",
      "1/2 cup apple cider vinegar",
      "2 tablespoons brown sugar",
      "1 tablespoon paprika",
      "1 tablespoon garlic powder",
      "Burger buns",
      "Coleslaw for serving",
    ],
    instructions: [
      "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      "Remove pork and shred with two forks. Discard excess fat.",
      "Return shredded pork to slow cooker, mix with BBQ sauce.",
      "Serve on toasted buns with coleslaw on top.",
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "48g",
      carbs: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },
    chefTips: [
      "Use pork shoulder for best results - it stays moist",
      "Let pork rest before shredding for juicier meat",
      "Make your own BBQ sauce for better flavor",
      "Leftovers freeze well for up to 3 months",
    ],
  },
  {
    title: "Pad Thai",
    desc: "Popular Thai stir-fried noodles with shrimp and peanuts",
    img: {
      online:"https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=800&auto=format&fit=crop",
      local:"./images/pad-thai.png",
    },
    rating: "4.8",
    reviews: "(445 reviews)",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    level: "Intermediate",
    cuisine: "Asian",
    alertHidden: true,
    ingredients: [
      "200g rice noodles",
      "200g shrimp, peeled",
      "2 eggs",
      "3 tablespoons tamarind paste",
      "2 tablespoons fish sauce",
      "1 tablespoon palm sugar",
      "Bean sprouts",
      "Crushed peanuts",
      "Lime wedges and cilantro",
    ],
    instructions: [
      "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      "Heat wok over high heat. Scramble eggs and set aside.",
      "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
      "Add scrambled eggs and bean sprouts. Toss everything together.",
      "Serve topped with crushed peanuts, lime wedges, and cilantro.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },
    chefTips: [
      "Don't oversoak noodles or they'll be mushy",
      "Cook on high heat for authentic wok flavor",
      "Balance sweet, sour, and salty flavors",
      "Prepare all ingredients before starting to cook",
    ],
  },
  {
    title: "Margherita Pizza",
    desc: "Classic Italian pizza with fresh mozzarella and basil",
    img: {
      online:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
      local:"./images/margherita-pizza.png",
    },
    rating: "4.9",
    reviews: "(512 reviews)",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    level: "Intermediate",
    cuisine: "Italian",
    alertHidden: false,
    ingredients: [
      "300g pizza dough",
      "200g crushed tomatoes",
      "250g fresh mozzarella",
      "Fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "Salt and pepper to taste",
      "Parmesan cheese for topping",
    ],
    instructions: [
      "Let pizza dough come to room temperature and rest for 1 hour.",
      "Preheat oven to maximum temperature (usually 250°C/480°F).",
      "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      "Roll out dough on a floured surface to desired thickness.",
      "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },
    chefTips: [
      "Use a pizza stone for crispier crust",
      "Don't overload with toppings - less is more",
      "Add basil after baking to keep it fresh",
      "Let dough rest properly for best texture",
    ],
  },
];


var recipeImg = document.getElementById("recipe-img");
var recipeRatingAvg = document.getElementById("rating-avg");
var recipeReviews = document.getElementById("reviews");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var peopleServing = document.getElementById("people");
var levelBadge = document.getElementById("level-badge");
var categoryBadge = document.getElementById("category-badge");
var recipeTitle = document.getElementById("recipe-title");
var recipeDesc = document.getElementById("recipe-desc");
var timeWarning = document.getElementById("time-warning");
var caloriesValue = document.getElementById("calories-value");
var proteinValue = document.getElementById("protein-value");
var carbsValue = document.getElementById("carbs-value");
var fatValue = document.getElementById("fat-value");
var fiberValue = document.getElementById("fiber-value");
var sodiumValue = document.getElementById("sodium-value");
var ingredientsList = document.getElementById("ingredients-content");
var instructionsList = document.getElementById("instructions-content");
var chefTipsList = document.getElementById("chef-tips-content");
var shownRecipes = [];

function refreshRecipe(number=-1) {
  // console.log("hiiiiiii")
  if(number != -1){
    if(number === "all"){
      var allImages = '';
      console.log(`All Images Names: ${number} \n`)
      for(var i = 0 ; i < recipesList.length; i+=1){
        allImages += `${recipesList[i].title.toLowerCase().replaceAll(" ","-")}.png \n`
      }
      console.log(allImages)
    }

    displayRecipes(number)
    console.log(`You choosed number: ${number} \nImage: ${recipesList[number].img.local} \nNew Image Name: \n${recipesList[number].title.toLowerCase().replaceAll(" ","-")}.png`)
    
  }else{
    var startWithRecipeNum = 0;
    var recipeNum = Math.floor(
      Math.random() * Number(recipesList.length) + startWithRecipeNum
    );
    if (shownRecipes.length >= recipesList.length) {
      console.log("you have shown all recipes");
      shownRecipes = [];
      recipeNum = Math.floor(
        Math.random() * Number(recipesList.length) + startWithRecipeNum
      );
      shownRecipes.push(recipeNum);
      console.log(  `shownRecipes[]: ${shownRecipes} \nshownRecipes.length: ${shownRecipes.length} \nnumber:  ${recipeNum}` );
      displayRecipes(recipeNum);
    } else {
      for (; shownRecipes.includes(recipeNum); ) {
        recipeNum = Math.floor(
          Math.random() * Number(recipesList.length) + startWithRecipeNum
        );
      }
      shownRecipes.push(recipeNum);
      console.log(  `shownRecipes[]: ${shownRecipes} \nshownRecipes.length: ${shownRecipes.length} \nnumber:  ${recipeNum}` );
      displayRecipes(recipeNum);
    }
  }


}
function displayRecipes(recipeNum) {
  
  
  recipeImg.src = recipesList[recipeNum].img.local;
  recipeRatingAvg.innerText = recipesList[recipeNum].rating;
  recipeReviews.innerText = recipesList[recipeNum].reviews;
  prepTime.innerText = recipesList[recipeNum].prepTime;
  cookTime.innerText = recipesList[recipeNum].cookTime;
  peopleServing.innerText = recipesList[recipeNum].servings;
  levelBadge.innerText = recipesList[recipeNum].level;
  categoryBadge.innerText = recipesList[recipeNum].cuisine;
  recipeTitle.innerText = recipesList[recipeNum].title;
  recipeDesc.innerText = recipesList[recipeNum].desc;
  if (recipesList[recipeNum].alertHidden) {
    timeWarning.className = "visually-hidden";
  }
  ingredientsList.innerHTML = displayList(
    recipesList[recipeNum].ingredients,
    "ingredients"
  );
  instructionsList.innerHTML = displayList(
    recipesList[recipeNum].instructions,
    "instructions"
  );
  caloriesValue.innerText = recipesList[recipeNum].nutrition.calories;
  proteinValue.innerText = recipesList[recipeNum].nutrition.protein;
  carbsValue.innerText = recipesList[recipeNum].nutrition.carbs;
  fatValue.innerText = recipesList[recipeNum].nutrition.fat;
  fiberValue.innerText = recipesList[recipeNum].nutrition.fiber;
  sodiumValue.innerText = recipesList[recipeNum].nutrition.sodium;
  chefTipsList.innerHTML = displayList(recipesList[recipeNum].chefTips, "tips");
}

function displayList(list, name) {
  var cartona = "";
  var ele;
  for (var i = 0; i < list.length; i += 1) {
    switch (name) {
      case "ingredients":
        ele = `<div class="d-flex column-gap-2 ">
                  <span class="numbering rounded-circle fa-stack as-fsa2 as-ff1 rounded-circle user-select-none">
                    <i class="fa-solid fa-circle fa-stack-2x as-orange500"></i>
                    <span class="fa-stack-1x as-fsa2 as-ff1 fa-inverse fw-bold">${
                      i + 1
                    }</span>
                  </span>
                <span class="as-fsa6 as-ff1">${list[i]}</span>
              </div>`;
        break;
      case "instructions":
        ele = `<div class="d-flex align-items-center column-gap-2">
                  <span class="as-s2 as-sy6 as-fsb2 as-ff1 as-bgorange500 fw-bold text-white rounded-4 user-select-none d-flex justify-content-center align-items-center flex-shrink-0 flex-grow-0">${
                    i + 1
                  }</span>
                  <span class=" as-fsa6 as-ff1">${list[i]}</span>
                </div>`;
        break;
      case "tips":
        ele = `<div class="as-bgamber50 border-start as-border-amber400 border-4 rounded-3 py-4 px-3 d-flex align-items-center justify-content-start gap-2">
                <i class="fa-solid fa-check-circle as-amber600 as-fsb1 as-ff1"></i>
                <p class="as-gray700 as-fsa2">${list[i]}</p>
              </div>
                    `;
        break;
    }
    cartona += ele;
  }
  return cartona;
}
refreshRecipe();
