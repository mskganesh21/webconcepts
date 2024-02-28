//WEB RTC
//REAL TIME COMMUNICATION
// USED FOR VIDEO COMMUNICATION 

// BROWSER TO BROWSER COMMUNICATION FOR VIDEO STREAMING
// NOT SERVER INVOLVED
/*

* way to send to video chat in the BROWSER
* it is a browser thing
* javascript api
* it is a browser thing
* no installation required
* can also exchange data without servers

GUM (get user media)
*camera, mic, and screen, ask for permission

PC(peer connection)

*peer to peer

*originally we needed to have a server c1 to c2
* it inceases latency 
* takes time, increases bandwidth
* security problem
* now a days make peer connection and do it

UDP AND TCP

* no file transfer
 * tcp is reliable, acknowledgement, and stable
 * udp is fast
 * video is live and not like being recorded
 * web socket and http  is tcp
 
 * I need to know ....
 
 *where you are ?
 
 * what you are sending ?

 1. one has to start GUM (get user media)
 
 2. do pc (peer connection)
 
 3. send STUN servers to pc
 
 ** vpn(virtual private network), fw(firewall), and nat(network address translation),
 
 ** we'll have a router 
 
 ** stun(session treversal utilities for NAT) connects one ip to another ip required
 
 ** google stun server free
 
 **ice candidates
 (interactive connectivity establishment)
 * i found a way to connect to you
 
 **add tracks
 ** we create media tracks.add media tracks to peer connection
 
 **create offer
 RTC session description
 is an Object. it has type("offer") and SDP (session description protocol)
 
 **client c2
 type("answer")
  
 **local description  this is my rtc session description
 ** remote description this is the client's rtc session description
 
 
 
 **signalling server
 not part of web rtc
 like a pigeon carrying messages
 we use websockets for this.
 this is tcp
 
 we send offer and ice candidate 
 we do not send video feed
 
 we send offer and ice candidate to client 2
 
 now peer connection is established
 
 in client 2
 local answer and remote offer 
 
 
 
*/















