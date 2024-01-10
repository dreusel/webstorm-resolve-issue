See the screencast in webstorm-resolve-issue.webm
I use an empty 'rootProject' as the main project. After that I attach several sub-'projects' to it, which share some common libraries.
The screencast is recorded with the file structure as it is in this repository, after running npm install on each of the subprojects (projecta{A-I}). If using bash, the installModules.sh script may be used for that.

@00:00 To start with a clean sheet, I delete the .idea folder from the rootProject and remove the project from "Recent projects"
@00:17 I open rootProject as a new project, in 'this' window (but 'in new window' has the same result)
@00:20 I open several 'child' projects and choose to 'attach' them to the open window
@00:40-01:57 Several other issues appear that are not relevant to this issue so feel free to skip, but some peculiar things are happening here so I'll describe them briefly anyway.
@00:40 I open projectaA/main.js, use Go To -> Implementation on a function exposed by one of the included libraries
Interestingly, for this time it opens the .d.ts file instead of the implementation file (even though the implementation file is present in the node_modules).
This is issue is discussed extensively and repeatedly in several other posts so I will not go into detail here, but clearly this issue still exists.
On earlier and later tries it did open the implementation file though, so it's not very consistent.

@00:46 I try to hover over the opened editor tab to show the full path, but Webstorm seems to have become completely unresponsive. This hasn't happened to me before. 
@01:40 Eventually I give up, kill the java process, restart webstorm and continue where I left off

@01:53 Again I open projectaA/main.js and on the MongoClient.connect function use right-click -> Go To -> Implementation
Again it asks me If I want to include the package files into the project, I guess it didn't store some things due to the freeze previously.
It takes me to projectA/node_modules/.../mongodb.d.ts
It opened the file from the correct node_modules directory

@02:06 I open projectaB/main.js and on the same MongoClient.connect function use right-click -> Go To -> Implementation

>>> This is where the actual issue happens:
@02:12 As we can see in the tooltip, it takes me to the implementation file from projectaI/node_modules instead of from projectaB/node_modules as would be expected.
Also note that this time it actually opened the implementation file, not the .d.ts file.

Lastly, note that webstorm crashing in this run didn't happen on earlier runs of the same scenario while in those runs I did observe the issue of the wrongly resolved dependency as it is observed here. So the crash and the issue are unrelated.
