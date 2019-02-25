#import justext
import re
import html.parser as htmlparser

XML_TAG_RE = re.compile(r'<[^>]+>')
html_parser = htmlparser.HTMLParser()

filename = "1_rbanffy.txt"

with open(filename, encoding="utf-8") as fin:
	for i, line in enumerate(fin):
		c = line.count("\t")
		if c > 1:
			print(i, c)
		comment, year = line.split("\t")
		comment = comment.strip()
		if len(comment) < 2:
			print(i, len(comment), comment)