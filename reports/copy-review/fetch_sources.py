from pathlib import Path
from urllib.request import Request, urlopen
from html.parser import HTMLParser
import json
class Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.text=[]; self.skip=0
    def handle_starttag(self, tag, attrs):
        if tag in ('script','style'): self.skip+=1
    def handle_endtag(self, tag):
        if tag in ('script','style'): self.skip=max(0,self.skip-1)
    def handle_data(self,data):
        if not self.skip and data.strip(): self.text.append(data.strip())
urls={
'peptide-sciences':'https://www.peptidesciences.com',
'kawa-case':'https://www.justice.gov/usao-ndin/united-states-v-matthew-kawa',
'kawa-sentence':'https://www.justice.gov/usao-ndin/pr/illinois-man-and-indiana-woman-sentenced-respectively-70-months-and-16-months-prison',
'apex-ktiv':'https://www.ktiv.com/2026/09/25/five-more-apex-tied-businesses-found-non-operational-building/',
'amino-secondary':'https://peptideexaminer.com/vendors/amino-asylum',
'fda-gram':'https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026'
}
folder=Path(__file__).parent/'sources'; folder.mkdir(exist_ok=True)
records=[]
for key,url in urls.items():
    try:
        response=urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=30)
        body=response.read().decode('utf-8',errors='replace'); parser=Text(); parser.feed(body)
        text='\n'.join(parser.text); (folder/(key+'.txt')).write_text(text)
        records.append({'key':key,'url':url,'final_url':response.url,'status':response.status})
        print(key,response.status,text[:250])
    except Exception as e:
        records.append({'key':key,'url':url,'error':str(e)}); print(key,str(e))
(folder/'fetch-log.json').write_text(json.dumps(records,indent=2))
