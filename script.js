if (!localStorage.getItem("tejas_cart")) {
  localStorage.setItem("tejas_cart", "[]");
}


// ================== UTILITIES ==================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

// ================== CONTACT FORM ==================
const contactForm = $("#contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const msg = $("#formMsg");
    msg.textContent =
      "Thanks! Your message has been recorded. We will contact you soon.";
    msg.style.color = "#2e7d32";
    contactForm.reset();
  });
}
// ---------- Vegetable data ----------
const vegData = {
  "cabbage": [
  { 
    name: "TAS - MARK", 
    img: "images/cabbage-mark.jpg", 
    characteristics: [
      "Early Maturity 50-55 D.A.T",
      "Head is uniform, round and compact",
      "Green colour",
      "Tolerant to bacterial rot disease",
      "Very good keeping quality",
      "800gm to 1 kg weight"
    ]
  },
  { 
    name: "TAS - ROCK", 
    img: "images/cabbage-rock.jpg", 
    characteristics: [
      "Medium Maturity 70-75 D.A.T",
      "Head is uniform, round and compact",
      "Shiny bluish green colour",
      "Tolerant to bacterial rot disease",
      "Very good keeping quality",
      "1.5 - 2kg weight"
    ]
  }
],

"cauliflower": [
  { 
    name: "TAS - WHITE BABY", 
    img: "images/cauliflower-whitebaby.jpg", 
    characteristics: [
      "Short maturity 45-50 D.A.T",
      "Semi dome shape",
      "White colour 400-500gm curd weight"
    ]
  },
  { 
    name: "TAS - WHITE RANI", 
    img: "images/cauliflower-whiterani.jpg", 
    characteristics: [
      "Medium Maturity 60-65 D.A.T",
      "Dome shape curd",
      "White colour 1-1.2kg curd weight"
    ]
  }
],

"cucumber": [
  { 
    name: "TAS - ANJEL", 
    img: "images/cucumber-anjel.jpg", 
    characteristics: [
      "Strong vigor with more side branches",
      "15-18cm length",
      "Harvest 40-42 D.A.S",
      "Tolerant to disease - YVM, DM",
      "Suitable for winter cultivation",
      "Approx 150-200gm fruit weight",
      "High yield, bitter free test"
    ]
  },
  { 
    name: "TAS - JOLLY", 
    img: "images/cucumber-jolly.jpg", 
    characteristics: [
      "Strong vigor with more side branches",
      "16-18cm length",
      "Harvest 30-35 D.A.S",
      "Tolerant to disease - YVM, DM",
      "Suitable for summer cultivation",
      "Approx 150-200gm fruit weight",
      "High yield, bitter free test"
    ]
  }
],

  "chilli": [
  { 
    name: "TAS - TEJOSHI", 
    img: "images/chilli-tejoshi.jpg", 
    characteristics: [
      "Excellent fruit with downward bearing habit",
      "Length: 7-8cm, high pungency & keeping quality",
      "Tolerant to LCV, CMV",
      "Harvest 60-65 D.A.T",
      "Heat for summer cultivation"
    ]
  },
  { 
    name: "TAS - FIRE", 
    img: "images/chilli-fire.jpg", 
    characteristics: [
      "Excellent fruit with attractive dark green colour",
      "Length: 7-8cm, high pungency & keeping quality",
      "Tolerant to LCV, CMV",
      "Harvest 60-65 D.A.T",
      "Heat for summer cultivation"
    ]
  },
  { 
    name: "TAS - TEJA", 
    img: "images/chilli-teja.jpg", 
    characteristics: [
      "Excellent fruit with upright bearing habit",
      "Length: 6-7cm, high pungency & keeping quality",
      "Tolerant to LCV, CMV",
      "Suitable for summer cultivation"
    ]
  },
  { 
    name: "TAS - SURYA", 
    img: "images/chilli-surya.jpg", 
    characteristics: [
      "Excellent fruit with upright & bunch bearing habit",
      "Length: 7-8cm, high pungency & keeping quality",
      "Suitable for long distance transport",
      "Harvest 70-75 D.A.T"
    ]
  }
],

"tomato": [
  { 
    name: "TAS - LOUS", 
    img: "images/tomato-lous.jpg", 
    characteristics: [
      "Determinate and vigorous growth",
      "Fruit: square round, glossy shine, firm & good keeping quality",
      "Average fruit weight: 80-100gm",
      "Harvesting: 55-60 D.A.T",
      "Tolerance to diseases: TLCV & BWL"
    ]
  },
  { 
    name: "TAS - ABHIMAN", 
    img: "images/tomato-abhiman.jpg", 
    characteristics: [
      "Semi-determinate and vigorous growth",
      "Firm and shiny red colour fruits",
      "Average fruit weight: 90-100gm",
      "Harvest: 60-65 D.A.T",
      "Tolerance to diseases: Anthracnose, TLCV, BWL"
    ]
  },
  { 
    name: "TAS - ISHA", 
    img: "images/tomato-isha.jpg", 
    characteristics: [
      "Determinate and good keeping quality",
      "Firm red fruits",
      "Average fruit weight: 90-100gm",
      "Good for rainy and post rainy season"
    ]
  }
],

"long-bean": [
  { 
    name: "TAS - RAYA RED", 
    img: "images/longbean-rayared.jpg", 
    characteristics: [
      "Dark red pod, about 45-50cm length",
      "Good keeping quality",
      "High yielding",
      "Harvest 50-55 D.A.S",
      "Tolerance to major diseases"
    ]
  },
  { 
    name: "TAS - FLORA GREEN", 
    img: "images/longbean-floragreen.jpg", 
    characteristics: [
      "Dark green pod, about 55-60cm length",
      "Good keeping quality",
      "High yielding",
      "Tolerance for long distance transportation"
    ]
  },
  { 
    name: "TAS - SHWETA-7", 
    img: "images/longbean-shweta7.jpg", 
    characteristics: [
      "Vigorous plant and early maturity",
      "White colour pod, good keeping quality",
      "Harvest 45-50 D.A.S",
      "Tolerance to major diseases"
    ]
  }
],

"watermelon": [
  { 
    name: "TAS - MARGOT", 
    img: "images/watermelon-margot.jpg", 
    characteristics: [
      "Hybrid watermelon high yield, high TSS",
      "Attractive red flesh",
      "Fruit weight: 8-10kg",
      "Harvesting: 70-75 D.A.T",
      "Tolerance to Fusarium Wilt & Anthracnose"
    ]
  }
],

"ash-gourd": [
  { 
    name: "TAS - NANCY", 
    img: "images/ashgourd-nancy.jpg", 
    characteristics: [
      "Fruit cylindrical with shiny dark green colour",
      "High yield, long keeping quality",
      "Average weight: 5-6kg"
    ]
  }
],

  "bitter-gourd": [
  { 
    name: "TAS - GATU", 
    img: "images/bittergourd-gatu.jpg",
    characteristics: [
      "Fruit 6-8 cm long",
      "Dark green colour, 60-70 gm weight",
      "Harvest 45-50 D.A.S",
      "Non-continuous pointed spine",
      "Tolerance to diseases – DM & PM"
    ]
  },
  { 
    name: "TAS - DWIYA", 
    img: "images/bittergourd-dwiya.jpg",
    characteristics: [
      "Dark green shiny attractive fruit",
      "Fruit 13-15 cm long, 80-90 gm weight",
      "Harvest 55-60 D.A.S",
      "Cylindrical rid fruit with prickles",
      "Tolerance to diseases – DM & PM"
    ]
  },
  { 
    name: "TAS - ROSHNI", 
    img: "images/bittergourd-roshni.jpg",
    characteristics: [
      "Unique size dark green shiny fruit",
      "Fruit 9-10 cm long, 70-80 gm weight",
      "Harvest 52-55 D.A.S",
      "High fruit setting, Very high yielder",
      "Disease tolerance – LCV, DM & PM",
      "High keeping quality"
    ]
  }
],

"bottle-gourd": [
  { 
    name: "TAS - BOJRO", 
    img: "images/bottlegourd-bojro.jpg",
    characteristics: [
      "Cylindrical, 40-45 cm long, dark green with blotched fruit surface",
      "Harvest 55-60 D.A.S",
      "Fruit weight 1 kg to 1.5 kg",
      "Good fruit setting, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  },
  { 
    name: "TAS - MONIMALA", 
    img: "images/bottlegourd-monimala.jpg",
    characteristics: [
      "Fruit semi cylindrical, 30-35 cm long, dark green with no striping on surface",
      "Harvest 55-60 D.A.S",
      "Fruit weight 1 kg to 1.2 kg",
      "Good fruit setting, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  },
  { 
    name: "TAS - BIKASH", 
    img: "images/bottlegourd-bikash.jpg",
    characteristics: [
      "Cylindrical, 30-35 cm long",
      "Harvest 55-60 D.A.S",
      "Fruit weight 1 kg to 1.2 kg",
      "Good fruit setting, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  },
  { 
    name: "TAS - GOLU", 
    img: "images/bottlegourd-golu.jpg",
    characteristics: [
      "Oval round shape, attractive green colour with shining surface",
      "Harvest 55-60 D.A.S",
      "Fruit weight up to 2 kg",
      "Highly uniform fruit, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  },
  { 
    name: "TAS - MOYNA MOTI", 
    img: "images/bottlegourd-moynamoti.jpg",
    characteristics: [
      "Little spindle shape, green colour fruit with attractive shining surface",
      "Harvest 55-60 D.A.S",
      "Fruit weight 1 kg to 1.5 kg",
      "Good fruit setting, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  },
  { 
    name: "TAS - MANIKANCHAN", 
    img: "images/bottlegourd-manikanchan.jpg",
    characteristics: [
      "Fruit semi cylindrical, 30-35 cm long, green with shining surface",
      "Harvest 55-60 D.A.S",
      "Fruit weight 1 kg to 1.2 kg",
      "Good fruit setting, very high yielder",
      "Highly tolerance to disease – CCSD"
    ]
  }
],
  "brinjal": [
  { 
    name: "TAS - JOHN", 
    img: "images/brinjal-john.jpg",
    characteristics: [
      "Long in shape and blackish colour",
      "22-25cm fruit length",
      "Harvest 60-65 D.A.T",
      "Average fruit weight 150-200g",
      "Good shining fruit, very high yielder",
      "Highly uniform shape of fruit",
      "Tolerance to disease and insect"
    ]
  },
  { 
    name: "TAS - CHHIAYA", 
    img: "images/brinjal-chhiaya.jpg",
    characteristics: [
      "Mid long in shape and purple colour",
      "Harvest 60-65 D.A.T",
      "Average fruit weight 120-125g",
      "Good shining fruit, very high yielder",
      "Highly uniform shape of fruit",
      "Tolerance to disease and insect"
    ]
  },
  { 
    name: "TAS - LEON", 
    img: "images/brinjal-leon.jpg",
    characteristics: [
      "Round to oval in shape and purple colour",
      "Harvest 60-65 D.A.T",
      "Average fruit weight 350-400g",
      "Good shining fruit, very high yielder",
      "Highly uniform shape of fruit",
      "Tolerance to disease and insect"
    ]
  },
  { 
    name: "TAS - LALI", 
    img: "images/brinjal-lali.jpg",
    characteristics: [
      "Mid long in shape and pink colour fruit",
      "Harvest 55-60 D.A.T",
      "Average fruit weight 120-125g",
      "Good shining fruit, very high yielder",
      "Highly uniform shape of fruit",
      "Tolerance to disease and insect"
    ]
  },
  { 
    name: "TAS - GARIMA", 
    img: "images/brinjal-garima.jpg",
    characteristics: [
      "Mid long in shape and green colour fruit",
      "Harvest 55-60 D.A.T",
      "Average fruit weight 120-125g",
      "Good shining fruit, very high yielder",
      "Highly uniform shape of fruit",
      "Tolerance to disease and insect"
    ]
  }
],

"bhendi": [
  { 
    name: "TAS - RIDIMA", 
    img: "images/bhendi-rhodima.jpg",
    characteristics: [
      "Erect height moderate plant, short internode with 2-4 branching",
      "Light green smooth fruits with 5 ridges",
      "Harvest length 12-14cm",
      "Suitable for all seasons",
      "High tolerance to YVMV & ELCV"
    ]
  },
  { 
    name: "TAS - JULIKA", 
    img: "images/bhendi-julika.jpg",
    characteristics: [
      "Erect height moderate plant, short internode with 2-4 branching",
      "Light green smooth fruits with 5 ridges",
      "Harvest length 12-14cm",
      "Suitable for all seasons",
      "High tolerance to YVMV & ELCV"
    ]
  },
  { 
    name: "TAS - 7119", 
    img: "images/bhendi-7119.jpg",
    characteristics: [
      "Erect height moderate plant, short internode with 2-4 branching",
      "Dark green smooth fruits with 5 ridges",
      "Harvest length 12-14cm",
      "Tolerance to YVMV"
    ]
  }
],

"snake-gourd": [
  { 
    name: "TAS - NAGINI", 
    img: "images/snakegourd-nagini.jpg",
    characteristics: [
      "Slender with tapering end, 45-50cm long",
      "Dark green with white stripes",
      "Average fruit weight 300-350g",
      "Ideal for long-distance transportation"
    ]
  }
]
,
  "radish": [
  { 
    name: "TAS - Sofia-32", 
    img: "images/radish-sofia32.jpg",
    characteristics: [
      "Strong tolerance to disease, heat & humidity",
      "Milky white straight roots, 22-25cm long",
      "Fruit weight 300-400g",
      "Harvesting 30-32 D.A.S",
      "Smooth skin and good eating quality"
    ]
  },
  { 
    name: "TAS - Dhakai Red", 
    img: "images/radish-dhakaired.jpg",
    characteristics: [
      "Attractive dark pink & white colour",
      "Semi cylindrical shape",
      "Fruit weight 300-400g",
      "Harvesting 30-40 D.A.S",
      "Crispy with mild pungency"
    ]
  },
  { 
    name: "TAS - Sarah White", 
    img: "images/radish-sarahwhite.jpg",
    characteristics: [
      "Tolerance to disease, heat & humidity",
      "25-30cm long milky white roots",
      "Fruit weight 400-600g",
      "Harvesting 45-50 D.A.S",
      "Smooth skin, good eating quality, very high yielder"
    ]
  }
],

"pumpkin": [
  { 
    name: "TAS - Sila", 
    img: "images/pumpkin-sila.jpg",
    characteristics: [
      "Flat round fruits with attractive grey green colour",
      "Fruit weight 0.75–1.5kg",
      "Harvesting 65-70 D.A.S",
      "Sweet taste and fine texture",
      "Sowing time round the year"
    ]
  },
  { 
    name: "TAS - Pratiksa", 
    img: "images/pumpkin-pratiksa.jpg",
    characteristics: [
      "Unique bulb shape fruits with attractive green stripes",
      "Fruit weight 1.5–1.6kg",
      "Harvesting 80-85 D.A.S",
      "Less shell end, fine texture",
      "Sowing time round the year"
    ]
  },
  { 
    name: "TAS - Grace", 
    img: "images/pumpkin-grace.jpg",
    characteristics: [
      "Excellent fruit setting ability",
      "Flat round brown colour fruits",
      "Fruit weight 1.5–2.5kg",
      "Harvesting 70-75 D.A.S",
      "Yellow orange colour & fine texture",
      "Sowing time round the year"
    ]
  },
  { 
    name: "TAS - Diana", 
    img: "images/pumpkin-diana.jpg",
    characteristics: [
      "Flat round fruits with attractive light yellow skin",
      "Fruit weight 2.5–4.5kg",
      "Harvesting 80-90 D.A.S",
      "Orange colour & fine texture",
      "Sowing time round the year"
    ]
  },
  { 
    name: "TAS - Kokila", 
    img: "images/pumpkin-kokila.jpg",
    characteristics: [
      "Flat round fruits with attractive black skin",
      "Fruit weight 2.5–4.5kg",
      "Harvesting 70-80 D.A.S",
      "Storage ability 5-6 months",
      "Orange colour & fine texture",
      "Sowing time round the year"
    ]
  },
  { 
    name: "TAS - Gagan", 
    img: "images/pumpkin-gagan.jpg",
    characteristics: [
      "Flat round fruits with attractive light green colour",
      "Fruit weight 2.5–4.5kg",
      "Harvesting 80-90 D.A.S",
      "Orange colour & fine texture",
      "Sowing time round the year"
    ]
  }
]
,
"ridge-gourd": [
  {
    "name": "TAS - SAMBA",
    "img": "images/ridgegourd-samba.jpg",
    "characteristics": [
      "Highly uniform and vigorous variety.",
      "Fruit 40-45cm length with green colour.",
      "Harvesting 35-40 D.A.S. - High yielder.",
      "Average fruit weight 250-300gm.",
      "Tolerance to diseases.",
      "For winter & summer season."
    ]
  },
  {
    "name": "TAS - MARY",
    "img": "images/ridgegourd-mary.jpg",
    "characteristics": [
      "Highly uniform and vigorous variety.",
      "Fruit 30-40cm length with green colour.",
      "Harvesting 50-55 D.A.S. - High yielder.",
      "Average fruit weight 200-250gm.",
      "Tolerance to diseases.",
      "For winter season."
    ]
  },
  {
    "name": "TAS - ROMI",
    "img": "images/ridgegourd-romi.jpg",
    "characteristics": [
      "Highly uniform and vigorous variety.",
      "Fruit 25-30cm length with green colour.",
      "Harvesting 30-40 D.A.S. - High yielder.",
      "Average fruit weight 150-200gm.",
      "Tolerance to diseases.",
      "For summer season."
    ]
  }
],
"beans": [
  {
    "name": "TAS - JULIE",
    "img": "images/beans-julie.jpg",
    "characteristics": [
      "Bushy and mainly branched.",
      "Round shaped, shiny green colour pod.",
      "First harvest fruit - Average length 19-20cm.",
      "Good fruit setting.",
      "Highly uniform shape of pods.",
      "Harvest 40-45 days."
    ]
  },
  {
    "name": "TAS - BABLU",
    "img": "images/beans-bablu.jpg",
    "characteristics": [
      "Round shaped, shiny green colour pod.",
      "Soft, fiberless fruit with dimpling habit.",
      "Average fruit length 19-20cm.",
      "White colour seed.",
      "Harvest 40-45 days.",
      "Highly uniform shape of pods."
    ]
  }
],
"knol-khol": [
  {
    "name": "TAS - MARIA",
    "img": "images/knolkhol-maria.jpg",
    "characteristics": [
      "Medium maturity 50-55 D.A.T.",
      "Slightly light green colour, uniform head.",
      "Globe shaped, white flesh and compact.",
      "Average size weight 120-220gm.",
      "Very good keeping quality."
    ]
  }
],
"coriander": [
  {
    "name": "TAS - SUNANDA",
    "img": "images/coriander-sunanda.jpg",
    "characteristics": [
      "Suitable for round the year planting.",
      "Average green, very good aroma.",
      "Late bolting habit, tolerance to water.",
      "Harvesting 24-25 days.",
      "Sowing 30-35 D.A.S."
    ]
  }
],
"saag": [
  {
    "name": "TAS - KONKA",
    "img": "images/saag-konka.jpg",
    "characteristics": [
      "Glossy deep red leaves.",
      "Broad leaves and good stem.",
      "Harvesting time September to January.",
      "Harvesting 25-30 D.A.S.",
      "Fresh looking and good taste."
    ]
  },
  {
    "name": "TAS - JOBA KUSUM",
    "img": "images/saag-jobakusum.jpg",
    "characteristics": [
      "Glossy deep red leaves.",
      "Broad leaves and good stem.",
      "Harvesting time September to January.",
      "Harvesting 25-30 D.A.S.",
      "Fresh looking and good taste."
    ]
  }
]
,
  "data": [
  {
    "name": "TAS - DURGABHOG",
    "img": "images/data-durgabhog.jpg",
    "characteristics": [
      "Leaves light green & red, ovate shape.",
      "Dark Red/White bi-colour stem.",
      "Good field holding ability.",
      "Sowing time February to August.",
      "Harvesting can start from 40-50 D.A.S.",
      "Fresh looking and very sweet & testy."
    ]
  },
  {
    "name": "TAS - LAL EKDALA",
    "img": "images/data-lalekdala.jpg",
    "characteristics": [
      "Leaves light green & red, ovate shape.",
      "Dark Red stem.",
      "Good field holding ability.",
      "Sowing time February to August.",
      "Harvesting can start from 40-50 D.A.S.",
      "Fresh looking and very sweet & testy."
    ]
  },
  {
    "name": "TAS - SADA EKDALA",
    "img": "images/data-sadaekdala.jpg",
    "characteristics": [
      "Leaves glossy green, ovate shape.",
      "Dark green stem.",
      "Good field holding ability.",
      "Sowing time February to August.",
      "Harvesting can start from 40-50 D.A.S.",
      "Fresh looking and very sweet & testy."
    ]
  },
  {
    "name": "TAS - MOYNA DATA",
    "img": "images/data-moynadata.jpg",
    "characteristics": [
      "Leaves light green & red, ovate shape.",
      "Dark Red/White bi-colour stem.",
      "Good field holding ability.",
      "Sowing time February to August.",
      "Harvesting can start from 40-50 D.A.S.",
      "Fresh looking and very sweet & testy."
    ]
  }
],
"sponge-gourd": [
  {
    "name": "TAS - NABITA",
    "img": "images/spongegourd-nabita.jpg",
    "characteristics": [
      "Fruit 24-28cm length with attractive dark green colour.",
      "High yielder.",
      "Harvesting 50-52 D.A.S.",
      "Average fruit weight 200-250gm.",
      "Good for long distance transportation.",
      "Tolerance to diseases."
    ]
  },
  {
    "name": "TAS - NAYNA",
    "img": "images/spongegourd-nayna.jpg",
    "characteristics": [
      "Fruit 24-28cm length with attractive dark green colour.",
      "High yielder.",
      "Harvesting 50-52 D.A.S.",
      "Average fruit weight 200-250gm.",
      "Good for long distance transportation.",
      "Tolerance to diseases."
    ]
  }
]

};

const vegModal = $("#vegModal");
if (vegModal) {
  const vegNameEl = $("#vegName");
  const vegContentEl = $("#vegTypes");
  const closeBtn = vegModal.querySelector(".close-btn");

  $$(".product-card .learn-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      if (!card) return;

      const vegKey = card.dataset.veg;
      vegNameEl.textContent =
        card.querySelector("h3")?.textContent || "Vegetable";
      vegContentEl.innerHTML = "";

      const varieties = vegData[vegKey];
      if (!varieties) {
        vegContentEl.innerHTML = "<p>No varieties found.</p>";
      } else {
        const container = document.createElement("div");
        container.className = "variety-container";

        varieties.forEach(v => {
          const vc = document.createElement("div");
          vc.className = "variety-card";
          vc.innerHTML = `
             <img src="${v.img}" alt="${v.name}">
  <h4>${v.name}</h4>

  <ul>
    ${v.characteristics.map(c => `<li>${c}</li>`).join("")}
  </ul>

  <div class="cart-controls">
    <input 
      type="number" 
      class="kg-input" 
      placeholder="KG" 
      min="0.1" 
      step="0.1"
    />
    <button class="add-to-cart-btn">Add to Cart</button>
  </div>
          `;
          container.appendChild(vc);
        });

        vegContentEl.appendChild(container);
      }

      vegModal.style.display = "block";
      closeBtn?.focus();
    });
  });

  const close = () => (vegModal.style.display = "none");
  closeBtn?.addEventListener("click", close);
  window.addEventListener("click", e => e.target === vegModal && close());
  window.addEventListener("keydown", e => e.key === "Escape" && close());
}

// ================== SEARCH ==================
const searchInput = $("#searchInput");
const searchBtn = document.querySelector("#searchModal .learn-more-btn");


if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    if (!query) {
      alert("Type a vegetable name");
      return;
    }

    const card = document.querySelector(`.product-card[data-veg="${query}"]`);

    if (!card) {
      alert("No vegetable found");
      return;
    }

    // Close search modal
    document.getElementById("searchModal").style.display = "none";

    // Open vegetable modal
    card.querySelector(".learn-more-btn").click();
  });
}

searchInput?.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    e.preventDefault();
    searchBtn.click();
  }
});



// ================== MOBILE NAV ==================
const hamburger = $(".hamburger");
const navLinks = $(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
}

// ================== ACTIVE NAV LINK ==================
const currentPage = location.pathname.split("/").pop() || "index.html";
$$(".nav-links a").forEach(link => {
  link.classList.toggle("active", link.getAttribute("href") === currentPage);
});

// ================== CLERK AUTH + HARD SCROLL FIX ==================
window.addEventListener("load", async () => {
  if (!window.Clerk) return;

  await Clerk.load();

  const userIcon = document.querySelector(".fa-user");
  const logoutBtn = document.getElementById("logoutBtn");

  if (userIcon) {
    userIcon.addEventListener("click", () => {
      if (Clerk.user) {
        Clerk.openUserProfile();
      } else {
        Clerk.openSignIn({
          redirectUrl: window.location.href
        });
      }
    });
  }

  if (logoutBtn && Clerk.user) {
    logoutBtn.style.display = "inline-block";

    logoutBtn.addEventListener("click", async () => {
      await Clerk.signOut();
      window.location.reload();
    });
  }

  // ---------------- FORCE SCROLL OBSERVER ----------------
  const observer = new MutationObserver(() => {
    const clerkPortal = document.querySelector('[data-clerk-portal]');
    if (clerkPortal) {
      enableScroll();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // ---------------- SAFETY UNLOCKS ----------------
  window.addEventListener("keydown", e => {
    if (e.key === "Escape") enableScroll();
  });

  window.addEventListener("click", enableScroll);
});

// ================== SCROLL UNLOCK FUNCTION ==================
function enableScroll() {
  document.body.classList.add("force-scroll");
  document.body.style.overflow = "auto";
  document.documentElement.style.overflow = "auto";
}
// ================= CART PAGE (LOCAL STORAGE) =================
const CART_KEY = "tejas_cart";

function getCart() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

// ADD TO CART (FROM VARIETY MODAL)
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("add-to-cart-btn")) return;

  const card = e.target.closest(".variety-card");
  const product = card.querySelector("h4").textContent;
  const kg = parseFloat(card.querySelector(".kg-input").value);

  if (!kg || kg <= 0) {
    alert("Please enter quantity in KG");
    return;
  }

  const cart = getCart();
  cart.push({ product, quantityKg: kg });
  saveCart(cart);

  alert(`${kg} KG of ${product} added to cart`);
  card.querySelector(".kg-input").value = "";
});

// RENDER CART PAGE
function renderCartPage() {
  const container = document.getElementById("cartItems");
  const itemCountEl = document.getElementById("itemCount");
  if (!container) return;

  const cart = getCart();
  container.innerHTML = "";

  // UPDATE TOTAL ITEMS
  if (itemCountEl) {
    itemCountEl.textContent = cart.length;
  }

  if (cart.length === 0) {
    container.innerHTML = `
      <p style="padding:1.5rem; color:#777;">
        Your cart is empty. Please add some products.
      </p>
    `;
    if (itemCountEl) itemCountEl.textContent = "0";
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <span>${item.product} — ${item.quantityKg} KG</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    container.appendChild(div);
  });
}


window.removeFromCart = function(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  renderCartPage();
};

// CHECKOUT
const checkoutBtn = document.getElementById("checkoutBtn");
checkoutBtn?.addEventListener("click", () => {
  const cart = getCart();
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  let message = "Order Request:%0A";
  cart.forEach(i => {
    message += `${i.product} - ${i.quantityKg} KG%0A`;
  });

  window.open(
    `https://wa.me/919091168711?text=${message}`,
    "_blank"
  );
});

// AUTO LOAD CART PAGE
document.addEventListener("DOMContentLoaded", renderCartPage);
// ================== SEARCH (FINAL FIX) ==================
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".fa-search");
  const searchModal = document.getElementById("searchModal");
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.querySelector("#searchModal .learn-more-btn");
  const closeBtn = searchModal?.querySelector(".close-btn");

  // Open search modal
  searchIcon?.addEventListener("click", () => {
    searchModal.style.display = "block";
    setTimeout(() => searchInput?.focus(), 100);
  });

  // Close modal
  closeBtn?.addEventListener("click", () => {
    searchModal.style.display = "none";
  });

  // SEARCH ACTION
  const performSearch = () => {
    const query = searchInput.value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

    if (!query) {
      alert("Enter a vegetable name");
      return;
    }

    const card = document.querySelector(
      `.product-card[data-veg="${query}"]`
    );

    if (!card) {
      alert("Vegetable not found");
      return;
    }

    searchModal.style.display = "none";
    card.querySelector(".learn-more-btn")?.click();
  };

  searchBtn?.addEventListener("click", performSearch);

  searchInput?.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      performSearch();
    }
  });
});
// ================= CONTACT FORM MAILTO (BULLETPROOF) =================
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Contact form not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput =
      form.querySelector('input[type="text"]') ||
      form.querySelector('input[name="name"]');

    const emailInput =
      form.querySelector('input[type="email"]') ||
      form.querySelector('input[name="email"]');

    const messageInput =
      form.querySelector("textarea");

    if (!nameInput || !emailInput || !messageInput) {
      alert("Form fields are missing. Please reload the page.");
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const subject = `New Contact Message — Tejas Agri Seeds`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`;

    const mailto = `mailto:tejas.agriseeds@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
// Auto-close mobile nav on page change
window.addEventListener("pageshow", () => {
  document.querySelector(".nav-links")?.classList.remove("active");
});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("nav-open");
  });

  // Close menu when link clicked
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.classList.remove("nav-open");
    });
  });
});

