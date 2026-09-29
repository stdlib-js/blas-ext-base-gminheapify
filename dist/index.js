"use strict";var o=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var c=o(function(A,v){
var l=require('@stdlib/blas-ext-base-gminheap-sift-down/dist').ndarray,d=require('@stdlib/math-base-special-floor/dist');function g(e,r,a,u){var n,i,t;for(i=r.data,n=r.accessors[0],t=d((e-1)/2);t>=0;t--)l(e,t,n(i,u+t*a),i,a,u);return r}v.exports=g
});var s=o(function(B,f){
var m=require('@stdlib/blas-ext-base-gminheap-sift-down/dist').ndarray,h=require('@stdlib/array-base-arraylike2object/dist'),b=require('@stdlib/math-base-special-floor/dist'),w=c();function D(e,r,a,u){var n,i;if(e<=0)return r;if(n=h(r),n.accessorProtocol)return w(e,n,a,u),r;for(i=b((e-1)/2);i>=0;i--)m(e,i,r[u+i*a],r,a,u);return r}f.exports=D
});var y=o(function(C,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),k=s();function O(e,r,a){return k(e,r,a,j(e,a))}q.exports=O
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=y(),R=s();P(p,"ndarray",R);module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
