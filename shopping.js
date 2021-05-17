var shop = [
  {
    title: 'Nylabone Dog Chews',
    image: '../img/nylabone-chew.webp',
    price: '5.99',
    description: "These longer-lasting, treats are good for dogs gum and oral health. Get yours today. "
  },
  
  {
    title: 'Therapy Dog Tags',
    image: '../img/service_dog_tags.jpg',
    price: '9.99',
    description: "Announce your pet's mission with our durable 'Service Dog'tags"
  },
  
  {
    title: 'No-pull dog halter leash',
    image: '../img/no_pull_dog_halter_leash.jpg',
    price: '15.99',
    description: "Safely and gently lead your pets with our no-pull leash. Don't delay, get yours today!"
  },
  
  {
    title: 'Schedule Your Pets with our Vets',
    image: '../img/pets_and_vet_in_arms.jpg',
    price: ' Fee schedules will vary',
    description: "Book your pet-doctor visits with our locator. In-person or tele-health consultations. Schedule today!"
  },
  
  {
    title: 'Leather belt and leash system',
    image: '../img/Leather_belt_and_leash_system.jpg',
    price: '39.99',
    description:"Stay connected with this durable leash system. Chew resistant and sturdy, it'll serve you both for years to come."
  },
  
  {
    title: 'Wheelchair Hook ',
    image: '../img/Wheelchair_Hook.jpg',
    price: '9.99',
    description:"Always connect securely with our stylish wheelchair hook. Compatible with any wheelchair model, just hook and go!"
  },
  
  {
    title: 'Therapy Dog Pouch',
    image: '../img/Therapy_dog_pouch.jpg',
    price: '9.99',
    description:"This pouch easily holds your essentials. Waterproof and discrete, with a catch resistant zipper secures your items securely. Get yours today!"
  },
  
  {
    title: 'Hay Bundle',
    image: '../img/Hay_Bundle.png',
    price: '14.95',
    description:"Make your pets feel right at home with our premium hay bundles for cages and treats! Grown and sourced locally for optimum freshness."
  },
  
  {
    title: 'Horse Grooming Kit',
    image: '../img/horse_grooming_kit.png',
    price: '15.95',
    description: "A well-groomed horse is a treasure.Care for their mane and coat with our essential 9-pc grooming kit."
  },
  
  {
    title: 'Therapy Pet Sticker',
    image: '../img/I_need_space_button_or_sticker.png',
    price: '4.95',
    description:"Kindly request a little space with our colorful sticker, featuring a red stop sign. This gentle reminder keeps your pet on task."
  },
  
  {
    title: 'Ginea Pig Cage',
    image: '../img/multi_level_hamster_cage.png',
    price: '94.99',
    description:"This multi-layer condo-hutch makes a great home for your furry friends! Rust resistant, this sturdy cage will serve you well."
  },
  
  {
    title: 'Ginea Pig Food',
    image: '../img/ginea_pig_pellet_food.png',
    price: '4.99',
    description:"Nourish your ginea's with the best food.Infused with greens and sweet carrots, this is sure to be a favorite! Stock up today!"
  },
  
  {
    title: 'Mini saddle',
    image: "../img/mini_saddle.png",
    price: '24.99',
    description:"Nestle your little one in our safe & cozy leather saddle. Extra buckles and snaps included."
  },
  
  {
    title: 'Cat litter Box',
    image: '../img/cat_litter_box.webp',
    price: '14.95',
    description:"Give your cat a spacious litter box with our sturdy, stylish design. Self cleaning options available."
  },
  
  {
    title: 'Kitty Litter',
    image: '../img/cat_litter.jpg',
    price: '14.49',
    description:"Fragrant, non-stick crystals with a color-based health indicator for your feline.Freshness guaranteed."
  },

  {
    title: 'Rabbit Food',
    image: '../img/rabbit_food.jpg',
    price: '9.88',
    description:"Feed your rabbit with all the nutrients needed for health and long life with our formulation."
  }
  


  ]
  
  var postHTML = ""
  var prefix1 = "<div class='row'>"
  var suffix1 = "</div>"

  for(let i = 0; i < shop.length; i++){    
      var card_prefix = "<div class='col-md-3 d-flex align-items-stretch'><div class='card' style='width: 18rem border: 5px;'>"
      var  card_img = "<img class='card-img-top' src=" + shop[i].image + " alt='Card image cap'>"
      var card_body = "<div class='card-body'>"
      var heading = "<h5 class='card-title'>" + shop[i].title +"</h5>"
      var price = "<p class='card-text'>" + shop[i].price + "</p> "
      var description = "<p class='card-text'>" + shop[i].description + "</p> "
      var btn = "<a href='#' class='btn '>Add To Cart</a>"
      var card_suffix = " </div> </div></div>"  

      postHTML += card_prefix + card_img + card_body + heading + price + description + btn + card_suffix
  }

postHTML = prefix1 + postHTML + suffix1
document.getElementById('market').innerHTML = postHTML