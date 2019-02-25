
import glob
import re
import html.parser as htmlparser

XML_TAG_RE = re.compile(r'<[^>]+>')
html_parser = htmlparser.HTMLParser()

def clean_comment(comment):
	comment = re.sub('<pre>.*?<\/pre>','', comment, flags=re.DOTALL)
	pre_loc = comment.find('<pre>')
	if (pre_loc != -1):
		comment = comment[:pre_loc]
	comment = re.sub('(?:&#62;|&gt;).*?<p>','', comment, flags=re.DOTALL)
	comment = html_parser.unescape(comment)
	comment = XML_TAG_RE.sub(' ', comment)
	comment = comment.replace("\t", "")
	comment = comment.strip()
	return comment

def create_user_file(filename):
	file_without_ext = filename.split('\\')[1][:-4]
	index, _, user = file_without_ext.split('_')
	fileout = "sentistrength_input/" + str(index) + "_" + user + ".txt"

	with open(fileout, "w", encoding="utf8") as fout:
		i = 0
		with open(filename, encoding="utf8") as fin:
			for line in fin:
				i += 1
				line = line.strip()
				comma = line.find(',')
				if comma == -1:
					continue
				timestamp, comment = line[:comma], clean_comment(line[comma + 1:])
				if len(comment) < 5:
					continue
				year = timestamp[:4]
				try:
					int(year)
				except:
					continue
				fout.write(comment + "\t" + year + "\n")
			
				
files = glob.glob("user_data\*.csv")
for file in files:
	create_user_file(file)
	i = 0
	print(file)
	with open(file, encoding="utf8") as fin:
		for line in fin:
			#print(line)
			i += 1
			if i == 2:
				break
print(files)
#