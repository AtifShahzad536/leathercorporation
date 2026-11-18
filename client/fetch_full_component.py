import urllib.request

with open('client/silver_section_snippet.txt', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's extract full component definition from the JS bundle
with urllib.request.urlopen('https://silver-group.vercel.app/assets/index-DVTCmebE.js') as resp:
    full_js = resp.read().decode('utf-8', errors='ignore')

idx = full_js.find('ECO-PERFORMANCE')
start = max(0, idx - 3000)
end = min(len(full_js), idx + 2000)

with open('client/silver_full_component.txt', 'w', encoding='utf-8') as out:
    out.write(full_js[start:end])

print("Full component snippet saved.")

