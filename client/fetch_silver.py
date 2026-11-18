import urllib.request
import re

url = 'https://silver-group.vercel.app'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
    
    # Find all js script tags
    js_files = re.findall(r'src="([^"]+\.js)"', html)
    print("Found JS files:", js_files)

    for js in js_files:
        js_url = js if js.startswith('http') else url + js
        try:
            req_js = urllib.request.Request(js_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_js) as js_resp:
                js_content = js_resp.read().decode('utf-8', errors='ignore')
                if 'ECO-PERFORMANCE' in js_content or 'SILVER LAB' in js_content:
                    print(f"Matched in {js}!")
                    # extract snippet around ECO-PERFORMANCE
                    idx = js_content.find('ECO-PERFORMANCE')
                    start = max(0, idx - 1000)
                    end = min(len(js_content), idx + 2000)
                    with open('client/silver_section_snippet.txt', 'w', encoding='utf-8') as out:
                        out.write(js_content[start:end])
                    print("Written snippet to client/silver_section_snippet.txt")
                    break
        except Exception as e:
            print(f"Failed {js}: {e}")
except Exception as e:
    print('Failed main:', e)

