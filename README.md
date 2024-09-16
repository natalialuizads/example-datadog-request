# Example Datadog

When trying to identify request errors occurring in the microfrontend, the stack trace does not indicate which microfrontend executed, making identification impossible.

To simulate the behavior, execute the following commands:

For the shell:
```
npm run serve:shell
```
For the microfrontend:
```
npm run serve:small
```

Click on the example request button and check the console for the event.

Note: Update the shell's bootstrap file with the clientToken and applicationId.
