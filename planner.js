const INVENTORY_CATALOG = [
  {
    id: "jewelry",
    label: "Jewelry and granny-made intricate pieces",
    category: "valuables",
    urgency: "high",
    lane: "carry-on",
    container: "Hard pouch inside backpack or cabin tote",
    uspsAllowed: false,
    luglessAllowed: false,
    checkedAllowed: false,
    priority: 10,
    notes: "Highest theft and breakage risk. Keep this under your personal control at all times."
  },
  {
    id: "documents",
    label: "Passport, visa papers, work docs, lease and IDs",
    category: "documents",
    urgency: "high",
    lane: "carry-on",
    container: "Document sleeve inside backpack",
    uspsAllowed: false,
    luglessAllowed: false,
    checkedAllowed: false,
    priority: 10,
    notes: "Never check or ship irreplaceable documents."
  },
  {
    id: "medicines",
    label: "Medicines, prescriptions, vitamins, first-week health kit",
    category: "health",
    urgency: "high",
    lane: "carry-on",
    container: "Transparent medicine pouch in backpack",
    uspsAllowed: false,
    luglessAllowed: false,
    checkedAllowed: true,
    priority: 9,
    notes: "Carry what you may need quickly. Shipping prescriptions adds risk and delay."
  },
  {
    id: "electronics",
    label: "Laptop, chargers, drives and work electronics",
    category: "electronics",
    urgency: "high",
    lane: "carry-on",
    container: "Padded laptop sleeve in backpack",
    uspsAllowed: "conditional",
    luglessAllowed: false,
    checkedAllowed: false,
    priority: 9,
    notes: "Carry with you. Battery rules and value-loss risk make shipping a bad default."
  },
  {
    id: "clothes",
    label: "Daily clothes, formal wear and innerwear",
    category: "soft-goods",
    urgency: "medium",
    lane: "checked-or-lugless",
    container: "23 kg checked suitcase or sturdy duffel with packing cubes",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 8,
    notes: "Use airline bags for your first two weeks and LugLess for the bulk remainder."
  },
  {
    id: "sweaters",
    label: "Sweaters, winter wear and jackets",
    category: "soft-goods",
    urgency: "low",
    lane: "lugless",
    container: "Duffel bag with compression bags",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 5,
    notes: "Bulky but safe to ship. LugLess is the cheaper bulk lane for these."
  },
  {
    id: "shoes",
    label: "Shoes and spare sandals",
    category: "soft-goods",
    urgency: "medium",
    lane: "checked-or-lugless",
    container: "Checked suitcase or LugLess duffel with shoe bags",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 6,
    notes: "Carry one essential pair and send the rest."
  },
  {
    id: "books",
    label: "Books, notebooks and printed study material",
    category: "dense",
    urgency: "low",
    lane: "usps",
    container: "Small heavy-duty cardboard box",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 4,
    notes: "Use several small boxes so you do not create one impossible heavy box."
  },
  {
    id: "vacuum",
    label: "Small vacuum cleaner",
    category: "appliance",
    urgency: "low",
    lane: "conditional-vacuum",
    container: "Original carton or snug padded box",
    uspsAllowed: "conditional",
    luglessAllowed: "conditional",
    checkedAllowed: true,
    priority: 4,
    notes: "Corded vacuum is simple to ship. Battery-powered vacuum needs battery-rule checking."
  },
  {
    id: "instant-pot",
    label: "Instant Pot",
    category: "appliance",
    urgency: "medium",
    lane: "usps",
    container: "Original box or double-wall box with 2 in padding",
    uspsAllowed: true,
    luglessAllowed: false,
    checkedAllowed: false,
    priority: 7,
    notes: "Dense and awkward in luggage. A snug USPS or ground carrier box is cleaner."
  },
  {
    id: "iron",
    label: "Iron box",
    category: "appliance",
    urgency: "medium",
    lane: "checked-or-usps",
    container: "Padded checked bag slot or small shipping box",
    uspsAllowed: true,
    luglessAllowed: false,
    checkedAllowed: true,
    priority: 6,
    notes: "If you need crisp clothes in week one, keep it in a checked bag."
  },
  {
    id: "masala",
    label: "Masala boxes and dry spices",
    category: "kitchen",
    urgency: "medium",
    lane: "checked-or-usps",
    container: "Small USPS box with each spice sealed in zip bags",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 6,
    notes: "Carry a small live set in checked baggage and ship the rest in sealed boxes."
  },
  {
    id: "utensils",
    label: "Metal utensils, ladles and non-glass cookware",
    category: "kitchen",
    urgency: "low",
    lane: "usps",
    container: "Small cardboard box with paper wrap",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 5,
    notes: "Dense but sturdy. USPS small boxes work well here."
  },
  {
    id: "breakables",
    label: "Glass jars, mugs, bowls and fragile decor",
    category: "fragile",
    urgency: "low",
    lane: "ship-if-worth-it",
    container: "Small double-wall box with lots of bubble wrap",
    uspsAllowed: true,
    luglessAllowed: false,
    checkedAllowed: false,
    priority: 3,
    notes: "Ship only if premium or sentimental. Cheap breakables are better donated."
  },
  {
    id: "toiletries",
    label: "Toiletries, non-liquid grooming, extra supplies",
    category: "personal",
    urgency: "medium",
    lane: "checked-or-usps",
    container: "Checked bag pouch or small USPS box",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 5,
    notes: "Carry near-term essentials and ship low-value extras only."
  },
  {
    id: "perfume",
    label: "Costly scents, perfume and high-value liquids",
    category: "restricted-liquids",
    urgency: "medium",
    lane: "checked",
    container: "Checked suitcase, bottle in zip bag and wrapped in clothes",
    uspsAllowed: "restricted",
    luglessAllowed: false,
    checkedAllowed: true,
    priority: 7,
    notes: "Best kept in checked baggage. Mailing perfume is more regulated and annoying."
  },
  {
    id: "open-liquids",
    label: "Open food liquids, juice, sauces, oils and cleaning chemicals",
    category: "consumables",
    urgency: "low",
    lane: "use-up",
    container: "No shipping container",
    uspsAllowed: false,
    luglessAllowed: false,
    checkedAllowed: "conditional",
    priority: 2,
    notes: "Use up, gift away or discard. These are not worth cross-country move stress."
  },
  {
    id: "bedding",
    label: "Bedsheets, towels, blankets and soft home textiles",
    category: "soft-goods",
    urgency: "medium",
    lane: "lugless",
    container: "Duffel bag with compression bags",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 5,
    notes: "Ideal LugLess material because it is bulky but low-risk."
  },
  {
    id: "spare-bags",
    label: "Extra duffels, sack bags and organizer totes",
    category: "containers",
    urgency: "low",
    lane: "nested",
    container: "Place inside checked bag or larger LugLess duffel",
    uspsAllowed: true,
    luglessAllowed: true,
    checkedAllowed: true,
    priority: 1,
    notes: "Use these as internal organizers, not as the primary USPS shipping shell."
  }
];

const RESTRICTION_MATRIX = [
  {
    item: "Jewelry, heirlooms, cash and irreplaceable valuables",
    usps: "Avoid",
    flight: "Carry-on only",
    lugless: "Avoid",
    bestMove: "Keep with you"
  },
  {
    item: "Prescription medicines and urgent health items",
    usps: "Avoid unless rules verified",
    flight: "Carry-on preferred",
    lugless: "Not recommended",
    bestMove: "Keep with you"
  },
  {
    item: "Perfume, scents and alcohol-based liquids",
    usps: "Restricted, ground rules apply",
    flight: "Checked bag is best",
    lugless: "Avoid",
    bestMove: "Checked airline bag"
  },
  {
    item: "Lithium batteries, power banks and battery devices",
    usps: "Conditional or ground-only",
    flight: "Carry-on only for spare batteries",
    lugless: "Avoid",
    bestMove: "Carry yourself"
  },
  {
    item: "Electronics without battery issues",
    usps: "Possible but risky",
    flight: "Carry-on preferred",
    lugless: "Avoid",
    bestMove: "Carry yourself"
  },
  {
    item: "Books and printed material",
    usps: "Good",
    flight: "Allowed but heavy",
    lugless: "Possible",
    bestMove: "USPS small boxes"
  },
  {
    item: "Fragile glass, ceramics and delicate decor",
    usps: "Possible with serious padding",
    flight: "Risky in checked bag",
    lugless: "Poor fit",
    bestMove: "USPS only if worth it"
  },
  {
    item: "Open liquids, sauces, juices and cleaning chemicals",
    usps: "Avoid",
    flight: "Leak-risk and often restricted",
    lugless: "Avoid",
    bestMove: "Use up or discard"
  },
  {
    item: "Sharp knives and blades",
    usps: "Allowed if securely packed",
    flight: "Checked bag only",
    lugless: "Avoid",
    bestMove: "USPS box or checked bag"
  }
];

const STORAGE_OPTIONS = [
  {
    id: "friend",
    label: "Friend receiving in San Francisco",
    fit: "best",
    summary: "Best cheapest option if your friend can accept and hold boxes safely."
  },
  {
    id: "ups-store",
    label: "Mailbox or package receiving service",
    fit: "good",
    summary: "Useful for packages if you do not want to use a home address, but fees add up."
  },
  {
    id: "self-storage",
    label: "Month-to-month self storage",
    fit: "best",
    summary: "Best option if you need one-month storage for multiple boxes and bags."
  },
  {
    id: "usps-hold",
    label: "USPS hold or pickup",
    fit: "poor",
    summary: "Too short-term for a one-month move buffer. Do not use as storage."
  }
];

function sortByPriority(items) {
  return [...items].sort((a, b) => b.priority - a.priority);
}

function getInventoryCatalog() {
  return sortByPriority(INVENTORY_CATALOG);
}

function getRestrictionMatrix() {
  return RESTRICTION_MATRIX;
}

function getStorageOptions() {
  return STORAGE_OPTIONS;
}

function getOptionNumber(value, fallback) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function getOptionBoolean(value, fallback) {
  if (typeof value === "boolean") {
    return value;
  }
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
  return fallback;
}

function normalizeOptions(raw = {}) {
  return {
    tripsToSf: Math.max(1, getOptionNumber(raw.tripsToSf, 2)),
    checkedBags: Math.max(1, getOptionNumber(raw.checkedBags, 2)),
    storageDays: Math.max(0, getOptionNumber(raw.storageDays, 30)),
    budgetMode: raw.budgetMode || "cheapest",
    needIronImmediately: getOptionBoolean(raw.needIronImmediately, true),
    friendCanReceive: getOptionBoolean(raw.friendCanReceive, true),
    vacuumType: raw.vacuumType || "corded"
  };
}

function chooseLane(item, options) {
  switch (item.lane) {
    case "carry-on":
      return {
        lane: "Carry with you",
        container: item.container,
        service: "Personal item or cabin bag",
        action: "Pack this first and never let it leave your sight."
      };
    case "checked":
      return {
        lane: "23 kg checked bag",
        container: item.container,
        service: "Flight checked baggage",
        action: "Wrap and place inside your airline suitcase."
      };
    case "checked-or-lugless":
      if (options.checkedBags >= 2) {
        return {
          lane: "Split between checked bag and LugLess",
          container: item.container,
          service: "Flight checked baggage + LugLess",
          action: "Carry two weeks worth with you; send the rest in duffels."
        };
      }
      return {
        lane: "LugLess",
        container: "Duffel bag or hard suitcase",
        service: "LugLess",
        action: "Use a duffel or suitcase and keep your daily essentials in your flight bag."
      };
    case "lugless":
      return {
        lane: "LugLess",
        container: item.container,
        service: "LugLess",
        action: "Ship these as soft-goods bulk after you reserve one duffel for the current trip."
      };
    case "usps":
      return {
        lane: "USPS",
        container: item.container,
        service: item.id === "books" ? "USPS Media Mail or Ground Advantage" : "USPS Ground Advantage",
        action: "Box today if you are ready to send dense items now."
      };
    case "checked-or-usps":
      if (item.id === "iron" && options.needIronImmediately) {
        return {
          lane: "23 kg checked bag",
          container: "Wrap in clothes inside checked suitcase",
          service: "Flight checked baggage",
          action: "Keep the iron with you for week-one use."
        };
      }
      if (item.id === "masala" && options.checkedBags >= 2) {
        return {
          lane: "Split between checked bag and USPS",
          container: "Small checked pouch plus sealed USPS box",
          service: "Flight checked baggage + USPS Ground Advantage",
          action: "Carry one live masala kit, ship the remaining sealed stock."
        };
      }
      return {
        lane: "USPS",
        container: item.container,
        service: "USPS Ground Advantage",
        action: "Seal tightly and box in small manageable parcels."
      };
    case "ship-if-worth-it":
      return {
        lane: options.budgetMode === "cheapest" ? "Donate or rebuy" : "USPS if sentimental",
        container: options.budgetMode === "cheapest" ? "No shipping container" : item.container,
        service: options.budgetMode === "cheapest" ? "No shipment" : "USPS Ground Advantage",
        action: options.budgetMode === "cheapest" ? "Skip low-value breakables." : "Only ship what is expensive or sentimental."
      };
    case "use-up":
      return {
        lane: "Use up or discard",
        container: item.container,
        service: "No shipment",
        action: "Finish, gift or discard before move week."
      };
    case "conditional-vacuum":
      if (options.vacuumType === "corded") {
        return {
          lane: "USPS",
          container: item.container,
          service: "USPS Ground Advantage",
          action: "Remove loose attachments and box securely."
        };
      }
      return {
        lane: "Carry with you or verify battery rules",
        container: "Checked bag if installed battery rules permit, otherwise carry-on after battery check",
        service: "Manual verification needed",
        action: "Do not ship until you confirm the battery type and mailing rule."
      };
    case "nested":
      return {
        lane: "Nested inside another bag",
        container: item.container,
        service: "No standalone carrier",
        action: "Use spare bags as organizers, not the outside USPS package."
      };
    default:
      return {
        lane: "Review manually",
        container: item.container,
        service: "TBD",
        action: "Needs a custom decision."
      };
  }
}

function shouldBeInUspsToday(item, resolution) {
  const isUsps = resolution.service.includes("USPS");
  const blockedIds = new Set(["perfume", "medicines", "open-liquids"]);
  return isUsps && !blockedIds.has(item.id);
}

function recommendStorage(options) {
  if (options.storageDays <= 15 && options.friendCanReceive) {
    return {
      primary: "Send to your friend and coordinate a simple receiving window.",
      secondary: "USPS pickup windows are too short to function as real storage."
    };
  }

  if (options.storageDays >= 25) {
    return {
      primary: "Use month-to-month self storage in San Francisco for anything that cannot live with your friend.",
      secondary: options.friendCanReceive
        ? "Friend address still works well for the first wave of boxes."
        : "A paid package receiving service can handle a small package flow but not a whole apartment."
    };
  }

  return {
    primary: options.friendCanReceive
      ? "Ship the first wave to your friend and keep the second wave for your next trip."
      : "Use a package receiving service for smaller parcels and keep bulky luggage for later trips.",
    secondary: "Avoid relying on USPS as a storage provider."
  };
}

function generateMovePlan(rawOptions = {}) {
  const options = normalizeOptions(rawOptions);
  const inventory = getInventoryCatalog().map((item) => {
    const resolution = chooseLane(item, options);
    return {
      ...item,
      ...resolution
    };
  });

  const carryCount = inventory.filter((item) => item.lane === "Carry with you").length;
  const checkedCount = inventory.filter((item) => item.lane.includes("checked bag")).length;
  const luglessCount = inventory.filter((item) => item.service.includes("LugLess")).length;
  const uspsToday = inventory.filter((item) => shouldBeInUspsToday(item, item));
  const donateCount = inventory.filter((item) => item.service === "No shipment").length;
  const storage = recommendStorage(options);

  return {
    options,
    inventory,
    uspsToday,
    restrictions: getRestrictionMatrix(),
    storage,
    storageOptions: getStorageOptions(),
    snapshot: {
      carryCount,
      checkedCount,
      luglessCount,
      uspsCount: uspsToday.length,
      donateCount
    }
  };
}

function summarizePlan(plan) {
  return [
    `${plan.snapshot.carryCount} categories stay with Saurabh in carry-on because they are valuable, urgent or battery-sensitive.`,
    `${plan.snapshot.checkedCount} categories belong in 23 kg airline bags for quick access in San Francisco.`,
    `${plan.snapshot.uspsCount} categories are strong USPS candidates today because they are dense, boxed and low-risk.`,
    `${plan.snapshot.luglessCount} categories fit LugLess best because they are bulky soft goods.`,
    `${plan.snapshot.donateCount} categories are cheaper to use up, donate or rebuy than to ship cross-country.`
  ];
}

globalThis.TravelPlanner = {
  generateMovePlan,
  getInventoryCatalog,
  getRestrictionMatrix,
  getStorageOptions,
  summarizePlan
};
