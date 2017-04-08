---
icon: code-fork
fg_color: '#efefef'
bg_color: '#6655aa'
layout: card-details
header_title: ""
---

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
5. Navigate to the repository's clone directory in a terminal window and install the required Ruby gems using `make setup`
    > If dependency conflict errors occur while installing the Ruby gems, consider installing RVM.
6. [Commit and push all of the files](https://help.github.com/articles/adding-a-file-to-a-repository-using-the-command-line/) in your repository's clone directory

### Configuration

The initial configuration of Hub involves updating the Jekyll `_config.yml` file. Open the repository's clone directory in your favorite text editor and edit the `_config.yml` file.

- `organization_name` — Name of your organization
- `organization_url` — URL of your organization's home page. Leave blank if you want your organization's branding in your Hub to link to your Hub's home page.
- `organization_brand_header` — HTML to use as your organization's brand in the header of the Hub. If you have an organization logo, use an `<img>` tag.
- `organization_brand_auth` — HTML to use as your organization's brand on the login page of the Hub. If you have an organization logo, use an `<img>` tag. _`Note:` this is only relevant if you use a third party system to force authentication to the Hub_
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
