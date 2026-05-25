import re
import urllib.request

def find_posters(url):
    print('PAGE', url)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    data = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')
    matches = re.findall(r'https://upload\.wikimedia\.org/wikipedia/(?:en|commons)/[^"\']+\.(?:jpg|png)', data)
    seen = []
    for m in matches:
        if m not in seen:
            seen.append(m)
    for m in seen[:40]:
        print(m)
    print('---')

for url in ['https://en.wikipedia.org/wiki/Inception','https://en.wikipedia.org/wiki/The_Dark_Knight']:
    find_posters(url)
