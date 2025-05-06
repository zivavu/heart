import sys

SEPARATORS = ['<333', ':333', 'atomy']  # JS, CSS, HTML


def parse_undefined_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    parts = {}
    current = None
    for line in content.splitlines():
        if line.strip() in SEPARATORS:
            current = line.strip()
            parts[current] = []
        elif current:
            parts[current].append(line)
    # Join sections
    js = '\n'.join(parts.get('<333', []))
    css = '\n'.join(parts.get(':333', []))
    html = '\n'.join(parts.get('atomy', []))
    return js, css, html


def write_outputs(js, css, html, outdir):
    with open(f'{outdir}/main.js', 'w', encoding='utf-8') as f:
        f.write(js)
    with open(f'{outdir}/style.css', 'w', encoding='utf-8') as f:
        f.write(css)
    with open(f'{outdir}/index.html', 'w', encoding='utf-8') as f:
        f.write(f'<html><head><link rel="stylesheet" href="style.css"></head><body>{html}<script src="main.js"></script></body></html>')


def main():
    if len(sys.argv) < 3:
        print('Usage: python compiler_undefined_0_1.py input.undefined output_dir')
        return
    js, css, html = parse_undefined_file(sys.argv[1])
    write_outputs(js, css, html, sys.argv[2])
    print('Compilation complete.')

if __name__ == '__main__':
    main() 