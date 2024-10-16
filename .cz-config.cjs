module.exports = {
  types: [
    { value: 'feat', name: 'feat:     1111A new feature' },
    { value: 'fix', name: 'fix:      A bug fix' },
    { value: 'docs', name: 'docs:     Documentation only changes' },
    {
      value: 'refactor',
      name: 'refactor: A code change that neither fixes a bug nor adds a feature',
    },
    {
      value: 'chore',
      name:
        'chore:    Changes to the build process or auxiliary tools\n            and libraries such as documentation generation',
    },
    {
      value: 'log',
      name: 'log:      Just for log, config from project ./.cz-config.js',
    },
    { value: 'revert', name: 'revert:   Revert to a commit' },
    {
      value: 'perf',
      name: 'perf:     A code change that improves performance',
    },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',
  // override the messages, defaults are as follows
  messages: {
    type: 'Select the type of change that you\'re committing:',
    // scope: '\nDenote the SCOPE of this change (optional):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
    // body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    // footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
    // confirmCommit: 'Are you sure you want to proceed with the commit above?',
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix', 'refactor'],
  // skip any questions you want
  skipQuestions: ['body', 'breaking', 'footer'],

  // limit subject length
  subjectLimit: 200
}
