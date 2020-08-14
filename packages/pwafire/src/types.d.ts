declare class ClipboardItem {
  constructor(data: { [mimeType: string]: Blob });
}

interface Window {
  addEventListener(arg0: string, arg1: () => { type: string; message: string }): any;
  deferredPrompt?: any;
}

interface Navigator {
  contacts: any;
  write: any;
  setAppBadge: (unreadCount: any) => any;
  clearAppBadge: () => any;
}

interface Clipboard {
  write: (arg0: any[]) => any;
}