# Golden-Holograms

To use, first clone repo. Then launch Live Server (package/plugin) in Atom or VS Code with repo folder added as project, pointing to the index.html in the project root. This should launch the application in a static viewing configuration.


Key tasks:


    Organization:
      Identify which Unity Build is being used for latest deployment
      Understand codebase and rearrange requisite materials as necessary


    Vote:
      Api calls from DOM click events
        - figure out how to manage state in vanilla JavaScript for post-vote
      Database logging of votes
      Database access and display of info
      "Legal" unobtrusive AUTH for bot protection / anti-cheat
        Also need to protect Api endpoints / hide them from users as this will be centralized (not client-side)
      Optional -- database endpoint/s for displaying live metrics


    Soft Content (writing/visuals):
      Edit DNA video for use with unity build  
      Golden Holograms Logo
      Press package (look into GPT-3 generative content...)
      Narratives
      Sagan integration
      Credits/donors page
      About page / additional info / cool Alpha stuff


    Hard Content (code):
      Browser Icon (from logo)
      SEO metadata for parsing by crawler
      Working contact form at bottom of home page
      "Home Screen Icon" for mobile and desktop users who do that
      Optional -- smooth navigation scroll for header/menu clicks

    Optimization:
      Site:

        Lighthouse for mobile and desktop reports
          File size optimization
          Removing extraneous assets
          Removing extraneous code
          Compressing requisite assets
          Deferring load of non-requisite assets
          Determine if videos can be served more efficiently both on their own and in conjunction with unity build

      Unity:
        Decrease build size with info here (https://docs.unity3d.com/Manual/ReducingFilesize.html) etc...
        Analyze the slowdown associated with changing the video being displayed


    Responsive:
      Seems half baked -- make further progress on what's been done, testing in console and on other network devices
      Moving text wreaks havoc on small screens
      Consider building for WebGL 1.0 instead of 2.0 if mobile problems persist


    Bug fixes:
      Spurts of sound play when certain videos are played (just fix streaming assets sources so that there is no sound)
      DNA play button plays fish video instead (simple Unity script issue that has been identified)

    Deployment:
      Follow-up with COECIS to get a sense of what they need from me


    Future work:
      Maintenance and integration with Flight Ops Alpha Mission Control?
