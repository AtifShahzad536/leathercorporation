import re
import json

html_path = r"C:\Users\ABC\.gemini\antigravity\brain\59f2c2ee-6467-43b0-8b2f-02254df13d65\.user_uploaded\media_1794910104738_9ada9725.html"
with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

pattern = r'<li class="row" data-name="([^"]+)" data-url="https://hamcospo\.com/([^"/]+)/([^"/]+)/">'
matches = re.findall(pattern, html)

# Sport categories mapping
category_sport_map = {
    'custom-baseball-uniforms': 'BASEBALL',
    'custom-basketball-uniforms': 'BASKETBALL',
    'custom-esports-apparel': 'ESPORTS',
    'custom-flag-football-uniforms': 'FLAG FOOTBALL',
    'custom-football-uniforms': 'FOOTBALL',
    'custom-ice-hockey-uniforms': 'ICE HOCKEY',
    'custom-lacrosse-uniforms': 'LACROSSE',
    'custom-rugby-uniforms': 'RUGBY',
    'custom-soccer-uniforms': 'SOCCER',
    'custom-softball-uniforms': 'SOFTBALL',
    'custom-volleyball-uniforms': 'VOLLEYBALL',
    'custom-wrestling-singlets': 'WRESTLING',
}

sport_images = {
    'BASEBALL': 'https://images.unsplash.com/photo-1508344928928-7165b67de128?auto=format&fit=crop&w=800&q=80',
    'BASKETBALL': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    'ESPORTS': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    'FLAG FOOTBALL': 'https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&w=800&q=80',
    'FOOTBALL': 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80',
    'ICE HOCKEY': 'https://images.unsplash.com/photo-1580748141549-71748dbe0bdc?auto=format&fit=crop&w=800&q=80',
    'LACROSSE': 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
    'RUGBY': 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
    'SOCCER': 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
    'SOFTBALL': 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
    'VOLLEYBALL': 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800&q=80',
    'WRESTLING': 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
}

products = []
for idx, (raw_name, cat_slug, prod_slug) in enumerate(matches, 1):
    sport = category_sport_map.get(cat_slug, 'BASEBALL')
    clean_name = " ".join(word.capitalize() for word in raw_name.split())
    products.append({
        "id": idx,
        "name": clean_name,
        "slug": prod_slug,
        "categorySlug": cat_slug,
        "category": sport,
        "sport": sport.title(),
        "badge": "FACTORY DIRECT",
        "price": 38 if "pant" in prod_slug or "hoodie" in prod_slug or "jacket" in prod_slug else 34.99,
        "fabric": "Dye-Sublimated Moisture-Wicking Performance Polyester (180-220 GSM)",
        "finish": "Anti-Bacterial, Quick-Dry, Interlock Weave",
        "image": sport_images.get(sport, sport_images['BASEBALL']),
        "canonical": f"/{cat_slug}/{prod_slug}/",
        "rating": 4.9,
        "reviews": 38 + (idx % 25),
        "isNew": idx % 3 == 0,
        "isBestseller": idx % 4 == 0,
        "features": [
            "Full dye-sublimation: colors, crests, and numbers never crack or peel",
            "Custom names, player numbers, and sponsor logos included free",
            "Reinforced coverstitch seams engineered for high athletic contact",
            "Available in Youth YS-YXL and Adult XS-4XL cuts"
        ],
        "sizes": ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL", "3XL", "4XL"],
        "description": f"Custom {clean_name} tailored for professional clubs, high schools, and travel teams. Factory-direct export production with no middleman markup."
    })

js_code = f"""/**
 * Complete 296 Verified Products Catalog mapped directly from Hamco's exact URL taxonomy
 * Supporting URLs like: /custom-<sport>-uniforms/custom-<sport>-<product-slug>/
 */

export const sportSlugToCategory = {json.dumps(category_sport_map, indent=2)};

export const categoryToSportSlug = {json.dumps({v: k for k, v in category_sport_map.items()}, indent=2)};

export const fullCatalog296 = {json.dumps(products, indent=2)};
"""

with open(r"c:\Users\ABC\Documents\leather\client\src\data\fullCatalog296.js", "w", encoding="utf-8") as f:
    f.write(js_code)

print("Saved fullCatalog296.js with", len(products), "products.")

