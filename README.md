# Hub

Hub is a foundation for creating a basic static internal web site for companies or any other type of organization that has a mission, vision, core values, strategic goals, and/or staff resources.

Hub uses [Jekyll](https://jekyllrb.com/) to render your content from Markdown and Liquid templates to HTML.

## Setting up Hub

Hub's vision is a world where even the smallest organizations are efficient to navigate effectively, which means Hub needs to be fairly easy to setup and deploy.

### Initialization

Before you can begin configuring Hub and creating content, you need to initialize your instance of Hub:

1. [Create a repo on GitHub](https://help.github.com/articles/create-a-repo/) for tracking changes to your Hub, if you do not already have one
2. [Clone the repo to your localhost](https://help.github.com/articles/cloning-a-repository/)
3. [Download the latest release of Hub](https://github.com/lightster/hub/releases/latest)
4. Extract the contents of the Hub release to your repository's clone directory
5. Navigate to the repository's clone directory in a terminal window
6. Install the required Ruby gems using `make setup`
    > If dependency conflict errors occur while installing the Ruby gems, consider installing RVM.
7. [Commit and push all of the files](https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/) in your repository's clone directory

### Configuration

The initial configuration of Hub involves updating the Jekyll `_config.yml` file. Open the repository's clone directory in your favorite text editor and edit the `_config.yml` file.

- `organization_name` — Name of your organization
- `organization_url` — URL of your organization's home page. Leave blank if you want your organization's branding in your Hub to link to your Hub's home page.
- `organization_brand_header` — HTML to use as your organization's brand in the header of the Hub. If you have an organization logo, use an `<img>` tag.
- `organization_brand_auth` — HTML to use as your organization's brand on the login page of the Hub. If you have an organization logo, use an `<img>` tag. _**Note:** this is only relevant if you use a third party system to force authentication to the Hub_
- `mission_statement` — Organization's mission statement
- `vision_statement` — Organization's vision statement
- `baseurl` — Name of your git repo, prefixed by a slash. For example: `/hub`
- `social-cards` List of social networks your organization uses so that your team can easily find your organization's social presence.

  The supported values for `network` are:
  - `twitter`
  - `facebook`
  - `github`
  - `linkedin`

  For each social card, you can provide `inverse` and set it to `true`. This is useful if your organization has multiple accounts on the same social network and you want to differentiate the two.

  If you are using Hub as a personal site, you can set `personal` to `true` on the `linkedin` card to properly link to a personal LinkedIn page.

  An example:
  ```yaml
  social-cards:
  - network: twitter
    username: lightster
  - network: twitter
    username: macaroonIO
    inverted: true
  - network: facebook
    username: lightster
  - network: github
    username: lightster
  - network: linkedin
    username: lightster
    personal: true
  ```
- `google_analytics` — Google Analytics tracker code, if you want to use Google Analytics for your Hub
- `google_maps` — Google Maps API key, if you are using Google Maps for any of your events in Hub

After configuring your Hub's `_config.yml`, run `make run` to start a local server to test your configuration.  The command will output the server address you can use to load your Hub in a browser.  It will look something like:
```
    Server address: http://127.0.0.1:4000/hub/
```

If you make a change to `_config.yml`, you will need to terminate the `make run` command using `Ctrl+C` and re-run the `make run` command for the change to take effect.

### Content creation

Adding, removing, or modifying a card from one of the sections is as simple as adding, removing, or modifying a Markdown file in the corresponding section's directory.

Anytime you want to work on creating or updating conent, first start your local Jekyll server by running `make run` so that you can preview your changes. The local Jekyll server will detect changes to your sections and cards, so you can leave the command running to automatically have your local site regenerate.

The sections' directories are:
- `_core-values`
- `_strategic-goals`
- `_upcoming-events`
- `_personal-resources`
- `_work-resources`

Within each of those directories are [Markdown](https://daringfireball.net/projects/markdown/basics) files that contain the information that is displayed on the cards. If the Markdown file has any content besides the [Jekyll front matter](https://jekyllrb.com/docs/frontmatter/), the card icons and card headers are turned into links that navigate to a page that is a render of the Markdown file's contents.

The file name only dictates the page's address when viewed in a browser. For example `_personal-resources/401k.md`, is viewable at `https://example.github.io/hub/personal-resources/401k/`.

Each card file should contain at least two fields in the front matter:
 - `title` — title of the card
 - `description` — description, which provides a concise context to the title

Optionally, each card file may contain a `sort_order` field in the front matter to determine the order the card appears within the section. Lower numbered cards appear before higher numbered cards.

For all card files except Core Values and Strategic Goals, an `icon` field should appear in the front matter. Use the name of an icon from [Font Awesome 4.7](http://fontawesome.io/icons/).

Optionally, all card files except Core Values and Strategic Goals may also include the following fields:
- `link` — absolute URL to an external web site
- `relative_link` — relative URL that links to another page within the Hub
- `bg_color` — CSS-compatible color to use for the background of the card icon; make sure to quote this value if using hex or it will be treated as a comment, e.g. `'#ffe1e6'`
- `fg_color` — CSS-compatible color to use for the card icon; make sure to quote this value if using hex or it will be treated as a comment, e.g. `'#000000'`

#### Event cards

For cards that represent an event, there are some additional fields that can be provided in the front matter.

First, it is important to set the layout to `event-details`.  This will ensure that event cards and event pages are formatted using the event details.

Additionally, the following fields should be provided in an `event_details` hash (see below for an example):
- `start_date` — start date and time of the event
- `city_state` — general location of the event

The following fields can also be provided as part of the `event_details` hash:
- `end_date` — end date and time of the event
- `location_name` — name of the location; e.g. a hotel name or name of a park
- `address` — street address of event
- `google_maps` — address or location ID to use for an embedded map from Google Maps. _**Note:** this is only relevant if you have a `google_maps` key setup in your `_config.yml`_

An example of the additional front matter used for events:
```yaml
event_details:
  start_date: 2017-07-10T12:00:00-0700
  end_date: 2017-07-13T16:00:00-0700
  city_state: San Diego, CA
  location_name: Marriott Marquis San Diego Marina
  address: |
    333 W Harbor Dr
    San Diego, CA 92101
  google_maps: 333 W Harbor Dr, San Diego, CA 92101

layout: event-details
```

Once you are satisfied with your Hub (you can always change it later!), commit and push all of your changes to GitHub.

### Publication

Hub can be published to any web host or web server that can host a static site.

#### Anyone with the link

If it is acceptable for your Hub to be accessible to anyone with a link to it, the easiest way to publish your Hub to the internet is to [enable GitHub Pages for the master branch of your Hub's repo](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#enabling-github-pages-to-publish-your-site-from-master-or-gh-pages). Any time you push changes to the `master` branch of your repo, GitHub Pages will automatically regenerate your site.

#### Require Google G Suite login

If your Hub contains confidential information, you can use an OAuth proxy server to limit access to your Hub.  There is an Ansible playbook, [lightster/oauth2-s3-proxy](https://github.com/lightster/oauth2-s3-proxy), that can be used to setup [bitly/oauth2_proxy](https://github.com/bitly/oauth2_proxy) on Amazon Web Services. The playbook sets up two EC2 instances and an S3 bucket, for running load-balanced oauth2_proxy servers and storing your web site respectively.

After you run the playbook, you can use a Travis CI [`.travis.yml` config](https://github.com/lightster/hub/blob/master/.travis.yml) to automatically push updates from your GitHub repo to your site hosted on AWS.
