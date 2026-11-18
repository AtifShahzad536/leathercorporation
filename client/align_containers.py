import glob
import re

files = glob.glob('client/src/components/**/*.jsx', recursive=True)

target_pattern = r'w-\[(?:92|94)%\](\s+max-w-\[[^\]]+\])?'
replacement = 'w-[96%] max-w-[1800px]'

modified_count = 0
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    
    # Replace w-[92%] and w-[94%] with w-[96%] max-w-[1800px]
    new_content, count = re.subn(target_pattern, replacement, content)
    
    if count > 0:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(new_content)
        print(f"Updated {f}: {count} occurrences")
        modified_count += 1

print(f"\nTotal files updated: {modified_count}")
