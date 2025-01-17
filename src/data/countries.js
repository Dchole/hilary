const countries = [
  {
    name: "Andorra",
    emoji: "🇦🇩",
  },
  {
    name: "United Arab Emirates",
    emoji: "🇦🇪",
  },
  {
    name: "Afghanistan",
    emoji: "🇦🇫",
  },
  {
    name: "Antigua and Barbuda",
    emoji: "🇦🇬",
  },
  {
    name: "Anguilla",
    emoji: "🇦🇮",
  },
  {
    name: "Albania",
    emoji: "🇦🇱",
  },
  {
    name: "Armenia",
    emoji: "🇦🇲",
  },
  {
    name: "Angola",
    emoji: "🇦🇴",
  },
  {
    name: "Antarctica",
    emoji: "🇦🇶",
  },
  {
    name: "Argentina",
    emoji: "🇦🇷",
  },
  {
    name: "American Samoa",
    emoji: "🇦🇸",
  },
  {
    name: "Austria",
    emoji: "🇦🇹",
  },
  {
    name: "Australia",
    emoji: "🇦🇺",
  },
  {
    name: "Aruba",
    emoji: "🇦🇼",
  },
  {
    name: "Åland",
    emoji: "🇦🇽",
  },
  {
    name: "Azerbaijan",
    emoji: "🇦🇿",
  },
  {
    name: "Bosnia and Herzegovina",
    emoji: "🇧🇦",
  },
  {
    name: "Barbados",
    emoji: "🇧🇧",
  },
  {
    name: "Bangladesh",
    emoji: "🇧🇩",
  },
  {
    name: "Belgium",
    emoji: "🇧🇪",
  },
  {
    name: "Burkina Faso",
    emoji: "🇧🇫",
  },
  {
    name: "Bulgaria",
    emoji: "🇧🇬",
  },
  {
    name: "Bahrain",
    emoji: "🇧🇭",
  },
  {
    name: "Burundi",
    emoji: "🇧🇮",
  },
  {
    name: "Benin",
    emoji: "🇧🇯",
  },
  {
    name: "Saint Barthélemy",
    emoji: "🇧🇱",
  },
  {
    name: "Bermuda",
    emoji: "🇧🇲",
  },
  {
    name: "Brunei",
    emoji: "🇧🇳",
  },
  {
    name: "Bolivia",
    emoji: "🇧🇴",
  },
  {
    name: "Bonaire",
    emoji: "🇧🇶",
  },
  {
    name: "Brazil",
    emoji: "🇧🇷",
  },
  {
    name: "Bahamas",
    emoji: "🇧🇸",
  },
  {
    name: "Bhutan",
    emoji: "🇧🇹",
  },
  {
    name: "Bouvet Island",
    emoji: "🇧🇻",
  },
  {
    name: "Botswana",
    emoji: "🇧🇼",
  },
  {
    name: "Belarus",
    emoji: "🇧🇾",
  },
  {
    name: "Belize",
    emoji: "🇧🇿",
  },
  {
    name: "Canada",
    emoji: "🇨🇦",
  },
  {
    name: "Cocos [Keeling] Islands",
    emoji: "🇨🇨",
  },
  {
    name: "Democratic Republic of the Congo",
    emoji: "🇨🇩",
  },
  {
    name: "Central African Republic",
    emoji: "🇨🇫",
  },
  {
    name: "Republic of the Congo",
    emoji: "🇨🇬",
  },
  {
    name: "Switzerland",
    emoji: "🇨🇭",
  },
  {
    name: "Ivory Coast",
    emoji: "🇨🇮",
  },
  {
    name: "Cook Islands",
    emoji: "🇨🇰",
  },
  {
    name: "Chile",
    emoji: "🇨🇱",
  },
  {
    name: "Cameroon",
    emoji: "🇨🇲",
  },
  {
    name: "China",
    emoji: "🇨🇳",
  },
  {
    name: "Colombia",
    emoji: "🇨🇴",
  },
  {
    name: "Costa Rica",
    emoji: "🇨🇷",
  },
  {
    name: "Cuba",
    emoji: "🇨🇺",
  },
  {
    name: "Cape Verde",
    emoji: "🇨🇻",
  },
  {
    name: "Curacao",
    emoji: "🇨🇼",
  },
  {
    name: "Christmas Island",
    emoji: "🇨🇽",
  },
  {
    name: "Cyprus",
    emoji: "🇨🇾",
  },
  {
    name: "Czech Republic",
    emoji: "🇨🇿",
  },
  {
    name: "Germany",
    emoji: "🇩🇪",
  },
  {
    name: "Djibouti",
    emoji: "🇩🇯",
  },
  {
    name: "Denmark",
    emoji: "🇩🇰",
  },
  {
    name: "Dominica",
    emoji: "🇩🇲",
  },
  {
    name: "Dominican Republic",
    emoji: "🇩🇴",
  },
  {
    name: "Algeria",
    emoji: "🇩🇿",
  },
  {
    name: "Ecuador",
    emoji: "🇪🇨",
  },
  {
    name: "Estonia",
    emoji: "🇪🇪",
  },
  {
    name: "Egypt",
    emoji: "🇪🇬",
  },
  {
    name: "Western Sahara",
    emoji: "🇪🇭",
  },
  {
    name: "Eritrea",
    emoji: "🇪🇷",
  },
  {
    name: "Spain",
    emoji: "🇪🇸",
  },
  {
    name: "Ethiopia",
    emoji: "🇪🇹",
  },
  {
    name: "Finland",
    emoji: "🇫🇮",
  },
  {
    name: "Fiji",
    emoji: "🇫🇯",
  },
  {
    name: "Falkland Islands",
    emoji: "🇫🇰",
  },
  {
    name: "Micronesia",
    emoji: "🇫🇲",
  },
  {
    name: "Faroe Islands",
    emoji: "🇫🇴",
  },
  {
    name: "France",
    emoji: "🇫🇷",
  },
  {
    name: "Gabon",
    emoji: "🇬🇦",
  },
  {
    name: "United Kingdom",
    emoji: "🇬🇧",
  },
  {
    name: "Grenada",
    emoji: "🇬🇩",
  },
  {
    name: "Georgia",
    emoji: "🇬🇪",
  },
  {
    name: "French Guiana",
    emoji: "🇬🇫",
  },
  {
    name: "Guernsey",
    emoji: "🇬🇬",
  },
  {
    name: "Ghana",
    emoji: "🇬🇭",
  },
  {
    name: "Gibraltar",
    emoji: "🇬🇮",
  },
  {
    name: "Greenland",
    emoji: "🇬🇱",
  },
  {
    name: "Gambia",
    emoji: "🇬🇲",
  },
  {
    name: "Guinea",
    emoji: "🇬🇳",
  },
  {
    name: "Guadeloupe",
    emoji: "🇬🇵",
  },
  {
    name: "Equatorial Guinea",
    emoji: "🇬🇶",
  },
  {
    name: "Greece",
    emoji: "🇬🇷",
  },
  {
    name: "South Georgia and the South Sandwich Islands",
    emoji: "🇬🇸",
  },
  {
    name: "Guatemala",
    emoji: "🇬🇹",
  },
  {
    name: "Guam",
    emoji: "🇬🇺",
  },
  {
    name: "Guinea-Bissau",
    emoji: "🇬🇼",
  },
  {
    name: "Guyana",
    emoji: "🇬🇾",
  },
  {
    name: "Hong Kong",
    emoji: "🇭🇰",
  },
  {
    name: "Heard Island and McDonald Islands",
    emoji: "🇭🇲",
  },
  {
    name: "Honduras",
    emoji: "🇭🇳",
  },
  {
    name: "Croatia",
    emoji: "🇭🇷",
  },
  {
    name: "Haiti",
    emoji: "🇭🇹",
  },
  {
    name: "Hungary",
    emoji: "🇭🇺",
  },
  {
    name: "Indonesia",
    emoji: "🇮🇩",
  },
  {
    name: "Ireland",
    emoji: "🇮🇪",
  },
  {
    name: "Israel",
    emoji: "🇮🇱",
  },
  {
    name: "Isle of Man",
    emoji: "🇮🇲",
  },
  {
    name: "India",
    emoji: "🇮🇳",
  },
  {
    name: "British Indian Ocean Territory",
    emoji: "🇮🇴",
  },
  {
    name: "Iraq",
    emoji: "🇮🇶",
  },
  {
    name: "Iran",
    emoji: "🇮🇷",
  },
  {
    name: "Iceland",
    emoji: "🇮🇸",
  },
  {
    name: "Italy",
    emoji: "🇮🇹",
  },
  {
    name: "Jersey",
    emoji: "🇯🇪",
  },
  {
    name: "Jamaica",
    emoji: "🇯🇲",
  },
  {
    name: "Jordan",
    emoji: "🇯🇴",
  },
  {
    name: "Japan",
    emoji: "🇯🇵",
  },
  {
    name: "Kenya",
    emoji: "🇰🇪",
  },
  {
    name: "Kyrgyzstan",
    emoji: "🇰🇬",
  },
  {
    name: "Cambodia",
    emoji: "🇰🇭",
  },
  {
    name: "Kiribati",
    emoji: "🇰🇮",
  },
  {
    name: "Comoros",
    emoji: "🇰🇲",
  },
  {
    name: "Saint Kitts and Nevis",
    emoji: "🇰🇳",
  },
  {
    name: "North Korea",
    emoji: "🇰🇵",
  },
  {
    name: "South Korea",
    emoji: "🇰🇷",
  },
  {
    name: "Kuwait",
    emoji: "🇰🇼",
  },
  {
    name: "Cayman Islands",
    emoji: "🇰🇾",
  },
  {
    name: "Kazakhstan",
    emoji: "🇰🇿",
  },
  {
    name: "Laos",
    emoji: "🇱🇦",
  },
  {
    name: "Lebanon",
    emoji: "🇱🇧",
  },
  {
    name: "Saint Lucia",
    emoji: "🇱🇨",
  },
  {
    name: "Liechtenstein",
    emoji: "🇱🇮",
  },
  {
    name: "Sri Lanka",
    emoji: "🇱🇰",
  },
  {
    name: "Liberia",
    emoji: "🇱🇷",
  },
  {
    name: "Lesotho",
    emoji: "🇱🇸",
  },
  {
    name: "Lithuania",
    emoji: "🇱🇹",
  },
  {
    name: "Luxembourg",
    emoji: "🇱🇺",
  },
  {
    name: "Latvia",
    emoji: "🇱🇻",
  },
  {
    name: "Libya",
    emoji: "🇱🇾",
  },
  {
    name: "Morocco",
    emoji: "🇲🇦",
  },
  {
    name: "Monaco",
    emoji: "🇲🇨",
  },
  {
    name: "Moldova",
    emoji: "🇲🇩",
  },
  {
    name: "Montenegro",
    emoji: "🇲🇪",
  },
  {
    name: "Saint Martin",
    emoji: "🇲🇫",
  },
  {
    name: "Madagascar",
    emoji: "🇲🇬",
  },
  {
    name: "Marshall Islands",
    emoji: "🇲🇭",
  },
  {
    name: "North Macedonia",
    emoji: "🇲🇰",
  },
  {
    name: "Mali",
    emoji: "🇲🇱",
  },
  {
    name: "Myanmar [Burma]",
    emoji: "🇲🇲",
  },
  {
    name: "Mongolia",
    emoji: "🇲🇳",
  },
  {
    name: "Macao",
    emoji: "🇲🇴",
  },
  {
    name: "Northern Mariana Islands",
    emoji: "🇲🇵",
  },
  {
    name: "Martinique",
    emoji: "🇲🇶",
  },
  {
    name: "Mauritania",
    emoji: "🇲🇷",
  },
  {
    name: "Montserrat",
    emoji: "🇲🇸",
  },
  {
    name: "Malta",
    emoji: "🇲🇹",
  },
  {
    name: "Mauritius",
    emoji: "🇲🇺",
  },
  {
    name: "Maldives",
    emoji: "🇲🇻",
  },
  {
    name: "Malawi",
    emoji: "🇲🇼",
  },
  {
    name: "Mexico",
    emoji: "🇲🇽",
  },
  {
    name: "Malaysia",
    emoji: "🇲🇾",
  },
  {
    name: "Mozambique",
    emoji: "🇲🇿",
  },
  {
    name: "Namibia",
    emoji: "🇳🇦",
  },
  {
    name: "New Caledonia",
    emoji: "🇳🇨",
  },
  {
    name: "Niger",
    emoji: "🇳🇪",
  },
  {
    name: "Norfolk Island",
    emoji: "🇳🇫",
  },
  {
    name: "Nigeria",
    emoji: "🇳🇬",
  },
  {
    name: "Nicaragua",
    emoji: "🇳🇮",
  },
  {
    name: "Netherlands",
    emoji: "🇳🇱",
  },
  {
    name: "Norway",
    emoji: "🇳🇴",
  },
  {
    name: "Nepal",
    emoji: "🇳🇵",
  },
  {
    name: "Nauru",
    emoji: "🇳🇷",
  },
  {
    name: "Niue",
    emoji: "🇳🇺",
  },
  {
    name: "New Zealand",
    emoji: "🇳🇿",
  },
  {
    name: "Oman",
    emoji: "🇴🇲",
  },
  {
    name: "Panama",
    emoji: "🇵🇦",
  },
  {
    name: "Peru",
    emoji: "🇵🇪",
  },
  {
    name: "French Polynesia",
    emoji: "🇵🇫",
  },
  {
    name: "Papua New Guinea",
    emoji: "🇵🇬",
  },
  {
    name: "Philippines",
    emoji: "🇵🇭",
  },
  {
    name: "Pakistan",
    emoji: "🇵🇰",
  },
  {
    name: "Poland",
    emoji: "🇵🇱",
  },
  {
    name: "Saint Pierre and Miquelon",
    emoji: "🇵🇲",
  },
  {
    name: "Pitcairn Islands",
    emoji: "🇵🇳",
  },
  {
    name: "Puerto Rico",
    emoji: "🇵🇷",
  },
  {
    name: "Palestine",
    emoji: "🇵🇸",
  },
  {
    name: "Portugal",
    emoji: "🇵🇹",
  },
  {
    name: "Palau",
    emoji: "🇵🇼",
  },
  {
    name: "Paraguay",
    emoji: "🇵🇾",
  },
  {
    name: "Qatar",
    emoji: "🇶🇦",
  },
  {
    name: "Réunion",
    emoji: "🇷🇪",
  },
  {
    name: "Romania",
    emoji: "🇷🇴",
  },
  {
    name: "Serbia",
    emoji: "🇷🇸",
  },
  {
    name: "Russia",
    emoji: "🇷🇺",
  },
  {
    name: "Rwanda",
    emoji: "🇷🇼",
  },
  {
    name: "Saudi Arabia",
    emoji: "🇸🇦",
  },
  {
    name: "Solomon Islands",
    emoji: "🇸🇧",
  },
  {
    name: "Seychelles",
    emoji: "🇸🇨",
  },
  {
    name: "Sudan",
    emoji: "🇸🇩",
  },
  {
    name: "Sweden",
    emoji: "🇸🇪",
  },
  {
    name: "Singapore",
    emoji: "🇸🇬",
  },
  {
    name: "Saint Helena",
    emoji: "🇸🇭",
  },
  {
    name: "Slovenia",
    emoji: "🇸🇮",
  },
  {
    name: "Svalbard and Jan Mayen",
    emoji: "🇸🇯",
  },
  {
    name: "Slovakia",
    emoji: "🇸🇰",
  },
  {
    name: "Sierra Leone",
    emoji: "🇸🇱",
  },
  {
    name: "San Marino",
    emoji: "🇸🇲",
  },
  {
    name: "Senegal",
    emoji: "🇸🇳",
  },
  {
    name: "Somalia",
    emoji: "🇸🇴",
  },
  {
    name: "Suriname",
    emoji: "🇸🇷",
  },
  {
    name: "South Sudan",
    emoji: "🇸🇸",
  },
  {
    name: "São Tomé and Príncipe",
    emoji: "🇸🇹",
  },
  {
    name: "El Salvador",
    emoji: "🇸🇻",
  },
  {
    name: "Sint Maarten",
    emoji: "🇸🇽",
  },
  {
    name: "Syria",
    emoji: "🇸🇾",
  },
  {
    name: "Swaziland",
    emoji: "🇸🇿",
  },
  {
    name: "Turks and Caicos Islands",
    emoji: "🇹🇨",
  },
  {
    name: "Chad",
    emoji: "🇹🇩",
  },
  {
    name: "French Southern Territories",
    emoji: "🇹🇫",
  },
  {
    name: "Togo",
    emoji: "🇹🇬",
  },
  {
    name: "Thailand",
    emoji: "🇹🇭",
  },
  {
    name: "Tajikistan",
    emoji: "🇹🇯",
  },
  {
    name: "Tokelau",
    emoji: "🇹🇰",
  },
  {
    name: "East Timor",
    emoji: "🇹🇱",
  },
  {
    name: "Turkmenistan",
    emoji: "🇹🇲",
  },
  {
    name: "Tunisia",
    emoji: "🇹🇳",
  },
  {
    name: "Tonga",
    emoji: "🇹🇴",
  },
  {
    name: "Turkey",
    emoji: "🇹🇷",
  },
  {
    name: "Trinidad and Tobago",
    emoji: "🇹🇹",
  },
  {
    name: "Tuvalu",
    emoji: "🇹🇻",
  },
  {
    name: "Taiwan",
    emoji: "🇹🇼",
  },
  {
    name: "Tanzania",
    emoji: "🇹🇿",
  },
  {
    name: "Ukraine",
    emoji: "🇺🇦",
  },
  {
    name: "Uganda",
    emoji: "🇺🇬",
  },
  {
    name: "U.S. Minor Outlying Islands",
    emoji: "🇺🇲",
  },
  {
    name: "United States",
    emoji: "🇺🇸",
  },
  {
    name: "Uruguay",
    emoji: "🇺🇾",
  },
  {
    name: "Uzbekistan",
    emoji: "🇺🇿",
  },
  {
    name: "Vatican City",
    emoji: "🇻🇦",
  },
  {
    name: "Saint Vincent and the Grenadines",
    emoji: "🇻🇨",
  },
  {
    name: "Venezuela",
    emoji: "🇻🇪",
  },
  {
    name: "British Virgin Islands",
    emoji: "🇻🇬",
  },
  {
    name: "U.S. Virgin Islands",
    emoji: "🇻🇮",
  },
  {
    name: "Vietnam",
    emoji: "🇻🇳",
  },
  {
    name: "Vanuatu",
    emoji: "🇻🇺",
  },
  {
    name: "Wallis and Futuna",
    emoji: "🇼🇫",
  },
  {
    name: "Samoa",
    emoji: "🇼🇸",
  },
  {
    name: "Kosovo",
    emoji: "🇽🇰",
  },
  {
    name: "Yemen",
    emoji: "🇾🇪",
  },
  {
    name: "Mayotte",
    emoji: "🇾🇹",
  },
  {
    name: "South Africa",
    emoji: "🇿🇦",
  },
  {
    name: "Zambia",
    emoji: "🇿🇲",
  },
  {
    name: "Zimbabwe",
    emoji: "🇿🇼",
  },
];

export default countries;
