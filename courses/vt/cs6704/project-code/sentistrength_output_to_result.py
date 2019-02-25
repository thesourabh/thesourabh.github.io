import glob

import matplotlib.pyplot as plt

def read_sentistrength_output(filename):

	#with open(str(index) + "_" + user + ".txt", "w") as fout:
		#i = 0
	i = 0
	total = 0
	year_map = {}
	min_sentiment = 99999
	max_sentiment = -99999
	index, username = filename.split('\\')[1].split('_')
	username = username[:-4]
	print(index, username)
	print("Data for file", filename)
	with open(filename) as fin:
		for line in fin:
			i += 1
			#if i == 5:
			#	break
			line = line.strip()
			comment, year, score_breakdown = line.split("\t")
			pos, neg = map(int, score_breakdown.split(" "))
			sentiment = pos + neg
			if sentiment < min_sentiment:
				min_sentiment = sentiment
			if sentiment > max_sentiment:
				max_sentiment = sentiment
			year = year.strip()
			if year in year_map:
				year_map[year][0] += sentiment
				year_map[year][1] += 1
			else:
				year_map[year] = [sentiment, 1]
	print(year_map)
	print("Maximum sentiment:", max_sentiment)
	print("Minimum sentiment:", min_sentiment)
	xaxis = []
	yaxis = []
	for year in sorted(year_map):
		year_int = int(year)
		if year_int < 2007 or year_int > 2018:
			continue
		total_sent, comment_count = year_map[year]
		if comment_count < 10:
			continue
		year_sentiment = total_sent / comment_count * 100
		xaxis.append(year + "\n(" + str(comment_count) + ")")
		yaxis.append(year_sentiment)
		print(year, year_sentiment, comment_count)
	plt.title(username + " (Rank #" + str(int(index) + 1) + ")")
	plt.plot(xaxis, yaxis, "bo-")
	plt.axhline(0, color='black')
	plt.savefig(index + username + ".png")
	plt.clf()
	plt.cla()
	plt.close()


files = glob.glob("sentistrength_output\*.txt")
print(files)

i = 0
for file in files:
	i += 1
	#if (i == 4):
	#	break
	read_sentistrength_output(file)