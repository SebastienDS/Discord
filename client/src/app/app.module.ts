import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServerListComponent } from './components/server-list/server-list.component';
import { ServerIconComponent } from './components/server-icon/server-icon.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { MemberListComponent } from './components/member-list/member-list.component';
import { ChannelItemComponent } from './components/channel-item/channel-item.component';
import { MemberComponent } from './components/member/member.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerListComponent,
    ServerIconComponent,
    ChannelListComponent,
    ChatComponent,
    MemberListComponent,
    ChannelItemComponent,
    MemberComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
