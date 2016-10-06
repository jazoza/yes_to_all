### Yes to all 
### repository for a PZI MDMDA semester project, Rotterdam, autumn 2008

Yes to all is a set of playful interventions performed online and offline. 
http://yes.kucjica.org
This repository documents the development of simple scripts which put more "yes" into this world.

### yes.py

The pythons script yes.py replaces all words in a text with "yes". It omits spaces, numbers and punctuation, leaving the structure of the text intact. It can be applied to any text file, including articles, subtitles, and other scripts.See examples: 

ARTICLE
Inke Arns, Sylvia Sasse: “Subversive Affirmation. On Mimesis as Strategy of Resistance”
East Art Map. Contemporary Art and Eastern Europe, ed. by IRWIN, Cambridge: MIT Press / London: Afterall, 2006, ISBN 978-184638-005-1 / ISBN 978-184638-022-8, pp. 444-455
output: YES_Arns-Sasse_Subversive-Affirmation.txt
generated running this command:
cat Arns-Sasse_Subversive-Affirmation.txt | python yes.py > YES_Arns-Sasse_Subversive-Affirmation.txt

SUBTITLES
output: images/until-the-end-of-the-world , yesUntil.the.End.of.the.World.CD1.srt
generated running this command:
cat Until.the.End.of.the.World.CD1.srt | python yes.py > yesUntil.the.End.of.the.World.CD1.srt

FUN COMMANDS
ps aux | python yes.py 
ls | python yes.py

### yes to all firefox extension
fills in all form fields with "yes" 
to install, run yestoall.xpi (warning: may be very outdated! source code provided in the folder addon)
output: see images/addon-forms

