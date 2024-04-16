const tooltips = {
	"#home-button": "Home",
	"#nft-button": "NFTs",
	"#store-button": "Store",
	"#about-button": "About",
	"#donate-button": "Support",
	"#contact-button": "Contact",
};

for (const [selector, content] of Object.entries(tooltips)) {
	tippy(selector, { content: content });
}
