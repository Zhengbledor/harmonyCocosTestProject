System.register(['./_commonjsHelpers-19d0a8b5.js', './physics-selector-ae99c7bc.js', './index-cdf65239.js', './physics-framework-3d5f65ee.js', './physics-enum-048e1b76.js', './util-bc981e2e.js', './builtin-res-mgr.jsb-782de3de.js', './deprecated-88c49970.js', './director-cf2afd11.js', './node-event-41e0592a.js', './decorators-f21c5b0b.js', './collision-matrix-6d1e620b.js', './deprecated-cdde63bd.js', './find-a2ac9aec.js', './device-62ae3c0d.js', './pipeline-sub-state.jsb-4e7eafde.js', './camera-component-4ee32ea3.js', './scene-asset.jsb-81748dae.js', './model-renderer-52e7f62a.js', './renderer-259bfa66.js', './mesh.jsb-fd5f72d1.js', './skeleton.jsb-dc71323f.js', './terrain-asset-1329d2af.js', './rendering-sub-mesh.jsb-361ed7d8.js', './base.js', './deprecated-158528dd.js', './texture-buffer-pool-e90ff83a.js', './builtin-pipelines-332c829e.js', './instantiate-f342ad01.js', './touch-28f50917.js', './impl-73464bf7.js', './cached-array-848bd3ae.js', './murmurhash2_gc-2108d723.js', './move-7194d4ed.js', './capsule-d64bdce8.js'], (function () {
  'use strict';
  var createCommonjsModule, commonjsRequire, selector, Vec3, Quat, fastRemoveAt, AABB, Color, warnID, error, clamp, absMaxComponent, PhysicsSystem, SimplexCollider, ERigidBodyType, PhysicsGroup, EPhysicsDrawFlags, EAxisDirection, getWrap, setWrap, absolute, VEC3_0, TransformBit, game, Game, director;
  return {
    setters: [function (module) {
      createCommonjsModule = module.c;
      commonjsRequire = module.a;
    }, function (module) {
      selector = module.s;
    }, function (module) {
      Vec3 = module.n;
      Quat = module.Q;
      fastRemoveAt = module.bz;
      AABB = module.bE;
      Color = module.C;
      warnID = module.d;
      error = module.e;
      clamp = module.F;
      absMaxComponent = module.a2;
    }, function (module) {
      PhysicsSystem = module.P;
      SimplexCollider = module.S;
    }, function (module) {
      ERigidBodyType = module.E;
      PhysicsGroup = module.P;
      EPhysicsDrawFlags = module.i;
      EAxisDirection = module.b;
    }, function (module) {
      getWrap = module.g;
      setWrap = module.s;
      absolute = module.a;
      VEC3_0 = module.V;
    }, function (module) {
      TransformBit = module.Z;
    }, function (module) {
      game = module.g;
      Game = module.G;
    }, function (module) {
      director = module.n;
    }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
    execute: (function () {

      var cannon = createCommonjsModule(function (module, exports) {
      // Tue, 20 Jul 2021 10:46:34 GMT

      /*
       * Copyright (c) 2015 cannon.js Authors
       *
       * Permission is hereby granted, free of charge, to any person
       * obtaining a copy of this software and associated documentation
       * files (the "Software"), to deal in the Software without
       * restriction, including without limitation the rights to use, copy,
       * modify, merge, publish, distribute, sublicense, and/or sell copies
       * of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be
       * included in all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
       * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
       * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
       * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
       * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
       * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
       * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
       */

      !function(e){module.exports=e();}(function(){return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof commonjsRequire=="function"&&commonjsRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r);}return n[o].exports}var i=typeof commonjsRequire=="function"&&commonjsRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
      module.exports={
        "name": "@cocos/cannon",
        "version": "1.2.8",
        "description": "A lightweight 3D physics engine written in JavaScript.",
        "homepage": "https://github.com/cocos-creator/cannon.js",
        "author": "Stefan Hedman <schteppe@gmail.com> (http://steffe.se), JayceLai",
        "keywords": [
          "cannon.js",
          "cocos",
          "creator",
          "physics",
          "engine",
          "3d"
        ],
        "scripts": {
          "build":"grunt && npm run preprocess && grunt addLicense && grunt addDate",
          "preprocess":"node node_modules/uglify-js/bin/uglifyjs build/cannon.js -o build/cannon.min.js -c -m",
          "postpublish": "cnpm sync @cocos/cannon"
        },
        "main": "./build/cannon.js",
        "engines": {
          "node": "*"
        },
        "repository": {
          "type": "git",
          "url": "https://github.com/cocos-creator/cannon.js.git"
        },
        "bugs": {
          "url": "https://github.com/cocos-creator/cannon.js/issues"
        },
        "licenses": [
          {
            "type": "MIT"
          }
        ],
        "devDependencies": {
          "jshint": "latest",
          "uglify-js": "latest",
          "nodeunit": "^0.9.0",
          "grunt": "~0.4.0",
          "grunt-contrib-jshint": "~0.1.1",
          "grunt-contrib-nodeunit": "^0.4.1",
          "grunt-contrib-concat": "~0.1.3",
          "grunt-contrib-uglify": "^0.5.1",
          "grunt-browserify": "^2.1.4",
          "grunt-contrib-yuidoc": "^0.5.2",
          "browserify": "*"
        },
        "dependencies": {}
      };

      },{}],2:[function(_dereq_,module,exports){
      // Export classes
      module.exports = {
          version :                       _dereq_('../package.json').version,

          AABB :                          _dereq_('./collision/AABB'),
          ArrayCollisionMatrix :          _dereq_('./collision/ArrayCollisionMatrix'),
          Body :                          _dereq_('./objects/Body'),
          Box :                           _dereq_('./shapes/Box'),
          Broadphase :                    _dereq_('./collision/Broadphase'),
          Constraint :                    _dereq_('./constraints/Constraint'),
          ContactEquation :               _dereq_('./equations/ContactEquation'),
          Narrowphase :                   _dereq_('./world/Narrowphase'),
          ConeTwistConstraint :           _dereq_('./constraints/ConeTwistConstraint'),
          ContactMaterial :               _dereq_('./material/ContactMaterial'),
          ConvexPolyhedron :              _dereq_('./shapes/ConvexPolyhedron'),
          Cylinder :                      _dereq_('./shapes/Cylinder'),
          DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),
          Equation :                      _dereq_('./equations/Equation'),
          EventTarget :                   _dereq_('./utils/EventTarget'),
          FrictionEquation :              _dereq_('./equations/FrictionEquation'),
          GSSolver :                      _dereq_('./solver/GSSolver'),
          GridBroadphase :                _dereq_('./collision/GridBroadphase'),
          Heightfield :                   _dereq_('./shapes/Heightfield'),
          HingeConstraint :               _dereq_('./constraints/HingeConstraint'),
          LockConstraint :                _dereq_('./constraints/LockConstraint'),
          Mat3 :                          _dereq_('./math/Mat3'),
          Material :                      _dereq_('./material/Material'),
          NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),
          ObjectCollisionMatrix :         _dereq_('./collision/ObjectCollisionMatrix'),
          Pool :                          _dereq_('./utils/Pool'),
          Particle :                      _dereq_('./shapes/Particle'),
          Plane :                         _dereq_('./shapes/Plane'),
          PointToPointConstraint :        _dereq_('./constraints/PointToPointConstraint'),
          Quaternion :                    _dereq_('./math/Quaternion'),
          Ray :                           _dereq_('./collision/Ray'),
          RaycastVehicle :                _dereq_('./objects/RaycastVehicle'),
          RaycastResult :                 _dereq_('./collision/RaycastResult'),
          RigidVehicle :                  _dereq_('./objects/RigidVehicle'),
          RotationalEquation :            _dereq_('./equations/RotationalEquation'),
          RotationalMotorEquation :       _dereq_('./equations/RotationalMotorEquation'),
          SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),
          SPHSystem :                     _dereq_('./objects/SPHSystem'),
          Shape :                         _dereq_('./shapes/Shape'),
          Solver :                        _dereq_('./solver/Solver'),
          Sphere :                        _dereq_('./shapes/Sphere'),
          SplitSolver :                   _dereq_('./solver/SplitSolver'),
          Spring :                        _dereq_('./objects/Spring'),
          Transform :                     _dereq_('./math/Transform'),
          Trimesh :                       _dereq_('./shapes/Trimesh'),
          Vec3 :                          _dereq_('./math/Vec3'),
          Vec3Pool :                      _dereq_('./utils/Vec3Pool'),
          World :                         _dereq_('./world/World'),
          Octree :                        _dereq_('./utils/Octree'),
      };

      },{"../package.json":1,"./collision/AABB":3,"./collision/ArrayCollisionMatrix":4,"./collision/Broadphase":5,"./collision/GridBroadphase":6,"./collision/NaiveBroadphase":7,"./collision/ObjectCollisionMatrix":8,"./collision/Ray":10,"./collision/RaycastResult":11,"./collision/SAPBroadphase":12,"./constraints/ConeTwistConstraint":13,"./constraints/Constraint":14,"./constraints/DistanceConstraint":15,"./constraints/HingeConstraint":16,"./constraints/LockConstraint":17,"./constraints/PointToPointConstraint":18,"./equations/ContactEquation":20,"./equations/Equation":21,"./equations/FrictionEquation":22,"./equations/RotationalEquation":23,"./equations/RotationalMotorEquation":24,"./material/ContactMaterial":25,"./material/Material":26,"./math/Mat3":28,"./math/Quaternion":29,"./math/Transform":30,"./math/Vec3":31,"./objects/Body":32,"./objects/RaycastVehicle":33,"./objects/RigidVehicle":34,"./objects/SPHSystem":35,"./objects/Spring":36,"./shapes/Box":38,"./shapes/ConvexPolyhedron":39,"./shapes/Cylinder":40,"./shapes/Heightfield":41,"./shapes/Particle":42,"./shapes/Plane":43,"./shapes/Shape":44,"./shapes/Sphere":45,"./shapes/Trimesh":46,"./solver/GSSolver":47,"./solver/Solver":48,"./solver/SplitSolver":49,"./utils/EventTarget":50,"./utils/Octree":51,"./utils/Pool":52,"./utils/Vec3Pool":55,"./world/Narrowphase":56,"./world/World":57}],3:[function(_dereq_,module,exports){
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../utils/Utils');

      module.exports = AABB;

      /**
       * Axis aligned bounding box class.
       * @class AABB
       * @constructor
       * @param {Object} [options]
       * @param {Vec3}   [options.upperBound]
       * @param {Vec3}   [options.lowerBound]
       */
      function AABB(options){
          options = options || {};

          /**
           * The lower bound of the bounding box.
           * @property lowerBound
           * @type {Vec3}
           */
          this.lowerBound = new Vec3();
          if(options.lowerBound){
              this.lowerBound.copy(options.lowerBound);
          }

          /**
           * The upper bound of the bounding box.
           * @property upperBound
           * @type {Vec3}
           */
          this.upperBound = new Vec3();
          if(options.upperBound){
              this.upperBound.copy(options.upperBound);
          }
      }

      var tmp = new Vec3();

      /**
       * Set the AABB bounds from a set of points.
       * @method setFromPoints
       * @param {Array} points An array of Vec3's.
       * @param {Vec3} position
       * @param {Quaternion} quaternion
       * @param {number} skinSize
       * @return {AABB} The self object
       */
      AABB.prototype.setFromPoints = function(points, position, quaternion, skinSize){
          var l = this.lowerBound,
              u = this.upperBound,
              q = quaternion;

          // Set to the first point
          l.copy(points[0]);
          if(q){
              q.vmult(l, l);
          }
          u.copy(l);

          for(var i = 1; i<points.length; i++){
              var p = points[i];

              if(q){
                  q.vmult(p, tmp);
                  p = tmp;
              }

              if(p.x > u.x){ u.x = p.x; }
              if(p.x < l.x){ l.x = p.x; }
              if(p.y > u.y){ u.y = p.y; }
              if(p.y < l.y){ l.y = p.y; }
              if(p.z > u.z){ u.z = p.z; }
              if(p.z < l.z){ l.z = p.z; }
          }

          // Add offset
          if (position) {
              position.vadd(l, l);
              position.vadd(u, u);
          }

          if(skinSize){
              l.x -= skinSize;
              l.y -= skinSize;
              l.z -= skinSize;
              u.x += skinSize;
              u.y += skinSize;
              u.z += skinSize;
          }

          return this;
      };

      /**
       * Copy bounds from an AABB to this AABB
       * @method copy
       * @param  {AABB} aabb Source to copy from
       * @return {AABB} The this object, for chainability
       */
      AABB.prototype.copy = function(aabb){
          this.lowerBound.copy(aabb.lowerBound);
          this.upperBound.copy(aabb.upperBound);
          return this;
      };

      /**
       * Clone an AABB
       * @method clone
       */
      AABB.prototype.clone = function(){
          return new AABB().copy(this);
      };

      /**
       * Extend this AABB so that it covers the given AABB too.
       * @method extend
       * @param  {AABB} aabb
       */
      AABB.prototype.extend = function(aabb){
          this.lowerBound.x = Math.min(this.lowerBound.x, aabb.lowerBound.x);
          this.upperBound.x = Math.max(this.upperBound.x, aabb.upperBound.x);
          this.lowerBound.y = Math.min(this.lowerBound.y, aabb.lowerBound.y);
          this.upperBound.y = Math.max(this.upperBound.y, aabb.upperBound.y);
          this.lowerBound.z = Math.min(this.lowerBound.z, aabb.lowerBound.z);
          this.upperBound.z = Math.max(this.upperBound.z, aabb.upperBound.z);
      };

      /**
       * Returns true if the given AABB overlaps this AABB.
       * @method overlaps
       * @param  {AABB} aabb
       * @return {Boolean}
       */
      AABB.prototype.overlaps = function(aabb){
          var l1 = this.lowerBound,
              u1 = this.upperBound,
              l2 = aabb.lowerBound,
              u2 = aabb.upperBound;

          //      l2        u2
          //      |---------|
          // |--------|
          // l1       u1

          var overlapsX = ((l2.x <= u1.x && u1.x <= u2.x) || (l1.x <= u2.x && u2.x <= u1.x));
          var overlapsY = ((l2.y <= u1.y && u1.y <= u2.y) || (l1.y <= u2.y && u2.y <= u1.y));
          var overlapsZ = ((l2.z <= u1.z && u1.z <= u2.z) || (l1.z <= u2.z && u2.z <= u1.z));

          return overlapsX && overlapsY && overlapsZ;
      };

      // Mostly for debugging
      AABB.prototype.volume = function(){
          var l = this.lowerBound,
              u = this.upperBound;
          return (u.x - l.x) * (u.y - l.y) * (u.z - l.z);
      };


      /**
       * Returns true if the given AABB is fully contained in this AABB.
       * @method contains
       * @param {AABB} aabb
       * @return {Boolean}
       */
      AABB.prototype.contains = function(aabb){
          var l1 = this.lowerBound,
              u1 = this.upperBound,
              l2 = aabb.lowerBound,
              u2 = aabb.upperBound;

          //      l2        u2
          //      |---------|
          // |---------------|
          // l1              u1

          return (
              (l1.x <= l2.x && u1.x >= u2.x) &&
              (l1.y <= l2.y && u1.y >= u2.y) &&
              (l1.z <= l2.z && u1.z >= u2.z)
          );
      };

      /**
       * @method getCorners
       * @param {Vec3} a
       * @param {Vec3} b
       * @param {Vec3} c
       * @param {Vec3} d
       * @param {Vec3} e
       * @param {Vec3} f
       * @param {Vec3} g
       * @param {Vec3} h
       */
      AABB.prototype.getCorners = function(a, b, c, d, e, f, g, h){
          var l = this.lowerBound,
              u = this.upperBound;

          a.copy(l);
          b.set( u.x, l.y, l.z );
          c.set( u.x, u.y, l.z );
          d.set( l.x, u.y, u.z );
          e.set( u.x, l.y, u.z );
          f.set( l.x, u.y, l.z );
          g.set( l.x, l.y, u.z );
          h.copy(u);
      };

      var transformIntoFrame_corners = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
      ];

      /**
       * Get the representation of an AABB in another frame.
       * @method toLocalFrame
       * @param  {Transform} frame
       * @param  {AABB} target
       * @return {AABB} The "target" AABB object.
       */
      AABB.prototype.toLocalFrame = function(frame, target){

          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];

          // Get corners in current frame
          this.getCorners(a, b, c, d, e, f, g, h);

          // Transform them to new local frame
          for(var i=0; i !== 8; i++){
              var corner = corners[i];
              frame.pointToLocal(corner, corner);
          }

          return target.setFromPoints(corners);
      };

      /**
       * Get the representation of an AABB in the global frame.
       * @method toWorldFrame
       * @param  {Transform} frame
       * @param  {AABB} target
       * @return {AABB} The "target" AABB object.
       */
      AABB.prototype.toWorldFrame = function(frame, target){

          var corners = transformIntoFrame_corners;
          var a = corners[0];
          var b = corners[1];
          var c = corners[2];
          var d = corners[3];
          var e = corners[4];
          var f = corners[5];
          var g = corners[6];
          var h = corners[7];

          // Get corners in current frame
          this.getCorners(a, b, c, d, e, f, g, h);

          // Transform them to new local frame
          for(var i=0; i !== 8; i++){
              var corner = corners[i];
              frame.pointToWorld(corner, corner);
          }

          return target.setFromPoints(corners);
      };

      /**
       * Check if the AABB is hit by a ray.
       * @param  {Ray} ray
       * @return {number}
       */
      AABB.prototype.overlapsRay = function(ray){

          // ray.direction is unit direction vector of ray
          var dirFracX = 1 / ray._direction.x;
          var dirFracY = 1 / ray._direction.y;
          var dirFracZ = 1 / ray._direction.z;

          // this.lowerBound is the corner of AABB with minimal coordinates - left bottom, rt is maximal corner
          var t1 = (this.lowerBound.x - ray.from.x) * dirFracX;
          var t2 = (this.upperBound.x - ray.from.x) * dirFracX;
          var t3 = (this.lowerBound.y - ray.from.y) * dirFracY;
          var t4 = (this.upperBound.y - ray.from.y) * dirFracY;
          var t5 = (this.lowerBound.z - ray.from.z) * dirFracZ;
          var t6 = (this.upperBound.z - ray.from.z) * dirFracZ;

          // var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));
          // var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));
          var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)), Math.min(t5, t6));
          var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)), Math.max(t5, t6));

          // if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behing us
          if (tmax < 0){
              //t = tmax;
              return false;
          }

          // if tmin > tmax, ray doesn't intersect AABB
          if (tmin > tmax){
              //t = tmax;
              return false;
          }

          return true;
      };
      },{"../math/Vec3":31,"../utils/Utils":54}],4:[function(_dereq_,module,exports){
      module.exports = ArrayCollisionMatrix;

      /**
       * Collision "matrix". It's actually a triangular-shaped array of whether two bodies are touching this step, for reference next step
       * @class ArrayCollisionMatrix
       * @constructor
       */
      function ArrayCollisionMatrix() {

          /**
           * The matrix storage
           * @property matrix
           * @type {Array}
           */
          this.matrix = [];
      }

      /**
       * Get an element
       * @method get
       * @param  {Number} i
       * @param  {Number} j
       * @return {Number}
       */
      ArrayCollisionMatrix.prototype.get = function(i, j) {
          i = i.index;
          j = j.index;
          if (j > i) {
              var temp = j;
              j = i;
              i = temp;
          }
          return this.matrix[(i*(i + 1)>>1) + j-1];
      };

      /**
       * Set an element
       * @method set
       * @param {Number} i
       * @param {Number} j
       * @param {Number} value
       */
      ArrayCollisionMatrix.prototype.set = function(i, j, value) {
          i = i.index;
          j = j.index;
          if (j > i) {
              var temp = j;
              j = i;
              i = temp;
          }
          this.matrix[(i*(i + 1)>>1) + j-1] = value ? 1 : 0;
      };

      /**
       * Sets all elements to zero
       * @method reset
       */
      ArrayCollisionMatrix.prototype.reset = function() {
          for (var i=0, l=this.matrix.length; i!==l; i++) {
              this.matrix[i]=0;
          }
      };

      /**
       * Sets the max number of objects
       * @method setNumObjects
       * @param {Number} n
       */
      ArrayCollisionMatrix.prototype.setNumObjects = function(n) {
          this.matrix.length = n*(n-1)>>1;
      };

      },{}],5:[function(_dereq_,module,exports){
      var Body = _dereq_('../objects/Body');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      _dereq_('../shapes/Shape');
      _dereq_('../shapes/Plane');

      module.exports = Broadphase;

      /**
       * Base class for broadphase implementations
       * @class Broadphase
       * @constructor
       * @author schteppe
       */
      function Broadphase(){
          /**
          * The world to search for collisions in.
          * @property world
          * @type {World}
          */
          this.world = null;

          /**
           * If set to true, the broadphase uses bounding boxes for intersection test, else it uses bounding spheres.
           * @property useBoundingBoxes
           * @type {Boolean}
           */
          this.useBoundingBoxes = false;

          /**
           * Set to true if the objects in the world moved.
           * @property {Boolean} dirty
           */
          this.dirty = true;
      }

      /**
       * Get the collision pairs from the world
       * @method collisionPairs
       * @param {World} world The world to search in
       * @param {Array} p1 Empty array to be filled with body objects
       * @param {Array} p2 Empty array to be filled with body objects
       */
      Broadphase.prototype.collisionPairs = function(world,p1,p2){
          throw new Error("collisionPairs not implemented for this BroadPhase class!");
      };

      /**
       * Check if a body pair needs to be intersection tested at all.
       * @method needBroadphaseCollision
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @return {bool}
       */
      Broadphase.prototype.needBroadphaseCollision = function(bodyA,bodyB){

          // Check collision filter masks
          if( (bodyA.collisionFilterGroup & bodyB.collisionFilterMask)===0 || (bodyB.collisionFilterGroup & bodyA.collisionFilterMask)===0){
              return false;
          }

          var isSA = (bodyA.type & Body.STATIC)!==0;
          var isSB = (bodyB.type & Body.STATIC)!==0;

          // s - s
          if(isSA && isSB) return false;

          // Check has trigger
          if(bodyA.hasTrigger || bodyB.hasTrigger){
              return true;
          } else {
              // Check sleep state
              if((bodyA.sleepState === Body.SLEEPING) &&
                 (bodyB.sleepState === Body.SLEEPING)) {
                  // Both bodies are static or sleeping. Skip.
                  return false;
              }
          }

          return true;
      };

      /**
       * Check if the bounding volumes of two bodies intersect.
       * @method intersectionTest
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {array} pairs1
       * @param {array} pairs2
        */
      Broadphase.prototype.intersectionTest = function(bodyA, bodyB, pairs1, pairs2){
          if(this.useBoundingBoxes){
              this.doBoundingBoxBroadphase(bodyA,bodyB,pairs1,pairs2);
          } else {
              this.doBoundingSphereBroadphase(bodyA,bodyB,pairs1,pairs2);
          }
      };

      /**
       * Check if the bounding spheres of two bodies are intersecting.
       * @method doBoundingSphereBroadphase
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Array} pairs1 bodyA is appended to this array if intersection
       * @param {Array} pairs2 bodyB is appended to this array if intersection
       */
      var Broadphase_collisionPairs_r = new Vec3(); // Temp objects
          new Vec3();
          new Quaternion();
          new Vec3();
      Broadphase.prototype.doBoundingSphereBroadphase = function(bodyA,bodyB,pairs1,pairs2){
          var r = Broadphase_collisionPairs_r;
          bodyB.position.vsub(bodyA.position,r);
          var boundingRadiusSum2 = Math.pow(bodyA.boundingRadius + bodyB.boundingRadius, 2);
          var norm2 = r.norm2();
          if(norm2 < boundingRadiusSum2){
              pairs1.push(bodyA);
              pairs2.push(bodyB);
          }
      };

      /**
       * Check if the bounding boxes of two bodies are intersecting.
       * @method doBoundingBoxBroadphase
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Array} pairs1
       * @param {Array} pairs2
       */
      Broadphase.prototype.doBoundingBoxBroadphase = function(bodyA,bodyB,pairs1,pairs2){
          if(bodyA.aabbNeedsUpdate){
              bodyA.computeAABB();
          }
          if(bodyB.aabbNeedsUpdate){
              bodyB.computeAABB();
          }

          // Check AABB / AABB
          if(bodyA.aabb.overlaps(bodyB.aabb)){
              pairs1.push(bodyA);
              pairs2.push(bodyB);
          }
      };

      /**
       * Removes duplicate pairs from the pair arrays.
       * @method makePairsUnique
       * @param {Array} pairs1
       * @param {Array} pairs2
       */
      var Broadphase_makePairsUnique_temp = { keys:[] },
          Broadphase_makePairsUnique_p1 = [],
          Broadphase_makePairsUnique_p2 = [];
      Broadphase.prototype.makePairsUnique = function(pairs1,pairs2){
          var t = Broadphase_makePairsUnique_temp,
              p1 = Broadphase_makePairsUnique_p1,
              p2 = Broadphase_makePairsUnique_p2,
              N = pairs1.length;

          for(var i=0; i!==N; i++){
              p1[i] = pairs1[i];
              p2[i] = pairs2[i];
          }

          pairs1.length = 0;
          pairs2.length = 0;

          for(var i=0; i!==N; i++){
              var id1 = p1[i].id,
                  id2 = p2[i].id;
              var key = id1 < id2 ? id1+","+id2 :  id2+","+id1;
              t[key] = i;
              t.keys.push(key);
          }

          for(var i=0; i!==t.keys.length; i++){
              var key = t.keys.pop(),
                  pairIndex = t[key];
              pairs1.push(p1[pairIndex]);
              pairs2.push(p2[pairIndex]);
              delete t[key];
          }
      };

      /**
       * To be implemented by subcasses
       * @method setWorld
       * @param {World} world
       */
      Broadphase.prototype.setWorld = function(world){
      };

      /**
       * Check if the bounding spheres of two bodies overlap.
       * @method boundingSphereCheck
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @return {boolean}
       */
      var bsc_dist = new Vec3();
      Broadphase.boundingSphereCheck = function(bodyA,bodyB){
          var dist = bsc_dist;
          bodyA.position.vsub(bodyB.position,dist);
          return Math.pow(bodyA.shape.boundingSphereRadius + bodyB.shape.boundingSphereRadius,2) > dist.norm2();
      };

      /**
       * Returns all the bodies within the AABB.
       * @method aabbQuery
       * @param  {World} world
       * @param  {AABB} aabb
       * @param  {array} result An array to store resulting bodies in.
       * @return {array}
       */
      Broadphase.prototype.aabbQuery = function(world, aabb, result){
          console.warn('.aabbQuery is not implemented in this Broadphase subclass.');
          return [];
      };
      },{"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Plane":43,"../shapes/Shape":44}],6:[function(_dereq_,module,exports){
      module.exports = GridBroadphase;

      var Broadphase = _dereq_('./Broadphase');
      var Vec3 = _dereq_('../math/Vec3');
      var Shape = _dereq_('../shapes/Shape');

      /**
       * Axis aligned uniform grid broadphase.
       * @class GridBroadphase
       * @constructor
       * @extends Broadphase
       * @todo Needs support for more than just planes and spheres.
       * @param {Vec3} aabbMin
       * @param {Vec3} aabbMax
       * @param {Number} nx Number of boxes along x
       * @param {Number} ny Number of boxes along y
       * @param {Number} nz Number of boxes along z
       */
      function GridBroadphase(aabbMin,aabbMax,nx,ny,nz){
          Broadphase.apply(this);
          this.nx = nx || 10;
          this.ny = ny || 10;
          this.nz = nz || 10;
          this.aabbMin = aabbMin || new Vec3(100,100,100);
          this.aabbMax = aabbMax || new Vec3(-100,-100,-100);
      	var nbins = this.nx * this.ny * this.nz;
      	if (nbins <= 0) {
      		throw "GridBroadphase: Each dimension's n must be >0";
      	}
          this.bins = [];
      	this.binLengths = []; //Rather than continually resizing arrays (thrashing the memory), just record length and allow them to grow
      	this.bins.length = nbins;
      	this.binLengths.length = nbins;
      	for (var i=0;i<nbins;i++) {
      		this.bins[i]=[];
      		this.binLengths[i]=0;
      	}
      }
      GridBroadphase.prototype = new Broadphase();
      GridBroadphase.prototype.constructor = GridBroadphase;

      /**
       * Get all the collision pairs in the physics world
       * @method collisionPairs
       * @param {World} world
       * @param {Array} pairs1
       * @param {Array} pairs2
       */
      var GridBroadphase_collisionPairs_d = new Vec3();
      new Vec3();
      GridBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
          var N = world.numObjects(),
              bodies = world.bodies;

          var max = this.aabbMax,
              min = this.aabbMin,
              nx = this.nx,
              ny = this.ny,
              nz = this.nz;

      	var xstep = ny*nz;
      	var ystep = nz;
      	var zstep = 1;

          var xmax = max.x,
              ymax = max.y,
              zmax = max.z,
              xmin = min.x,
              ymin = min.y,
              zmin = min.z;

          var xmult = nx / (xmax-xmin),
              ymult = ny / (ymax-ymin),
              zmult = nz / (zmax-zmin);

          var binsizeX = (xmax - xmin) / nx,
              binsizeY = (ymax - ymin) / ny,
              binsizeZ = (zmax - zmin) / nz;

      	var binRadius = Math.sqrt(binsizeX*binsizeX + binsizeY*binsizeY + binsizeZ*binsizeZ) * 0.5;

          var types = Shape.types;
          var SPHERE =            types.SPHERE,
              PLANE =             types.PLANE;
              types.BOX;
              types.COMPOUND;
              types.CONVEXPOLYHEDRON;

          var bins=this.bins,
      		binLengths=this.binLengths,
              Nbins=this.bins.length;

          // Reset bins
          for(var i=0; i!==Nbins; i++){
              binLengths[i] = 0;
          }

          var ceil = Math.ceil;
      	var min = Math.min;
      	var max = Math.max;

      	function addBoxToBins(x0,y0,z0,x1,y1,z1,bi) {
      		var xoff0 = ((x0 - xmin) * xmult)|0,
      			yoff0 = ((y0 - ymin) * ymult)|0,
      			zoff0 = ((z0 - zmin) * zmult)|0,
      			xoff1 = ceil((x1 - xmin) * xmult),
      			yoff1 = ceil((y1 - ymin) * ymult),
      			zoff1 = ceil((z1 - zmin) * zmult);

      		if (xoff0 < 0) { xoff0 = 0; } else if (xoff0 >= nx) { xoff0 = nx - 1; }
      		if (yoff0 < 0) { yoff0 = 0; } else if (yoff0 >= ny) { yoff0 = ny - 1; }
      		if (zoff0 < 0) { zoff0 = 0; } else if (zoff0 >= nz) { zoff0 = nz - 1; }
      		if (xoff1 < 0) { xoff1 = 0; } else if (xoff1 >= nx) { xoff1 = nx - 1; }
      		if (yoff1 < 0) { yoff1 = 0; } else if (yoff1 >= ny) { yoff1 = ny - 1; }
      		if (zoff1 < 0) { zoff1 = 0; } else if (zoff1 >= nz) { zoff1 = nz - 1; }

      		xoff0 *= xstep;
      		yoff0 *= ystep;
      		zoff0 *= zstep;
      		xoff1 *= xstep;
      		yoff1 *= ystep;
      		zoff1 *= zstep;

      		for (var xoff = xoff0; xoff <= xoff1; xoff += xstep) {
      			for (var yoff = yoff0; yoff <= yoff1; yoff += ystep) {
      				for (var zoff = zoff0; zoff <= zoff1; zoff += zstep) {
      					var idx = xoff+yoff+zoff;
      					bins[idx][binLengths[idx]++] = bi;
      				}
      			}
      		}
      	}

          // Put all bodies into the bins
          for(var i=0; i!==N; i++){
              var bi = bodies[i];
              var si = bi.shape;

              switch(si.type){
              case SPHERE:
                  // Put in bin
                  // check if overlap with other bins
                  var x = bi.position.x,
                      y = bi.position.y,
                      z = bi.position.z;
                  var r = si.radius;

      			addBoxToBins(x-r, y-r, z-r, x+r, y+r, z+r, bi);
                  break;

              case PLANE:
                  if(si.worldNormalNeedsUpdate){
                      si.computeWorldNormal(bi.quaternion);
                  }
                  var planeNormal = si.worldNormal;

      			//Relative position from origin of plane object to the first bin
      			//Incremented as we iterate through the bins
      			var xreset = xmin + binsizeX*0.5 - bi.position.x,
      				yreset = ymin + binsizeY*0.5 - bi.position.y,
      				zreset = zmin + binsizeZ*0.5 - bi.position.z;

                  var d = GridBroadphase_collisionPairs_d;
      			d.set(xreset, yreset, zreset);

      			for (var xi = 0, xoff = 0; xi !== nx; xi++, xoff += xstep, d.y = yreset, d.x += binsizeX) {
      				for (var yi = 0, yoff = 0; yi !== ny; yi++, yoff += ystep, d.z = zreset, d.y += binsizeY) {
      					for (var zi = 0, zoff = 0; zi !== nz; zi++, zoff += zstep, d.z += binsizeZ) {
      						if (d.dot(planeNormal) < binRadius) {
      							var idx = xoff + yoff + zoff;
      							bins[idx][binLengths[idx]++] = bi;
      						}
      					}
      				}
      			}
                  break;

              default:
      			if (bi.aabbNeedsUpdate) {
      				bi.computeAABB();
      			}

      			addBoxToBins(
      				bi.aabb.lowerBound.x,
      				bi.aabb.lowerBound.y,
      				bi.aabb.lowerBound.z,
      				bi.aabb.upperBound.x,
      				bi.aabb.upperBound.y,
      				bi.aabb.upperBound.z,
      				bi);
                  break;
              }
          }

          // Check each bin
          for(var i=0; i!==Nbins; i++){
      		var binLength = binLengths[i];
      		//Skip bins with no potential collisions
      		if (binLength > 1) {
      			var bin = bins[i];

      			// Do N^2 broadphase inside
      			for(var xi=0; xi!==binLength; xi++){
      				var bi = bin[xi];
      				for(var yi=0; yi!==xi; yi++){
      					var bj = bin[yi];
      					if(this.needBroadphaseCollision(bi,bj)){
      						this.intersectionTest(bi,bj,pairs1,pairs2);
      					}
      				}
      			}
      		}
          }

      //	for (var zi = 0, zoff=0; zi < nz; zi++, zoff+= zstep) {
      //		console.log("layer "+zi);
      //		for (var yi = 0, yoff=0; yi < ny; yi++, yoff += ystep) {
      //			var row = '';
      //			for (var xi = 0, xoff=0; xi < nx; xi++, xoff += xstep) {
      //				var idx = xoff + yoff + zoff;
      //				row += ' ' + binLengths[idx];
      //			}
      //			console.log(row);
      //		}
      //	}

          this.makePairsUnique(pairs1,pairs2);
      };

      },{"../math/Vec3":31,"../shapes/Shape":44,"./Broadphase":5}],7:[function(_dereq_,module,exports){
      module.exports = NaiveBroadphase;

      var Broadphase = _dereq_('./Broadphase');
      var AABB = _dereq_('./AABB');

      /**
       * Naive broadphase implementation, used in lack of better ones.
       * @class NaiveBroadphase
       * @constructor
       * @description The naive broadphase looks at all possible pairs without restriction, therefore it has complexity N^2 (which is bad)
       * @extends Broadphase
       */
      function NaiveBroadphase(){
          Broadphase.apply(this);
      }
      NaiveBroadphase.prototype = new Broadphase();
      NaiveBroadphase.prototype.constructor = NaiveBroadphase;

      /**
       * Get all the collision pairs in the physics world
       * @method collisionPairs
       * @param {World} world
       * @param {Array} pairs1
       * @param {Array} pairs2
       */
      NaiveBroadphase.prototype.collisionPairs = function(world,pairs1,pairs2){
          var bodies = world.bodies,
              n = bodies.length,
              i,j,bi,bj;

          // Naive N^2 ftw!
          for(i=0; i!==n; i++){
              for(j=0; j!==i; j++){

                  bi = bodies[i];
                  bj = bodies[j];

                  if(!this.needBroadphaseCollision(bi,bj)){
                      continue;
                  }

                  this.intersectionTest(bi,bj,pairs1,pairs2);
              }
          }
      };

      new AABB();

      /**
       * Returns all the bodies within an AABB.
       * @method aabbQuery
       * @param  {World} world
       * @param  {AABB} aabb
       * @param {array} result An array to store resulting bodies in.
       * @return {array}
       */
      NaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){
          result = result || [];

          for(var i = 0; i < world.bodies.length; i++){
              var b = world.bodies[i];

              if(b.aabbNeedsUpdate){
                  b.computeAABB();
              }

              // Ugly hack until Body gets aabb
              if(b.aabb.overlaps(aabb)){
                  result.push(b);
              }
          }

          return result;
      };
      },{"./AABB":3,"./Broadphase":5}],8:[function(_dereq_,module,exports){
      module.exports = ObjectCollisionMatrix;

      /**
       * Records what objects are colliding with each other
       * @class ObjectCollisionMatrix
       * @constructor
       */
      function ObjectCollisionMatrix() {

          /**
           * The matrix storage
           * @property matrix
           * @type {Object}
           */
      	this.matrix = {};
      }

      /**
       * @method get
       * @param  {Number} i
       * @param  {Number} j
       * @return {Number}
       */
      ObjectCollisionMatrix.prototype.get = function(i, j) {
      	i = i.id;
      	j = j.id;
          if (j > i) {
              var temp = j;
              j = i;
              i = temp;
          }
      	return i+'-'+j in this.matrix;
      };

      /**
       * @method set
       * @param  {Number} i
       * @param  {Number} j
       * @param {Number} value
       */
      ObjectCollisionMatrix.prototype.set = function(i, j, value) {
      	i = i.id;
      	j = j.id;
          if (j > i) {
              var temp = j;
              j = i;
              i = temp;
      	}
      	if (value) {
      		this.matrix[i+'-'+j] = true;
      	}
      	else {
      		delete this.matrix[i+'-'+j];
      	}
      };

      /**
       * Empty the matrix
       * @method reset
       */
      ObjectCollisionMatrix.prototype.reset = function() {
      	this.matrix = {};
      };

      /**
       * Set max number of objects
       * @method setNumObjects
       * @param {Number} n
       */
      ObjectCollisionMatrix.prototype.setNumObjects = function(n) {
      };

      },{}],9:[function(_dereq_,module,exports){
      module.exports = OverlapKeeper;

      /**
       * @class OverlapKeeper
       * @constructor
       */
      function OverlapKeeper() {
          this.current = [];
          this.previous = [];
      }

      OverlapKeeper.prototype.getKey = function(i, j) {
          if (j < i) {
              var temp = j;
              j = i;
              i = temp;
          }
          return (i << 16) | j;
      };


      /**
       * @method set
       * @param {Number} i
       * @param {Number} j
       */
      OverlapKeeper.prototype.set = function(i, j) {
          // Insertion sort. This way the diff will have linear complexity.
          var key = this.getKey(i, j);
          var current = this.current;
          var index = 0;
          while(key > current[index]){
              index++;
          }
          if(key === current[index]){
              return; // Pair was already added
          }
          for(var j=current.length-1; j>=index; j--){
              current[j + 1] = current[j];
          }
          current[index] = key;
      };

      /**
       * @method tick
       */
      OverlapKeeper.prototype.tick = function() {
          var tmp = this.current;
          this.current = this.previous;
          this.previous = tmp;
          this.current.length = 0;
      };

      function unpackAndPush(array, key){
          array.push((key & 0xFFFF0000) >> 16, key & 0x0000FFFF);
      }

      /**
       * @method getDiff
       * @param  {array} additions
       * @param  {array} removals
       */
      OverlapKeeper.prototype.getDiff = function(additions, removals) {
          var a = this.current;
          var b = this.previous;
          var al = a.length;
          var bl = b.length;

          var j=0;
          for (var i = 0; i < al; i++) {
              var found = false;
              var keyA = a[i];
              while(keyA > b[j]){
                  j++;
              }
              found = keyA === b[j];

              if(!found){
                  unpackAndPush(additions, keyA);
              }
          }
          j = 0;
          for (var i = 0; i < bl; i++) {
              var found = false;
              var keyB = b[i];
              while(keyB > a[j]){
                  j++;
              }
              found = a[j] === keyB;

              if(!found){
                  unpackAndPush(removals, keyB);
              }
          }
      };
      },{}],10:[function(_dereq_,module,exports){
      module.exports = Ray;

      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');
      _dereq_('../shapes/ConvexPolyhedron');
      _dereq_('../shapes/Box');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var Shape = _dereq_('../shapes/Shape');
      var AABB = _dereq_('../collision/AABB');

      /**
       * A line in 3D space that intersects bodies and return points.
       * @class Ray
       * @constructor
       * @param {Vec3} from
       * @param {Vec3} to
       */
      function Ray(from, to){
          /**
           * @property {Vec3} from
           */
          this.from = from ? from.clone() : new Vec3();

          /**
           * @property {Vec3} to
           */
          this.to = to ? to.clone() : new Vec3();

          /**
           * @private
           * @property {Vec3} _direction
           */
          this._direction = new Vec3();

          /**
           * The precision of the ray. Used when checking parallelity etc.
           * @property {Number} precision
           */
          this.precision = 0.0001;

          /**
           * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.
           * @property {Boolean} checkCollisionResponse
           */
          this.checkCollisionResponse = true;

          /**
           * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.
           * @property {Boolean} skipBackfaces
           */
          this.skipBackfaces = false;

          /**
           * @property {number} collisionFilterMask
           * @default -1
           */
          this.collisionFilterMask = -1;

          /**
           * @property {number} collisionFilterGroup
           * @default -1
           */
          this.collisionFilterGroup = -1;

          /**
           * The intersection mode. Should be Ray.ANY, Ray.ALL or Ray.CLOSEST.
           * @property {number} mode
           */
          this.mode = Ray.ANY;

          /**
           * Current result object.
           * @property {RaycastResult} result
           */
          this.result = new RaycastResult();

          /**
           * Will be set to true during intersectWorld() if the ray hit anything.
           * @property {Boolean} hasHit
           */
          this.hasHit = false;

          /**
           * Current, user-provided result callback. Will be used if mode is Ray.ALL.
           * @property {Function} callback
           */
          this.callback = function(result){};
      }
      Ray.prototype.constructor = Ray;

      Ray.CLOSEST = 1;
      Ray.ANY = 2;
      Ray.ALL = 4;

      var tmpAABB = new AABB();
      var tmpArray = [];

      /**
       * Do itersection against all bodies in the given World.
       * @method intersectWorld
       * @param  {World} world
       * @param  {object} options
       * @return {Boolean} True if the ray hit anything, otherwise false.
       */
      Ray.prototype.intersectWorld = function (world, options) {
          this.mode = options.mode || Ray.ANY;
          this.result = options.result || new RaycastResult();
          this.skipBackfaces = !!options.skipBackfaces;
          this.checkCollisionResponse = !!options.checkCollisionResponse;
          this.collisionFilterMask = typeof(options.collisionFilterMask) !== 'undefined' ? options.collisionFilterMask : -1;
          this.collisionFilterGroup = typeof(options.collisionFilterGroup) !== 'undefined' ? options.collisionFilterGroup : -1;
          if(options.from){
              this.from.copy(options.from);
          }
          if(options.to){
              this.to.copy(options.to);
          }
          this.callback = options.callback || function(){};
          this.hasHit = false;

          this.result.reset();
          this._updateDirection();

          this.getAABB(tmpAABB);
          tmpArray.length = 0;
          world.broadphase.aabbQuery(world, tmpAABB, tmpArray);
          this.intersectBodies(tmpArray);

          return this.hasHit;
      };

      var v1 = new Vec3(),
          v2 = new Vec3();

      /*
       * As per "Barycentric Technique" as named here http://www.blackpawn.com/texts/pointinpoly/default.html But without the division
       */
      Ray.pointInTriangle = pointInTriangle;
      function pointInTriangle(p, a, b, c) {
          c.vsub(a,v0);
          b.vsub(a,v1);
          p.vsub(a,v2);

          var dot00 = v0.dot( v0 );
          var dot01 = v0.dot( v1 );
          var dot02 = v0.dot( v2 );
          var dot11 = v1.dot( v1 );
          var dot12 = v1.dot( v2 );

          var u,v;

          return  ( (u = dot11 * dot02 - dot01 * dot12) >= 0 ) &&
                  ( (v = dot00 * dot12 - dot01 * dot02) >= 0 ) &&
                  ( u + v < ( dot00 * dot11 - dot01 * dot01 ) );
      }

      /**
       * Shoot a ray at a body, get back information about the hit.
       * @method intersectBody
       * @private
       * @param {Body} body
       * @param {RaycastResult} [result] Deprecated - set the result property of the Ray instead.
       */
      var intersectBody_xi = new Vec3();
      var intersectBody_qi = new Quaternion();
      Ray.prototype.intersectBody = function (body, result) {
          if(result){
              this.result = result;
              this._updateDirection();
          }
          var checkCollisionResponse = this.checkCollisionResponse;

          if(checkCollisionResponse && !body.collisionResponse){
              return;
          }

          if (!Ray.perBodyFilter(this, body)) return;

          var xi = intersectBody_xi;
          var qi = intersectBody_qi;

          for (var i = 0, N = body.shapes.length; i < N; i++) {
              var shape = body.shapes[i];

              if (!Ray.perShapeFilter(this, shape)) continue;

              body.quaternion.mult(body.shapeOrientations[i], qi);
              body.quaternion.vmult(body.shapeOffsets[i], xi);
              xi.vadd(body.position, xi);

              this.intersectShape(
                  shape,
                  qi,
                  xi,
                  body
              );

              if(this.result._shouldStop){
                  break;
              }
          }
      };

      /**
       * @method intersectBodies
       * @param {Array} bodies An array of Body objects.
       * @param {RaycastResult} [result] Deprecated
       */
      Ray.prototype.intersectBodies = function (bodies, result) {
          if(result){
              this.result = result;
              this._updateDirection();
          }

          for ( var i = 0, l = bodies.length; !this.result._shouldStop && i < l; i ++ ) {
              this.intersectBody(bodies[i]);
          }
      };

      /**
       * Updates the _direction vector.
       * @private
       * @method _updateDirection
       */
      Ray.prototype._updateDirection = function(){
          this.to.vsub(this.from, this._direction);
          this._direction.normalize();
      };

      /**
       * @method intersectShape
       * @private
       * @param {Shape} shape
       * @param {Quaternion} quat
       * @param {Vec3} position
       * @param {Body} body
       */
      Ray.prototype.intersectShape = function(shape, quat, position, body){
          var from = this.from;


          // Checking boundingSphere
          var distance = distanceFromIntersection(from, this._direction, position);
          if ( distance > shape.boundingSphereRadius ) {
              return;
          }

          var intersectMethod = this[shape.type];
          if(intersectMethod){
              intersectMethod.call(this, shape, quat, position, body, shape);
          }
      };

      new Vec3();
      new Vec3();
      var intersectPoint = new Vec3();

      var a = new Vec3();
      var b = new Vec3();
      var c = new Vec3();
      new Vec3();

      new RaycastResult();

      /**
       * @method intersectBox
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       */
      Ray.prototype.intersectBox = function(shape, quat, position, body, reportedShape){
          return this.intersectConvex(shape.convexPolyhedronRepresentation, quat, position, body, reportedShape);
      };
      Ray.prototype[Shape.types.BOX] = Ray.prototype.intersectBox;

      /**
       * @method intersectPlane
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       */
      Ray.prototype.intersectPlane = function(shape, quat, position, body, reportedShape){
          var from = this.from;
          var to = this.to;
          var direction = this._direction;

          // Get plane normal
          var worldNormal = new Vec3(0, 0, 1);
          quat.vmult(worldNormal, worldNormal);

          var len = new Vec3();
          from.vsub(position, len);
          var planeToFrom = len.dot(worldNormal);
          to.vsub(position, len);
          var planeToTo = len.dot(worldNormal);

          if(planeToFrom * planeToTo > 0){
              // "from" and "to" are on the same side of the plane... bail out
              return;
          }

          if(from.distanceTo(to) < planeToFrom){
              return;
          }

          var n_dot_dir = worldNormal.dot(direction);

          if (Math.abs(n_dot_dir) < this.precision) {
              // No intersection
              return;
          }

          var planePointToFrom = new Vec3();
          var dir_scaled_with_t = new Vec3();
          var hitPointWorld = new Vec3();

          from.vsub(position, planePointToFrom);
          var t = -worldNormal.dot(planePointToFrom) / n_dot_dir;
          direction.scale(t, dir_scaled_with_t);
          from.vadd(dir_scaled_with_t, hitPointWorld);

          this.reportIntersection(worldNormal, hitPointWorld, reportedShape, body, -1);
      };
      Ray.prototype[Shape.types.PLANE] = Ray.prototype.intersectPlane;

      /**
       * Get the world AABB of the ray.
       * @method getAABB
       * @param  {AABB} aabb
       */
      Ray.prototype.getAABB = function(result){
          var to = this.to;
          var from = this.from;
          result.lowerBound.x = Math.min(to.x, from.x);
          result.lowerBound.y = Math.min(to.y, from.y);
          result.lowerBound.z = Math.min(to.z, from.z);
          result.upperBound.x = Math.max(to.x, from.x);
          result.upperBound.y = Math.max(to.y, from.y);
          result.upperBound.z = Math.max(to.z, from.z);
      };

      var intersectConvexOptions = {
          faceList: [0]
      };
      var worldPillarOffset = new Vec3();
      var intersectHeightfield_localRay = new Ray();
      var intersectHeightfield_index = [];

      /**
       * @method intersectHeightfield
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       */
      Ray.prototype.intersectHeightfield = function(shape, quat, position, body, reportedShape){
          shape.data;
              shape.elementSize;

          // Convert the ray to local heightfield coordinates
          var localRay = intersectHeightfield_localRay; //new Ray(this.from, this.to);
          localRay.from.copy(this.from);
          localRay.to.copy(this.to);
          Transform.pointToLocalFrame(position, quat, localRay.from, localRay.from);
          Transform.pointToLocalFrame(position, quat, localRay.to, localRay.to);
          localRay._updateDirection();

          // Get the index of the data points to test against
          var index = intersectHeightfield_index;
          var iMinX, iMinY, iMaxX, iMaxY;

          // Set to max
          iMinX = iMinY = 0;
          iMaxX = iMaxY = shape.data.length - 1;

          var aabb = new AABB();
          localRay.getAABB(aabb);

          shape.getIndexOfPosition(aabb.lowerBound.x, aabb.lowerBound.y, index, true);
          iMinX = Math.max(iMinX, index[0]);
          iMinY = Math.max(iMinY, index[1]);
          shape.getIndexOfPosition(aabb.upperBound.x, aabb.upperBound.y, index, true);
          iMaxX = Math.min(iMaxX, index[0] + 1);
          iMaxY = Math.min(iMaxY, index[1] + 1);

          for(var i = iMinX; i < iMaxX; i++){
              for(var j = iMinY; j < iMaxY; j++){

                  if(this.result._shouldStop){
                      return;
                  }

                  shape.getAabbAtIndex(i, j, aabb);
                  if(!aabb.overlapsRay(localRay)){
                      continue;
                  }

                  // Lower triangle
                  shape.getConvexTrianglePillar(i, j, false);
                  Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
                  this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);

                  if(this.result._shouldStop){
                      return;
                  }

                  // Upper triangle
                  shape.getConvexTrianglePillar(i, j, true);
                  Transform.pointToWorldFrame(position, quat, shape.pillarOffset, worldPillarOffset);
                  this.intersectConvex(shape.pillarConvex, quat, worldPillarOffset, body, reportedShape, intersectConvexOptions);
              }
          }
      };
      Ray.prototype[Shape.types.HEIGHTFIELD] = Ray.prototype.intersectHeightfield;

      var Ray_intersectSphere_intersectionPoint = new Vec3();
      var Ray_intersectSphere_normal = new Vec3();

      /**
       * @method intersectSphere
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       */
      Ray.prototype.intersectSphere = function(shape, quat, position, body, reportedShape){
          var from = this.from,
              to = this.to,
              r = shape.radius;

          var a = Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2) + Math.pow(to.z - from.z, 2);
          var b = 2 * ((to.x - from.x) * (from.x - position.x) + (to.y - from.y) * (from.y - position.y) + (to.z - from.z) * (from.z - position.z));
          var c = Math.pow(from.x - position.x, 2) + Math.pow(from.y - position.y, 2) + Math.pow(from.z - position.z, 2) - Math.pow(r, 2);

          var delta = Math.pow(b, 2) - 4 * a * c;

          var intersectionPoint = Ray_intersectSphere_intersectionPoint;
          var normal = Ray_intersectSphere_normal;

          if(delta < 0){
              // No intersection
              return;

          } else if(delta === 0){
              // single intersection point
              from.lerp(to, delta, intersectionPoint);

              intersectionPoint.vsub(position, normal);
              normal.normalize();

              this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);

          } else {
              var d1 = (- b - Math.sqrt(delta)) / (2 * a);
              var d2 = (- b + Math.sqrt(delta)) / (2 * a);

              if(d1 >= 0 && d1 <= 1){
                  from.lerp(to, d1, intersectionPoint);
                  intersectionPoint.vsub(position, normal);
                  normal.normalize();
                  this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
              }

              if(this.result._shouldStop){
                  return;
              }

              if(d2 >= 0 && d2 <= 1){
                  from.lerp(to, d2, intersectionPoint);
                  intersectionPoint.vsub(position, normal);
                  normal.normalize();
                  this.reportIntersection(normal, intersectionPoint, reportedShape, body, -1);
              }
          }
      };
      Ray.prototype[Shape.types.SPHERE] = Ray.prototype.intersectSphere;


      var intersectConvex_normal = new Vec3();
      new Vec3();
      new Vec3();
      var intersectConvex_vector = new Vec3();

      /**
       * @method intersectConvex
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       * @param {object} [options]
       * @param {array} [options.faceList]
       */
      Ray.prototype.intersectConvex = function intersectConvex(
          shape,
          quat,
          position,
          body,
          reportedShape,
          options
      ){
          var normal = intersectConvex_normal;
          var vector = intersectConvex_vector;
          var faceList = (options && options.faceList) || null;

          // Checking faces
          var faces = shape.faces,
              vertices = shape.vertices,
              normals = shape.faceNormals;
          var direction = this._direction;

          var from = this.from;
          var to = this.to;
          var fromToDistance = from.distanceTo(to);
          var Nfaces = faceList ? faceList.length : faces.length;
          var result = this.result;

          for (var j = 0; !result._shouldStop && j < Nfaces; j++) {
              var fi = faceList ? faceList[j] : j;

              var face = faces[fi];
              var faceNormal = normals[fi];
              var q = quat;
              var x = position;

              // determine if ray intersects the plane of the face
              // note: this works regardless of the direction of the face normal

              // Get plane point in world coordinates...
              vector.copy(vertices[face[0]]);
              q.vmult(vector,vector);
              vector.vadd(x,vector);

              // ...but make it relative to the ray from. We'll fix this later.
              vector.vsub(from,vector);

              // Get plane normal
              q.vmult(faceNormal,normal);

              // If this dot product is negative, we have something interesting
              var dot = direction.dot(normal);

              // Bail out if ray and plane are parallel
              if ( Math.abs( dot ) < this.precision ){
                  continue;
              }

              // calc distance to plane
              var scalar = normal.dot(vector) / dot;

              // if negative distance, then plane is behind ray
              if (scalar < 0){
                  continue;
              }

              // if (dot < 0) {

              // Intersection point is from + direction * scalar
              direction.mult(scalar,intersectPoint);
              intersectPoint.vadd(from,intersectPoint);

              // a is the point we compare points b and c with.
              a.copy(vertices[face[0]]);
              q.vmult(a,a);
              x.vadd(a,a);

              for(var i = 1; !result._shouldStop && i < face.length - 1; i++){
                  // Transform 3 vertices to world coords
                  b.copy(vertices[face[i]]);
                  c.copy(vertices[face[i+1]]);
                  q.vmult(b,b);
                  q.vmult(c,c);
                  x.vadd(b,b);
                  x.vadd(c,c);

                  var distance = intersectPoint.distanceTo(from);

                  if(!(pointInTriangle(intersectPoint, a, b, c) || pointInTriangle(intersectPoint, b, a, c)) || distance > fromToDistance){
                      continue;
                  }

                  this.reportIntersection(normal, intersectPoint, reportedShape, body, fi);
              }
              // }
          }
      };
      Ray.prototype[Shape.types.CONVEXPOLYHEDRON] = Ray.prototype.intersectConvex;

      var intersectTrimesh_normal = new Vec3();
      var intersectTrimesh_localDirection = new Vec3();
      var intersectTrimesh_localFrom = new Vec3();
      var intersectTrimesh_localTo = new Vec3();
      var intersectTrimesh_worldNormal = new Vec3();
      var intersectTrimesh_worldIntersectPoint = new Vec3();
      new AABB();
      var intersectTrimesh_triangles = [];
      var intersectTrimesh_treeTransform = new Transform();

      /**
       * @method intersectTrimesh
       * @private
       * @param  {Shape} shape
       * @param  {Quaternion} quat
       * @param  {Vec3} position
       * @param  {Body} body
       * @param {object} [options]
       * @todo Optimize by transforming the world to local space first.
       * @todo Use Octree lookup
       */
      Ray.prototype.intersectTrimesh = function intersectTrimesh(
          mesh,
          quat,
          position,
          body,
          reportedShape,
          options
      ){
          var normal = intersectTrimesh_normal;
          var triangles = intersectTrimesh_triangles;
          var treeTransform = intersectTrimesh_treeTransform;
          var vector = intersectConvex_vector;
          var localDirection = intersectTrimesh_localDirection;
          var localFrom = intersectTrimesh_localFrom;
          var localTo = intersectTrimesh_localTo;
          var worldIntersectPoint = intersectTrimesh_worldIntersectPoint;
          var worldNormal = intersectTrimesh_worldNormal;
          (options && options.faceList) || null;

          // Checking faces
          var indices = mesh.indices;
              mesh.vertices;
              mesh.faceNormals;

          var from = this.from;
          var to = this.to;
          var direction = this._direction;
          treeTransform.position.copy(position);
          treeTransform.quaternion.copy(quat);

          // Transform ray to local space!
          Transform.vectorToLocalFrame(position, quat, direction, localDirection);
          Transform.pointToLocalFrame(position, quat, from, localFrom);
          Transform.pointToLocalFrame(position, quat, to, localTo);

          localTo.x *= mesh.scale.x;
          localTo.y *= mesh.scale.y;
          localTo.z *= mesh.scale.z;
          localFrom.x *= mesh.scale.x;
          localFrom.y *= mesh.scale.y;
          localFrom.z *= mesh.scale.z;

          localTo.vsub(localFrom, localDirection);
          localDirection.normalize();

          var fromToDistanceSquared = localFrom.distanceSquared(localTo);

          mesh.tree.rayQuery(this, treeTransform, triangles);

          for (var i = 0, N = triangles.length; !this.result._shouldStop && i !== N; i++) {
              var trianglesIndex = triangles[i];

              mesh.getNormal(trianglesIndex, normal);

              // determine if ray intersects the plane of the face
              // note: this works regardless of the direction of the face normal

              // Get plane point in world coordinates...
              mesh.getVertex(indices[trianglesIndex * 3], a);

              // ...but make it relative to the ray from. We'll fix this later.
              a.vsub(localFrom,vector);

              // If this dot product is negative, we have something interesting
              var dot = localDirection.dot(normal);

              // Bail out if ray and plane are parallel
              // if (Math.abs( dot ) < this.precision){
              //     continue;
              // }

              // calc distance to plane
              var scalar = normal.dot(vector) / dot;

              // if negative distance, then plane is behind ray
              if (scalar < 0){
                  continue;
              }

              // Intersection point is from + direction * scalar
              localDirection.scale(scalar,intersectPoint);
              intersectPoint.vadd(localFrom,intersectPoint);

              // Get triangle vertices
              mesh.getVertex(indices[trianglesIndex * 3 + 1], b);
              mesh.getVertex(indices[trianglesIndex * 3 + 2], c);

              var squaredDistance = intersectPoint.distanceSquared(localFrom);

              if(!(pointInTriangle(intersectPoint, b, a, c) || pointInTriangle(intersectPoint, a, b, c)) || squaredDistance > fromToDistanceSquared){
                  continue;
              }

              // transform intersectpoint and normal to world
              Transform.vectorToWorldFrame(quat, normal, worldNormal);
              Transform.pointToWorldFrame(position, quat, intersectPoint, worldIntersectPoint);
              this.reportIntersection(worldNormal, worldIntersectPoint, reportedShape, body, trianglesIndex);
          }
          triangles.length = 0;
      };
      Ray.prototype[Shape.types.TRIMESH] = Ray.prototype.intersectTrimesh;


      /**
       * @method reportIntersection
       * @private
       * @param  {Vec3} normal
       * @param  {Vec3} hitPointWorld
       * @param  {Shape} shape
       * @param  {Body} body
       * @return {boolean} True if the intersections should continue
       */
      Ray.prototype.reportIntersection = function(normal, hitPointWorld, shape, body, hitFaceIndex){
          var from = this.from;
          var to = this.to;
          var distance = from.distanceTo(hitPointWorld);
          var result = this.result;

          // Skip back faces?
          if(this.skipBackfaces && normal.dot(this._direction) > 0){
              return;
          }

          result.hitFaceIndex = typeof(hitFaceIndex) !== 'undefined' ? hitFaceIndex : -1;

          switch(this.mode){
          case Ray.ALL:
              this.hasHit = true;
              result.set(
                  from,
                  to,
                  normal,
                  hitPointWorld,
                  shape,
                  body,
                  distance
              );
              result.hasHit = true;
              this.callback(result);
              break;

          case Ray.CLOSEST:

              // Store if closer than current closest
              if(distance < result.distance || !result.hasHit){
                  this.hasHit = true;
                  result.hasHit = true;
                  result.set(
                      from,
                      to,
                      normal,
                      hitPointWorld,
                      shape,
                      body,
                      distance
                  );
              }
              break;

          case Ray.ANY:

              // Report and stop.
              this.hasHit = true;
              result.hasHit = true;
              result.set(
                  from,
                  to,
                  normal,
                  hitPointWorld,
                  shape,
                  body,
                  distance
              );
              result._shouldStop = true;
              break;
          }
      };

      var v0 = new Vec3(),
          intersect = new Vec3();
      function distanceFromIntersection(from, direction, position) {

          // v0 is vector from from to position
          position.vsub(from,v0);
          var dot = v0.dot(direction);

          // intersect = direction*dot + from
          direction.mult(dot,intersect);
          intersect.vadd(from,intersect);

          var distance = position.distanceTo(intersect);

          return distance;
      }


      /**
       * per ray / body filter, return false if skip
       */
      Ray.perBodyFilter = function(ray, body) {
          if((ray.collisionFilterGroup & body.collisionFilterMask)===0 || (body.collisionFilterGroup & ray.collisionFilterMask)===0){
              return false;
          }
          return true;
      };

      /**
       * per ray / shape filter, return false if skip
       */
      Ray.perShapeFilter = function(ray, shape) {    
          if(ray.checkCollisionResponse && !shape.collisionResponse){
              return false; // Skip
          }
          return true;
      };

      },{"../collision/AABB":3,"../collision/RaycastResult":11,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../shapes/Box":38,"../shapes/ConvexPolyhedron":39,"../shapes/Shape":44}],11:[function(_dereq_,module,exports){
      var Vec3 = _dereq_('../math/Vec3');

      module.exports = RaycastResult;

      /**
       * Storage for Ray casting data.
       * @class RaycastResult
       * @constructor
       */
      function RaycastResult(){

      	/**
      	 * @property {Vec3} rayFromWorld
      	 */
      	this.rayFromWorld = new Vec3();

      	/**
      	 * @property {Vec3} rayToWorld
      	 */
      	this.rayToWorld = new Vec3();

      	/**
      	 * @property {Vec3} hitNormalWorld
      	 */
      	this.hitNormalWorld = new Vec3();

      	/**
      	 * @property {Vec3} hitPointWorld
      	 */
      	this.hitPointWorld = new Vec3();

      	/**
      	 * @property {boolean} hasHit
      	 */
      	this.hasHit = false;

      	/**
      	 * The hit shape, or null.
      	 * @property {Shape} shape
      	 */
      	this.shape = null;

      	/**
      	 * The hit body, or null.
      	 * @property {Body} body
      	 */
      	this.body = null;

      	/**
      	 * The index of the hit triangle, if the hit shape was a trimesh.
      	 * @property {number} hitFaceIndex
      	 * @default -1
      	 */
      	this.hitFaceIndex = -1;

      	/**
      	 * Distance to the hit. Will be set to -1 if there was no hit.
      	 * @property {number} distance
      	 * @default -1
      	 */
      	this.distance = -1;

      	/**
      	 * If the ray should stop traversing the bodies.
      	 * @private
      	 * @property {Boolean} _shouldStop
      	 * @default false
      	 */
      	this._shouldStop = false;
      }

      /**
       * Reset all result data.
       * @method reset
       */
      RaycastResult.prototype.reset = function () {
      	this.rayFromWorld.setZero();
      	this.rayToWorld.setZero();
      	this.hitNormalWorld.setZero();
      	this.hitPointWorld.setZero();
      	this.hasHit = false;
      	this.shape = null;
      	this.body = null;
      	this.hitFaceIndex = -1;
      	this.distance = -1;
      	this._shouldStop = false;
      };

      /**
       * @method abort
       */
      RaycastResult.prototype.abort = function(){
      	this._shouldStop = true;
      };

      /**
       * @method set
       * @param {Vec3} rayFromWorld
       * @param {Vec3} rayToWorld
       * @param {Vec3} hitNormalWorld
       * @param {Vec3} hitPointWorld
       * @param {Shape} shape
       * @param {Body} body
       * @param {number} distance
       */
      RaycastResult.prototype.set = function(
      	rayFromWorld,
      	rayToWorld,
      	hitNormalWorld,
      	hitPointWorld,
      	shape,
      	body,
      	distance
      ){
      	this.rayFromWorld.copy(rayFromWorld);
      	this.rayToWorld.copy(rayToWorld);
      	this.hitNormalWorld.copy(hitNormalWorld);
      	this.hitPointWorld.copy(hitPointWorld);
      	this.shape = shape;
      	this.body = body;
      	this.distance = distance;
      };
      },{"../math/Vec3":31}],12:[function(_dereq_,module,exports){
      _dereq_('../shapes/Shape');
      var Broadphase = _dereq_('../collision/Broadphase');

      module.exports = SAPBroadphase;

      /**
       * Sweep and prune broadphase along one axis.
       *
       * @class SAPBroadphase
       * @constructor
       * @param {World} [world]
       * @extends Broadphase
       */
      function SAPBroadphase(world){
          Broadphase.apply(this);

          /**
           * List of bodies currently in the broadphase.
           * @property axisList
           * @type {Array}
           */
          this.axisList = [];

          /**
           * The world to search in.
           * @property world
           * @type {World}
           */
          this.world = null;

          /**
           * Axis to sort the bodies along. Set to 0 for x axis, and 1 for y axis. For best performance, choose an axis that the bodies are spread out more on.
           * @property axisIndex
           * @type {Number}
           */
          this.axisIndex = 0;

          var axisList = this.axisList;

          this._addBodyHandler = function(e){
              axisList.push(e.body);
          };

          this._removeBodyHandler = function(e){
              var idx = axisList.indexOf(e.body);
              if(idx !== -1){
                  axisList.splice(idx,1);
              }
          };

          if(world){
              this.setWorld(world);
          }
      }
      SAPBroadphase.prototype = new Broadphase();

      /**
       * Change the world
       * @method setWorld
       * @param  {World} world
       */
      SAPBroadphase.prototype.setWorld = function(world){
          // Clear the old axis array
          this.axisList.length = 0;

          // Add all bodies from the new world
          for(var i=0; i<world.bodies.length; i++){
              this.axisList.push(world.bodies[i]);
          }

          // Remove old handlers, if any
          world.removeEventListener("addBody", this._addBodyHandler);
          world.removeEventListener("removeBody", this._removeBodyHandler);

          // Add handlers to update the list of bodies.
          world.addEventListener("addBody", this._addBodyHandler);
          world.addEventListener("removeBody", this._removeBodyHandler);

          this.world = world;
          this.dirty = true;
      };

      /**
       * @static
       * @method insertionSortX
       * @param  {Array} a
       * @return {Array}
       */
      SAPBroadphase.insertionSortX = function(a) {
          for(var i=1,l=a.length;i<l;i++) {
              var v = a[i];
              for(var j=i - 1;j>=0;j--) {
                  if(a[j].aabb.lowerBound.x <= v.aabb.lowerBound.x){
                      break;
                  }
                  a[j+1] = a[j];
              }
              a[j+1] = v;
          }
          return a;
      };

      /**
       * @static
       * @method insertionSortY
       * @param  {Array} a
       * @return {Array}
       */
      SAPBroadphase.insertionSortY = function(a) {
          for(var i=1,l=a.length;i<l;i++) {
              var v = a[i];
              for(var j=i - 1;j>=0;j--) {
                  if(a[j].aabb.lowerBound.y <= v.aabb.lowerBound.y){
                      break;
                  }
                  a[j+1] = a[j];
              }
              a[j+1] = v;
          }
          return a;
      };

      /**
       * @static
       * @method insertionSortZ
       * @param  {Array} a
       * @return {Array}
       */
      SAPBroadphase.insertionSortZ = function(a) {
          for(var i=1,l=a.length;i<l;i++) {
              var v = a[i];
              for(var j=i - 1;j>=0;j--) {
                  if(a[j].aabb.lowerBound.z <= v.aabb.lowerBound.z){
                      break;
                  }
                  a[j+1] = a[j];
              }
              a[j+1] = v;
          }
          return a;
      };

      /**
       * Collect all collision pairs
       * @method collisionPairs
       * @param  {World} world
       * @param  {Array} p1
       * @param  {Array} p2
       */
      SAPBroadphase.prototype.collisionPairs = function(world,p1,p2){
          var bodies = this.axisList,
              N = bodies.length,
              axisIndex = this.axisIndex,
              i, j;

          if(this.dirty){
              this.sortList();
              this.dirty = false;
          }

          // Look through the list
          for(i=0; i !== N; i++){
              var bi = bodies[i];

              for(j=i+1; j < N; j++){
                  var bj = bodies[j];

                  if(!this.needBroadphaseCollision(bi,bj)){
                      continue;
                  }

                  if(!SAPBroadphase.checkBounds(bi,bj,axisIndex)){
                      break;
                  }

                  this.intersectionTest(bi,bj,p1,p2);
              }
          }
      };

      SAPBroadphase.prototype.sortList = function(){
          var axisList = this.axisList;
          var axisIndex = this.axisIndex;
          var N = axisList.length;

          // Update AABBs
          for(var i = 0; i!==N; i++){
              var bi = axisList[i];
              if(bi.aabbNeedsUpdate){
                  bi.computeAABB();
              }
          }

          // Sort the list
          if(axisIndex === 0){
              SAPBroadphase.insertionSortX(axisList);
          } else if(axisIndex === 1){
              SAPBroadphase.insertionSortY(axisList);
          } else if(axisIndex === 2){
              SAPBroadphase.insertionSortZ(axisList);
          }
      };

      /**
       * Check if the bounds of two bodies overlap, along the given SAP axis.
       * @static
       * @method checkBounds
       * @param  {Body} bi
       * @param  {Body} bj
       * @param  {Number} axisIndex
       * @return {Boolean}
       */
      SAPBroadphase.checkBounds = function(bi, bj, axisIndex){
          var biPos;
          var bjPos;

          if(axisIndex === 0){
              biPos = bi.position.x;
              bjPos = bj.position.x;
          } else if(axisIndex === 1){
              biPos = bi.position.y;
              bjPos = bj.position.y;
          } else if(axisIndex === 2){
              biPos = bi.position.z;
              bjPos = bj.position.z;
          }

          var ri = bi.boundingRadius,
              rj = bj.boundingRadius,
              boundA2 = biPos + ri,
              boundB1 = bjPos - rj;

          return boundB1 < boundA2;
      };

      /**
       * Computes the variance of the body positions and estimates the best
       * axis to use. Will automatically set property .axisIndex.
       * @method autoDetectAxis
       */
      SAPBroadphase.prototype.autoDetectAxis = function(){
          var sumX=0,
              sumX2=0,
              sumY=0,
              sumY2=0,
              sumZ=0,
              sumZ2=0,
              bodies = this.axisList,
              N = bodies.length,
              invN=1/N;

          for(var i=0; i!==N; i++){
              var b = bodies[i];

              var centerX = b.position.x;
              sumX += centerX;
              sumX2 += centerX*centerX;

              var centerY = b.position.y;
              sumY += centerY;
              sumY2 += centerY*centerY;

              var centerZ = b.position.z;
              sumZ += centerZ;
              sumZ2 += centerZ*centerZ;
          }

          var varianceX = sumX2 - sumX*sumX*invN,
              varianceY = sumY2 - sumY*sumY*invN,
              varianceZ = sumZ2 - sumZ*sumZ*invN;

          if(varianceX > varianceY){
              if(varianceX > varianceZ){
                  this.axisIndex = 0;
              } else {
                  this.axisIndex = 2;
              }
          } else if(varianceY > varianceZ){
              this.axisIndex = 1;
          } else {
              this.axisIndex = 2;
          }
      };

      /**
       * Returns all the bodies within an AABB.
       * @method aabbQuery
       * @param  {World} world
       * @param  {AABB} aabb
       * @param {array} result An array to store resulting bodies in.
       * @return {array}
       */
      SAPBroadphase.prototype.aabbQuery = function(world, aabb, result){
          result = result || [];

          if(this.dirty){
              this.sortList();
              this.dirty = false;
          }

          var axisIndex = this.axisIndex, axis = 'x';
          if(axisIndex === 1){ axis = 'y'; }
          if(axisIndex === 2){ axis = 'z'; }

          var axisList = this.axisList;
          aabb.lowerBound[axis];
          aabb.upperBound[axis];
          for(var i = 0; i < axisList.length; i++){
              var b = axisList[i];

              if(b.aabbNeedsUpdate){
                  b.computeAABB();
              }

              if(b.aabb.overlaps(aabb)){
                  result.push(b);
              }
          }

          return result;
      };
      },{"../collision/Broadphase":5,"../shapes/Shape":44}],13:[function(_dereq_,module,exports){
      module.exports = ConeTwistConstraint;

      _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var ConeEquation = _dereq_('../equations/ConeEquation');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * @class ConeTwistConstraint
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {object} [options]
       * @param {Vec3} [options.pivotA]
       * @param {Vec3} [options.pivotB]
       * @param {Vec3} [options.axisA]
       * @param {Vec3} [options.axisB]
       * @param {Number} [options.maxForce=1e6]
       * @extends PointToPointConstraint
       */
      function ConeTwistConstraint(bodyA, bodyB, options){
          options = options || {};
          var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

          // Set pivot point in between
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();
          this.axisA = options.axisA ? options.axisA.clone() : new Vec3();
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3();

          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

          this.collideConnected = !!options.collideConnected;

          this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;

          /**
           * @property {ConeEquation} coneEquation
           */
          var c = this.coneEquation = new ConeEquation(bodyA,bodyB,options);

          /**
           * @property {RotationalEquation} twistEquation
           */
          var t = this.twistEquation = new RotationalEquation(bodyA,bodyB,options);
          this.twistAngle = typeof(options.twistAngle) !== 'undefined' ? options.twistAngle : 0;

          // Make the cone equation push the bodies toward the cone axis, not outward
          c.maxForce = 0;
          c.minForce = -maxForce;

          // Make the twist equation add torque toward the initial position
          t.maxForce = 0;
          t.minForce = -maxForce;

          this.equations.push(c, t);
      }
      ConeTwistConstraint.prototype = new PointToPointConstraint();
      ConeTwistConstraint.constructor = ConeTwistConstraint;

      new Vec3();
      new Vec3();

      ConeTwistConstraint.prototype.update = function(){
          var bodyA = this.bodyA,
              bodyB = this.bodyB,
              cone = this.coneEquation,
              twist = this.twistEquation;

          PointToPointConstraint.prototype.update.call(this);

          // Update the axes to the cone constraint
          bodyA.vectorToWorldFrame(this.axisA, cone.axisA);
          bodyB.vectorToWorldFrame(this.axisB, cone.axisB);

          // Update the world axes in the twist constraint
          this.axisA.tangents(twist.axisA, twist.axisA);
          bodyA.vectorToWorldFrame(twist.axisA, twist.axisA);

          this.axisB.tangents(twist.axisB, twist.axisB);
          bodyB.vectorToWorldFrame(twist.axisB, twist.axisB);

          cone.angle = this.angle;
          twist.maxAngle = this.twistAngle;
      };


      },{"../equations/ConeEquation":19,"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],14:[function(_dereq_,module,exports){
      module.exports = Constraint;

      var Utils = _dereq_('../utils/Utils');

      /**
       * Constraint base class
       * @class Constraint
       * @author schteppe
       * @constructor
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {object} [options]
       * @param {boolean} [options.collideConnected=true]
       * @param {boolean} [options.wakeUpBodies=true]
       */
      function Constraint(bodyA, bodyB, options){
          options = Utils.defaults(options,{
              collideConnected : true,
              wakeUpBodies : true,
          });

          /**
           * Equations to be solved in this constraint
           * @property equations
           * @type {Array}
           */
          this.equations = [];

          /**
           * @property {Body} bodyA
           */
          this.bodyA = bodyA;

          /**
           * @property {Body} bodyB
           */
          this.bodyB = bodyB;

          /**
           * @property {Number} id
           */
          this.id = Constraint.idCounter++;

          /**
           * Set to true if you want the bodies to collide when they are connected.
           * @property collideConnected
           * @type {boolean}
           */
          this.collideConnected = options.collideConnected;

          if(options.wakeUpBodies){
              if(bodyA){
                  bodyA.wakeUp();
              }
              if(bodyB){
                  bodyB.wakeUp();
              }
          }
      }

      /**
       * Update all the equations with data.
       * @method update
       */
      Constraint.prototype.update = function(){
          throw new Error("method update() not implmemented in this Constraint subclass!");
      };

      /**
       * Enables all equations in the constraint.
       * @method enable
       */
      Constraint.prototype.enable = function(){
          var eqs = this.equations;
          for(var i=0; i<eqs.length; i++){
              eqs[i].enabled = true;
          }
      };

      /**
       * Disables all equations in the constraint.
       * @method disable
       */
      Constraint.prototype.disable = function(){
          var eqs = this.equations;
          for(var i=0; i<eqs.length; i++){
              eqs[i].enabled = false;
          }
      };

      Constraint.idCounter = 0;

      },{"../utils/Utils":54}],15:[function(_dereq_,module,exports){
      module.exports = DistanceConstraint;

      var Constraint = _dereq_('./Constraint');
      var ContactEquation = _dereq_('../equations/ContactEquation');

      /**
       * Constrains two bodies to be at a constant distance from each others center of mass.
       * @class DistanceConstraint
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Number} [distance] The distance to keep. If undefined, it will be set to the current distance between bodyA and bodyB
       * @param {Number} [maxForce=1e6]
       * @extends Constraint
       */
      function DistanceConstraint(bodyA,bodyB,distance,maxForce){
          Constraint.call(this,bodyA,bodyB);

          if(typeof(distance)==="undefined") {
              distance = bodyA.position.distanceTo(bodyB.position);
          }

          if(typeof(maxForce)==="undefined") {
              maxForce = 1e6;
          }

          /**
           * @property {number} distance
           */
          this.distance = distance;

          /**
           * @property {ContactEquation} distanceEquation
           */
          var eq = this.distanceEquation = new ContactEquation(bodyA, bodyB);
          this.equations.push(eq);

          // Make it bidirectional
          eq.minForce = -maxForce;
          eq.maxForce =  maxForce;
      }
      DistanceConstraint.prototype = new Constraint();

      DistanceConstraint.prototype.update = function(){
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var eq = this.distanceEquation;
          var halfDist = this.distance * 0.5;
          var normal = eq.ni;

          bodyB.position.vsub(bodyA.position, normal);
          normal.normalize();
          normal.mult(halfDist, eq.ri);
          normal.mult(-halfDist, eq.rj);
      };
      },{"../equations/ContactEquation":20,"./Constraint":14}],16:[function(_dereq_,module,exports){
      module.exports = HingeConstraint;

      _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      var RotationalMotorEquation = _dereq_('../equations/RotationalMotorEquation');
      _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * Hinge constraint. Think of it as a door hinge. It tries to keep the door in the correct place and with the correct orientation.
       * @class HingeConstraint
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {object} [options]
       * @param {Vec3} [options.pivotA] A point defined locally in bodyA. This defines the offset of axisA.
       * @param {Vec3} [options.axisA] An axis that bodyA can rotate around, defined locally in bodyA.
       * @param {Vec3} [options.pivotB]
       * @param {Vec3} [options.axisB]
       * @param {Number} [options.maxForce=1e6]
       * @extends PointToPointConstraint
       */
      function HingeConstraint(bodyA, bodyB, options){
          options = options || {};
          var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;
          var pivotA = options.pivotA ? options.pivotA.clone() : new Vec3();
          var pivotB = options.pivotB ? options.pivotB.clone() : new Vec3();

          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

          /**
           * Rotation axis, defined locally in bodyA.
           * @property {Vec3} axisA
           */
          var axisA = this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1,0,0);
          axisA.normalize();

          /**
           * Rotation axis, defined locally in bodyB.
           * @property {Vec3} axisB
           */
          var axisB = this.axisB = options.axisB ? options.axisB.clone() : new Vec3(1,0,0);
          axisB.normalize();

          /**
           * @property {RotationalEquation} rotationalEquation1
           */
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

          /**
           * @property {RotationalEquation} rotationalEquation2
           */
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

          /**
           * @property {RotationalMotorEquation} motorEquation
           */
          var motor = this.motorEquation = new RotationalMotorEquation(bodyA,bodyB,maxForce);
          motor.enabled = false; // Not enabled by default

          // Equations to be fed to the solver
          this.equations.push(
              r1, // rotational1
              r2, // rotational2
              motor
          );
      }
      HingeConstraint.prototype = new PointToPointConstraint();
      HingeConstraint.constructor = HingeConstraint;

      /**
       * @method enableMotor
       */
      HingeConstraint.prototype.enableMotor = function(){
          this.motorEquation.enabled = true;
      };

      /**
       * @method disableMotor
       */
      HingeConstraint.prototype.disableMotor = function(){
          this.motorEquation.enabled = false;
      };

      /**
       * @method setMotorSpeed
       * @param {number} speed
       */
      HingeConstraint.prototype.setMotorSpeed = function(speed){
          this.motorEquation.targetVelocity = speed;
      };

      /**
       * @method setMotorMaxForce
       * @param {number} maxForce
       */
      HingeConstraint.prototype.setMotorMaxForce = function(maxForce){
          this.motorEquation.maxForce = maxForce;
          this.motorEquation.minForce = -maxForce;
      };

      var HingeConstraint_update_tmpVec1 = new Vec3();
      var HingeConstraint_update_tmpVec2 = new Vec3();

      HingeConstraint.prototype.update = function(){
          var bodyA = this.bodyA,
              bodyB = this.bodyB,
              motor = this.motorEquation,
              r1 = this.rotationalEquation1,
              r2 = this.rotationalEquation2,
              worldAxisA = HingeConstraint_update_tmpVec1,
              worldAxisB = HingeConstraint_update_tmpVec2;

          var axisA = this.axisA;
          var axisB = this.axisB;

          PointToPointConstraint.prototype.update.call(this);

          // Get world axes
          bodyA.quaternion.vmult(axisA, worldAxisA);
          bodyB.quaternion.vmult(axisB, worldAxisB);

          worldAxisA.tangents(r1.axisA, r2.axisA);
          r1.axisB.copy(worldAxisB);
          r2.axisB.copy(worldAxisB);

          if(this.motorEquation.enabled){
              bodyA.quaternion.vmult(this.axisA, motor.axisA);
              bodyB.quaternion.vmult(this.axisB, motor.axisB);
          }
      };


      },{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],17:[function(_dereq_,module,exports){
      module.exports = LockConstraint;

      _dereq_('./Constraint');
      var PointToPointConstraint = _dereq_('./PointToPointConstraint');
      var RotationalEquation = _dereq_('../equations/RotationalEquation');
      _dereq_('../equations/RotationalMotorEquation');
      _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * Lock constraint. Will remove all degrees of freedom between the bodies.
       * @class LockConstraint
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {object} [options]
       * @param {Number} [options.maxForce=1e6]
       * @extends PointToPointConstraint
       */
      function LockConstraint(bodyA, bodyB, options){
          options = options || {};
          var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

          // Set pivot point in between
          var pivotA = new Vec3();
          var pivotB = new Vec3();
          var halfWay = new Vec3();
          bodyA.position.vadd(bodyB.position, halfWay);
          halfWay.scale(0.5, halfWay);
          bodyB.pointToLocalFrame(halfWay, pivotB);
          bodyA.pointToLocalFrame(halfWay, pivotA);

          // The point-to-point constraint will keep a point shared between the bodies
          PointToPointConstraint.call(this, bodyA, pivotA, bodyB, pivotB, maxForce);

          // Store initial rotation of the bodies as unit vectors in the local body spaces
          this.xA = bodyA.vectorToLocalFrame(Vec3.UNIT_X);
          this.xB = bodyB.vectorToLocalFrame(Vec3.UNIT_X);
          this.yA = bodyA.vectorToLocalFrame(Vec3.UNIT_Y);
          this.yB = bodyB.vectorToLocalFrame(Vec3.UNIT_Y);
          this.zA = bodyA.vectorToLocalFrame(Vec3.UNIT_Z);
          this.zB = bodyB.vectorToLocalFrame(Vec3.UNIT_Z);

          // ...and the following rotational equations will keep all rotational DOF's in place

          /**
           * @property {RotationalEquation} rotationalEquation1
           */
          var r1 = this.rotationalEquation1 = new RotationalEquation(bodyA,bodyB,options);

          /**
           * @property {RotationalEquation} rotationalEquation2
           */
          var r2 = this.rotationalEquation2 = new RotationalEquation(bodyA,bodyB,options);

          /**
           * @property {RotationalEquation} rotationalEquation3
           */
          var r3 = this.rotationalEquation3 = new RotationalEquation(bodyA,bodyB,options);

          this.equations.push(r1, r2, r3);
      }
      LockConstraint.prototype = new PointToPointConstraint();
      LockConstraint.constructor = LockConstraint;

      new Vec3();
      new Vec3();

      LockConstraint.prototype.update = function(){
          var bodyA = this.bodyA,
              bodyB = this.bodyB;
              this.motorEquation;
              var r1 = this.rotationalEquation1,
              r2 = this.rotationalEquation2,
              r3 = this.rotationalEquation3;

          PointToPointConstraint.prototype.update.call(this);

          // These vector pairs must be orthogonal
          bodyA.vectorToWorldFrame(this.xA, r1.axisA);
          bodyB.vectorToWorldFrame(this.yB, r1.axisB);

          bodyA.vectorToWorldFrame(this.yA, r2.axisA);
          bodyB.vectorToWorldFrame(this.zB, r2.axisB);

          bodyA.vectorToWorldFrame(this.zA, r3.axisA);
          bodyB.vectorToWorldFrame(this.xB, r3.axisB);
      };


      },{"../equations/ContactEquation":20,"../equations/RotationalEquation":23,"../equations/RotationalMotorEquation":24,"../math/Vec3":31,"./Constraint":14,"./PointToPointConstraint":18}],18:[function(_dereq_,module,exports){
      module.exports = PointToPointConstraint;

      var Constraint = _dereq_('./Constraint');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * Connects two bodies at given offset points.
       * @class PointToPointConstraint
       * @extends Constraint
       * @constructor
       * @param {Body} bodyA
       * @param {Vec3} pivotA The point relative to the center of mass of bodyA which bodyA is constrained to.
       * @param {Body} bodyB Body that will be constrained in a similar way to the same point as bodyA. We will therefore get a link between bodyA and bodyB. If not specified, bodyA will be constrained to a static point.
       * @param {Vec3} pivotB See pivotA.
       * @param {Number} maxForce The maximum force that should be applied to constrain the bodies.
       *
       * @example
       *     var bodyA = new Body({ mass: 1 });
       *     var bodyB = new Body({ mass: 1 });
       *     bodyA.position.set(-1, 0, 0);
       *     bodyB.position.set(1, 0, 0);
       *     bodyA.addShape(shapeA);
       *     bodyB.addShape(shapeB);
       *     world.addBody(bodyA);
       *     world.addBody(bodyB);
       *     var localPivotA = new Vec3(1, 0, 0);
       *     var localPivotB = new Vec3(-1, 0, 0);
       *     var constraint = new PointToPointConstraint(bodyA, localPivotA, bodyB, localPivotB);
       *     world.addConstraint(constraint);
       */
      function PointToPointConstraint(bodyA,pivotA,bodyB,pivotB,maxForce){
          Constraint.call(this,bodyA,bodyB);

          maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;

          /**
           * Pivot, defined locally in bodyA.
           * @property {Vec3} pivotA
           */
          this.pivotA = pivotA ? pivotA.clone() : new Vec3();

          /**
           * Pivot, defined locally in bodyB.
           * @property {Vec3} pivotB
           */
          this.pivotB = pivotB ? pivotB.clone() : new Vec3();

          /**
           * @property {ContactEquation} equationX
           */
          var x = this.equationX = new ContactEquation(bodyA,bodyB);

          /**
           * @property {ContactEquation} equationY
           */
          var y = this.equationY = new ContactEquation(bodyA,bodyB);

          /**
           * @property {ContactEquation} equationZ
           */
          var z = this.equationZ = new ContactEquation(bodyA,bodyB);

          // Equations to be fed to the solver
          this.equations.push(x, y, z);

          // Make the equations bidirectional
          x.minForce = y.minForce = z.minForce = -maxForce;
          x.maxForce = y.maxForce = z.maxForce =  maxForce;

          x.ni.set(1, 0, 0);
          y.ni.set(0, 1, 0);
          z.ni.set(0, 0, 1);
      }
      PointToPointConstraint.prototype = new Constraint();

      PointToPointConstraint.prototype.update = function(){
          var bodyA = this.bodyA;
          var bodyB = this.bodyB;
          var x = this.equationX;
          var y = this.equationY;
          var z = this.equationZ;

          // Rotate the pivots to world space
          bodyA.quaternion.vmult(this.pivotA,x.ri);
          bodyB.quaternion.vmult(this.pivotB,x.rj);

          y.ri.copy(x.ri);
          y.rj.copy(x.rj);
          z.ri.copy(x.ri);
          z.rj.copy(x.rj);
      };
      },{"../equations/ContactEquation":20,"../math/Vec3":31,"./Constraint":14}],19:[function(_dereq_,module,exports){
      module.exports = ConeEquation;

      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');

      /**
       * Cone equation. Works to keep the given body world vectors aligned, or tilted within a given angle from each other.
       * @class ConeEquation
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Vec3} [options.axisA] Local axis in A
       * @param {Vec3} [options.axisB] Local axis in B
       * @param {Vec3} [options.angle] The "cone angle" to keep
       * @param {number} [options.maxForce=1e6]
       * @extends Equation
       */
      function ConeEquation(bodyA, bodyB, options){
          options = options || {};
          var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

          Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

          /**
           * The cone angle to keep
           * @property {number} angle
           */
          this.angle = typeof(options.angle) !== 'undefined' ? options.angle : 0;
      }

      ConeEquation.prototype = new Equation();
      ConeEquation.prototype.constructor = ConeEquation;

      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();

      ConeEquation.prototype.computeB = function(h){
          var a = this.a,
              b = this.b,

              ni = this.axisA,
              nj = this.axisB,

              nixnj = tmpVec1,
              njxni = tmpVec2,

              GA = this.jacobianElementA,
              GB = this.jacobianElementB;

          // Caluclate cross products
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);

          // The angle between two vector is:
          // cos(theta) = a * b / (length(a) * length(b) = { len(a) = len(b) = 1 } = a * b

          // g = a * b
          // gdot = (b x a) * wi + (a x b) * wj
          // G = [0 bxa 0 axb]
          // W = [vi wi vj wj]
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);

          var g = Math.cos(this.angle) - ni.dot(nj),
              GW = this.computeGW(),
              GiMf = this.computeGiMf();

          var B = - g * a - GW * b - h * GiMf;

          return B;
      };


      },{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],20:[function(_dereq_,module,exports){
      module.exports = ContactEquation;

      var Equation = _dereq_('./Equation');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Mat3');

      /**
       * Contact/non-penetration constraint equation
       * @class ContactEquation
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @extends Equation
       */
      function ContactEquation(bodyA, bodyB, maxForce){
          maxForce = typeof(maxForce) !== 'undefined' ? maxForce : 1e6;
          Equation.call(this, bodyA, bodyB, 0, maxForce);

          /**
           * @property si
           * @type {Shape}
           */
          this.si = null;

          /**
           * @property sj
           * @type {Shape}
           */
          this.sj = null;
          
          /**
           * @property restitution
           * @type {Number}
           */
          this.restitution = 0.0; // "bounciness": u1 = -e*u0

          /**
           * World-oriented vector that goes from the center of bi to the contact point.
           * @property {Vec3} ri
           */
          this.ri = new Vec3();

          /**
           * World-oriented vector that starts in body j position and goes to the contact point.
           * @property {Vec3} rj
           */
          this.rj = new Vec3();

          /**
           * Contact normal, pointing out of body i.
           * @property {Vec3} ni
           */
          this.ni = new Vec3();
      }

      ContactEquation.prototype = new Equation();
      ContactEquation.prototype.constructor = ContactEquation;

      var ContactEquation_computeB_temp1 = new Vec3(); // Temp vectors
      var ContactEquation_computeB_temp2 = new Vec3();
      var ContactEquation_computeB_temp3 = new Vec3();
      ContactEquation.prototype.computeB = function(h){
          var a = this.a,
              b = this.b,
              bi = this.bi,
              bj = this.bj,
              ri = this.ri,
              rj = this.rj,
              rixn = ContactEquation_computeB_temp1,
              rjxn = ContactEquation_computeB_temp2,

              vi = bi.velocity,
              wi = bi.angularVelocity;
              bi.force;
              bi.torque;

              var vj = bj.velocity,
              wj = bj.angularVelocity;
              bj.force;
              bj.torque;

              var penetrationVec = ContactEquation_computeB_temp3,

              GA = this.jacobianElementA,
              GB = this.jacobianElementB,

              n = this.ni;

          // Caluclate cross products
          ri.cross(n,rixn);
          rj.cross(n,rjxn);

          // g = xj+rj -(xi+ri)
          // G = [ -ni  -rixn  ni  rjxn ]
          n.negate(GA.spatial);
          rixn.negate(GA.rotational);
          GB.spatial.copy(n);
          GB.rotational.copy(rjxn);

          // Calculate the penetration vector
          penetrationVec.copy(bj.position);
          penetrationVec.vadd(rj,penetrationVec);
          penetrationVec.vsub(bi.position,penetrationVec);
          penetrationVec.vsub(ri,penetrationVec);

          var g = n.dot(penetrationVec);

          // Compute iteration
          var ePlusOne = this.restitution + 1;
          var GW = ePlusOne * vj.dot(n) - ePlusOne * vi.dot(n) + wj.dot(rjxn) - wi.dot(rixn);
          var GiMf = this.computeGiMf();

          var B = - g * a - GW * b - h*GiMf;

          return B;
      };

      var ContactEquation_getImpactVelocityAlongNormal_vi = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_vj = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_xi = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_xj = new Vec3();
      var ContactEquation_getImpactVelocityAlongNormal_relVel = new Vec3();

      /**
       * Get the current relative velocity in the contact point.
       * @method getImpactVelocityAlongNormal
       * @return {number}
       */
      ContactEquation.prototype.getImpactVelocityAlongNormal = function(){
          var vi = ContactEquation_getImpactVelocityAlongNormal_vi;
          var vj = ContactEquation_getImpactVelocityAlongNormal_vj;
          var xi = ContactEquation_getImpactVelocityAlongNormal_xi;
          var xj = ContactEquation_getImpactVelocityAlongNormal_xj;
          var relVel = ContactEquation_getImpactVelocityAlongNormal_relVel;

          this.bi.position.vadd(this.ri, xi);
          this.bj.position.vadd(this.rj, xj);

          this.bi.getVelocityAtWorldPoint(xi, vi);
          this.bj.getVelocityAtWorldPoint(xj, vj);

          vi.vsub(vj, relVel);

          return this.ni.dot(relVel);
      };


      },{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],21:[function(_dereq_,module,exports){
      module.exports = Equation;

      var JacobianElement = _dereq_('../math/JacobianElement'),
          Vec3 = _dereq_('../math/Vec3');

      /**
       * Equation base class
       * @class Equation
       * @constructor
       * @author schteppe
       * @param {Body} bi
       * @param {Body} bj
       * @param {Number} minForce Minimum (read: negative max) force to be applied by the constraint.
       * @param {Number} maxForce Maximum (read: positive max) force to be applied by the constraint.
       */
      function Equation(bi,bj,minForce,maxForce){
          this.id = Equation.id++;

          /**
           * @property {number} minForce
           */
          this.minForce = typeof(minForce)==="undefined" ? -1e6 : minForce;

          /**
           * @property {number} maxForce
           */
          this.maxForce = typeof(maxForce)==="undefined" ? 1e6 : maxForce;

          /**
           * @property bi
           * @type {Body}
           */
          this.bi = bi;

          /**
           * @property bj
           * @type {Body}
           */
          this.bj = bj;

          /**
           * SPOOK parameter
           * @property {number} a
           */
          this.a = 0.0;

          /**
           * SPOOK parameter
           * @property {number} b
           */
          this.b = 0.0;

          /**
           * SPOOK parameter
           * @property {number} eps
           */
          this.eps = 0.0;

          /**
           * @property {JacobianElement} jacobianElementA
           */
          this.jacobianElementA = new JacobianElement();

          /**
           * @property {JacobianElement} jacobianElementB
           */
          this.jacobianElementB = new JacobianElement();

          /**
           * @property {boolean} enabled
           * @default true
           */
          this.enabled = true;

          /**
           * A number, proportional to the force added to the bodies.
           * @property {number} multiplier
           * @readonly
           */
          this.multiplier = 0;

          // Set typical spook params
          this.setSpookParams(1e7,4,1/60);
      }
      Equation.prototype.constructor = Equation;

      Equation.id = 0;

      /**
       * Recalculates a,b,eps.
       * @method setSpookParams
       */
      Equation.prototype.setSpookParams = function(stiffness,relaxation,timeStep){
          var d = relaxation,
              k = stiffness,
              h = timeStep;
          this.a = 4.0 / (h * (1 + 4 * d));
          this.b = (4.0 * d) / (1 + 4 * d);
          this.eps = 4.0 / (h * h * k * (1 + 4 * d));
      };

      /**
       * Computes the RHS of the SPOOK equation
       * @method computeB
       * @return {Number}
       */
      Equation.prototype.computeB = function(a,b,h){
          var GW = this.computeGW(),
              Gq = this.computeGq(),
              GiMf = this.computeGiMf();
          return - Gq * a - GW * b - GiMf*h;
      };

      /**
       * Computes G*q, where q are the generalized body coordinates
       * @method computeGq
       * @return {Number}
       */
      Equation.prototype.computeGq = function(){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              xi = bi.position,
              xj = bj.position;
          return GA.spatial.dot(xi) + GB.spatial.dot(xj);
      };

      new Vec3();

      /**
       * Computes G*W, where W are the body velocities
       * @method computeGW
       * @return {Number}
       */
      Equation.prototype.computeGW = function(){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              vi = bi.velocity,
              vj = bj.velocity,
              wi = bi.angularVelocity,
              wj = bj.angularVelocity;
          return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
      };


      /**
       * Computes G*Wlambda, where W are the body velocities
       * @method computeGWlambda
       * @return {Number}
       */
      Equation.prototype.computeGWlambda = function(){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              vi = bi.vlambda,
              vj = bj.vlambda,
              wi = bi.wlambda,
              wj = bj.wlambda;
          return GA.multiplyVectors(vi,wi) + GB.multiplyVectors(vj,wj);
      };

      /**
       * Computes G*inv(M)*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.
       * @method computeGiMf
       * @return {Number}
       */
      var iMfi = new Vec3(),
          iMfj = new Vec3(),
          invIi_vmult_taui = new Vec3(),
          invIj_vmult_tauj = new Vec3();
      Equation.prototype.computeGiMf = function(){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              fi = bi.force,
              ti = bi.torque,
              fj = bj.force,
              tj = bj.torque,
              invMassi = bi.invMassSolve,
              invMassj = bj.invMassSolve;

          fi.scale(invMassi,iMfi);
          fj.scale(invMassj,iMfj);

          bi.invInertiaWorldSolve.vmult(ti,invIi_vmult_taui);
          bj.invInertiaWorldSolve.vmult(tj,invIj_vmult_tauj);

          return GA.multiplyVectors(iMfi,invIi_vmult_taui) + GB.multiplyVectors(iMfj,invIj_vmult_tauj);
      };

      /**
       * Computes G*inv(M)*G'
       * @method computeGiMGt
       * @return {Number}
       */
      var tmp = new Vec3();
      Equation.prototype.computeGiMGt = function(){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              invMassi = bi.invMassSolve,
              invMassj = bj.invMassSolve,
              invIi = bi.invInertiaWorldSolve,
              invIj = bj.invInertiaWorldSolve,
              result = invMassi + invMassj;

          invIi.vmult(GA.rotational,tmp);
          result += tmp.dot(GA.rotational);

          invIj.vmult(GB.rotational,tmp);
          result += tmp.dot(GB.rotational);

          return  result;
      };

      var addToWlambda_temp = new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();

      /**
       * Add constraint velocity to the bodies.
       * @method addToWlambda
       * @param {Number} deltalambda
       */
      Equation.prototype.addToWlambda = function(deltalambda){
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB,
              bi = this.bi,
              bj = this.bj,
              temp = addToWlambda_temp;

          // Add to linear velocity
          // v_lambda += inv(M) * delta_lamba * G
          bi.vlambda.addScaledVector(bi.invMassSolve * deltalambda, GA.spatial, bi.vlambda);
          bj.vlambda.addScaledVector(bj.invMassSolve * deltalambda, GB.spatial, bj.vlambda);

          // Add to angular velocity
          bi.invInertiaWorldSolve.vmult(GA.rotational,temp);
          bi.wlambda.addScaledVector(deltalambda, temp, bi.wlambda);

          bj.invInertiaWorldSolve.vmult(GB.rotational,temp);
          bj.wlambda.addScaledVector(deltalambda, temp, bj.wlambda);
      };

      /**
       * Compute the denominator part of the SPOOK equation: C = G*inv(M)*G' + eps
       * @method computeInvC
       * @param  {Number} eps
       * @return {Number}
       */
      Equation.prototype.computeC = function(){
          return this.computeGiMGt() + this.eps;
      };

      },{"../math/JacobianElement":27,"../math/Vec3":31}],22:[function(_dereq_,module,exports){
      module.exports = FrictionEquation;

      var Equation = _dereq_('./Equation');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Mat3');

      /**
       * Constrains the slipping in a contact along a tangent
       * @class FrictionEquation
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Number} slipForce should be +-F_friction = +-mu * F_normal = +-mu * m * g
       * @extends Equation
       */
      function FrictionEquation(bodyA, bodyB, slipForce){
          Equation.call(this,bodyA, bodyB, -slipForce, slipForce);
          this.ri = new Vec3();
          this.rj = new Vec3();
          this.t = new Vec3(); // tangent
      }

      FrictionEquation.prototype = new Equation();
      FrictionEquation.prototype.constructor = FrictionEquation;

      var FrictionEquation_computeB_temp1 = new Vec3();
      var FrictionEquation_computeB_temp2 = new Vec3();
      FrictionEquation.prototype.computeB = function(h){
          this.a;
              var b = this.b;
              this.bi;
              this.bj;
              var ri = this.ri,
              rj = this.rj,
              rixt = FrictionEquation_computeB_temp1,
              rjxt = FrictionEquation_computeB_temp2,
              t = this.t;

          // Caluclate cross products
          ri.cross(t,rixt);
          rj.cross(t,rjxt);

          // G = [-t -rixt t rjxt]
          // And remember, this is a pure velocity constraint, g is always zero!
          var GA = this.jacobianElementA,
              GB = this.jacobianElementB;
          t.negate(GA.spatial);
          rixt.negate(GA.rotational);
          GB.spatial.copy(t);
          GB.rotational.copy(rjxt);

          var GW = this.computeGW();
          var GiMf = this.computeGiMf();

          var B = - GW * b - h * GiMf;

          return B;
      };

      },{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],23:[function(_dereq_,module,exports){
      module.exports = RotationalEquation;

      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');

      /**
       * Rotational constraint. Works to keep the local vectors orthogonal to each other in world space.
       * @class RotationalEquation
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Vec3} [options.axisA]
       * @param {Vec3} [options.axisB]
       * @param {number} [options.maxForce]
       * @extends Equation
       */
      function RotationalEquation(bodyA, bodyB, options){
          options = options || {};
          var maxForce = typeof(options.maxForce) !== 'undefined' ? options.maxForce : 1e6;

          Equation.call(this,bodyA,bodyB,-maxForce, maxForce);

          this.axisA = options.axisA ? options.axisA.clone() : new Vec3(1, 0, 0);
          this.axisB = options.axisB ? options.axisB.clone() : new Vec3(0, 1, 0);

          this.maxAngle = Math.PI / 2;
      }

      RotationalEquation.prototype = new Equation();
      RotationalEquation.prototype.constructor = RotationalEquation;

      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();

      RotationalEquation.prototype.computeB = function(h){
          var a = this.a,
              b = this.b,

              ni = this.axisA,
              nj = this.axisB,

              nixnj = tmpVec1,
              njxni = tmpVec2,

              GA = this.jacobianElementA,
              GB = this.jacobianElementB;

          // Caluclate cross products
          ni.cross(nj, nixnj);
          nj.cross(ni, njxni);

          // g = ni * nj
          // gdot = (nj x ni) * wi + (ni x nj) * wj
          // G = [0 njxni 0 nixnj]
          // W = [vi wi vj wj]
          GA.rotational.copy(njxni);
          GB.rotational.copy(nixnj);

          var g = Math.cos(this.maxAngle) - ni.dot(nj),
              GW = this.computeGW(),
              GiMf = this.computeGiMf();

          var B = - g * a - GW * b - h * GiMf;

          return B;
      };


      },{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],24:[function(_dereq_,module,exports){
      module.exports = RotationalMotorEquation;

      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Mat3');
      var Equation = _dereq_('./Equation');

      /**
       * Rotational motor constraint. Tries to keep the relative angular velocity of the bodies to a given value.
       * @class RotationalMotorEquation
       * @constructor
       * @author schteppe
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Number} maxForce
       * @extends Equation
       */
      function RotationalMotorEquation(bodyA, bodyB, maxForce){
          maxForce = typeof(maxForce)!=='undefined' ? maxForce : 1e6;
          Equation.call(this,bodyA,bodyB,-maxForce,maxForce);

          /**
           * World oriented rotational axis
           * @property {Vec3} axisA
           */
          this.axisA = new Vec3();

          /**
           * World oriented rotational axis
           * @property {Vec3} axisB
           */
          this.axisB = new Vec3(); // World oriented rotational axis

          /**
           * Motor velocity
           * @property {Number} targetVelocity
           */
          this.targetVelocity = 0;
      }

      RotationalMotorEquation.prototype = new Equation();
      RotationalMotorEquation.prototype.constructor = RotationalMotorEquation;

      RotationalMotorEquation.prototype.computeB = function(h){
          this.a;
              var b = this.b;
              this.bi;
              this.bj;

              var axisA = this.axisA,
              axisB = this.axisB,

              GA = this.jacobianElementA,
              GB = this.jacobianElementB;

          // g = 0
          // gdot = axisA * wi - axisB * wj
          // gdot = G * W = G * [vi wi vj wj]
          // =>
          // G = [0 axisA 0 -axisB]

          GA.rotational.copy(axisA);
          axisB.negate(GB.rotational);

          var GW = this.computeGW() - this.targetVelocity,
              GiMf = this.computeGiMf();

          var B = - GW * b - h * GiMf;

          return B;
      };

      },{"../math/Mat3":28,"../math/Vec3":31,"./Equation":21}],25:[function(_dereq_,module,exports){
      var Utils = _dereq_('../utils/Utils');

      module.exports = ContactMaterial;

      /**
       * Defines what happens when two materials meet.
       * @class ContactMaterial
       * @constructor
       * @param {Material} m1
       * @param {Material} m2
       * @param {object} [options]
       * @param {Number} [options.friction=0.3]
       * @param {Number} [options.restitution=0.3]
       * @param {number} [options.contactEquationStiffness=1e7]
       * @param {number} [options.contactEquationRelaxation=3]
       * @param {number} [options.frictionEquationStiffness=1e7]
       * @param {Number} [options.frictionEquationRelaxation=3]
       */
      function ContactMaterial(m1, m2, options){
          options = Utils.defaults(options, {
              friction: 0.3,
              restitution: 0.3,
              contactEquationStiffness: 1e7,
              contactEquationRelaxation: 3,
              frictionEquationStiffness: 1e7,
              frictionEquationRelaxation: 3
          });

          /**
           * Identifier of this material
           * @property {Number} id
           */
          this.id = ContactMaterial.idCounter++;

          /**
           * Participating materials
           * @property {Array} materials
           * @todo  Should be .materialA and .materialB instead
           */
          this.materials = [m1, m2];

          /**
           * Friction coefficient
           * @property {Number} friction
           */
          this.friction = options.friction;

          /**
           * Restitution coefficient
           * @property {Number} restitution
           */
          this.restitution = options.restitution;

          /**
           * Stiffness of the produced contact equations
           * @property {Number} contactEquationStiffness
           */
          this.contactEquationStiffness = options.contactEquationStiffness;

          /**
           * Relaxation time of the produced contact equations
           * @property {Number} contactEquationRelaxation
           */
          this.contactEquationRelaxation = options.contactEquationRelaxation;

          /**
           * Stiffness of the produced friction equations
           * @property {Number} frictionEquationStiffness
           */
          this.frictionEquationStiffness = options.frictionEquationStiffness;

          /**
           * Relaxation time of the produced friction equations
           * @property {Number} frictionEquationRelaxation
           */
          this.frictionEquationRelaxation = options.frictionEquationRelaxation;
      }

      ContactMaterial.idCounter = 0;

      },{"../utils/Utils":54}],26:[function(_dereq_,module,exports){
      module.exports = Material;

      /**
       * Defines a physics material.
       * @class Material
       * @constructor
       * @param {object} [options]
       * @author schteppe
       */
      function Material(options){
          var name = '';
          options = options || {};

          // Backwards compatibility fix
          if(typeof(options) === 'string'){
              name = options;
              options = {};
          } else if(typeof(options) === 'object') {
              name = '';
          }

          /**
           * @property name
           * @type {String}
           */
          this.name = name;

          /**
           * material id.
           * @property id
           * @type {number}
           */
          this.id = Material.idCounter++;

          /**
           * Friction for this material. If non-negative, it will be used instead of the friction given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
           * @property {number} friction
           */
          this.friction = typeof(options.friction) !== 'undefined' ? options.friction : -1;

          /**
           * Restitution for this material. If non-negative, it will be used instead of the restitution given by ContactMaterials. If there's no matching ContactMaterial, the value from .defaultContactMaterial in the World will be used.
           * @property {number} restitution
           */
          this.restitution = typeof(options.restitution) !== 'undefined' ? options.restitution : -1;

          this.correctInelastic = 0;
      }

      Material.idCounter = 0;

      },{}],27:[function(_dereq_,module,exports){
      module.exports = JacobianElement;

      var Vec3 = _dereq_('./Vec3');

      /**
       * An element containing 6 entries, 3 spatial and 3 rotational degrees of freedom.
       * @class JacobianElement
       * @constructor
       */
      function JacobianElement(){

          /**
           * @property {Vec3} spatial
           */
          this.spatial = new Vec3();

          /**
           * @property {Vec3} rotational
           */
          this.rotational = new Vec3();
      }

      /**
       * Multiply with other JacobianElement
       * @method multiplyElement
       * @param  {JacobianElement} element
       * @return {Number}
       */
      JacobianElement.prototype.multiplyElement = function(element){
          return element.spatial.dot(this.spatial) + element.rotational.dot(this.rotational);
      };

      /**
       * Multiply with two vectors
       * @method multiplyVectors
       * @param  {Vec3} spatial
       * @param  {Vec3} rotational
       * @return {Number}
       */
      JacobianElement.prototype.multiplyVectors = function(spatial,rotational){
          return spatial.dot(this.spatial) + rotational.dot(this.rotational);
      };

      },{"./Vec3":31}],28:[function(_dereq_,module,exports){
      module.exports = Mat3;

      var Vec3 = _dereq_('./Vec3');

      /**
       * A 3x3 matrix.
       * @class Mat3
       * @constructor
       * @param array elements Array of nine elements. Optional.
       * @author schteppe / http://github.com/schteppe
       */
      function Mat3(elements){
          /**
           * A vector of length 9, containing all matrix elements
           * @property {Array} elements
           */
          if(elements){
              this.elements = elements;
          } else {
              this.elements = [0,0,0,0,0,0,0,0,0];
          }
      }

      /**
       * Sets the matrix to identity
       * @method identity
       * @todo Should perhaps be renamed to setIdentity() to be more clear.
       * @todo Create another function that immediately creates an identity matrix eg. eye()
       */
      Mat3.prototype.identity = function(){
          var e = this.elements;
          e[0] = 1;
          e[1] = 0;
          e[2] = 0;

          e[3] = 0;
          e[4] = 1;
          e[5] = 0;

          e[6] = 0;
          e[7] = 0;
          e[8] = 1;
      };

      /**
       * Set all elements to zero
       * @method setZero
       */
      Mat3.prototype.setZero = function(){
          var e = this.elements;
          e[0] = 0;
          e[1] = 0;
          e[2] = 0;
          e[3] = 0;
          e[4] = 0;
          e[5] = 0;
          e[6] = 0;
          e[7] = 0;
          e[8] = 0;
      };

      /**
       * Sets the matrix diagonal elements from a Vec3
       * @method setTrace
       * @param {Vec3} vec3
       */
      Mat3.prototype.setTrace = function(vec3){
          var e = this.elements;
          e[0] = vec3.x;
          e[4] = vec3.y;
          e[8] = vec3.z;
      };

      /**
       * Gets the matrix diagonal elements
       * @method getTrace
       * @return {Vec3}
       */
      Mat3.prototype.getTrace = function(target){
          var target = target || new Vec3();
          var e = this.elements;
          target.x = e[0];
          target.y = e[4];
          target.z = e[8];
      };

      /**
       * Matrix-Vector multiplication
       * @method vmult
       * @param {Vec3} v The vector to multiply with
       * @param {Vec3} target Optional, target to save the result in.
       */
      Mat3.prototype.vmult = function(v,target){
          target = target || new Vec3();

          var e = this.elements,
              x = v.x,
              y = v.y,
              z = v.z;
          target.x = e[0]*x + e[1]*y + e[2]*z;
          target.y = e[3]*x + e[4]*y + e[5]*z;
          target.z = e[6]*x + e[7]*y + e[8]*z;

          return target;
      };

      /**
       * Matrix-scalar multiplication
       * @method smult
       * @param {Number} s
       */
      Mat3.prototype.smult = function(s){
          for(var i=0; i<this.elements.length; i++){
              this.elements[i] *= s;
          }
      };

      /**
       * Matrix multiplication
       * @method mmult
       * @param {Mat3} m Matrix to multiply with from left side.
       * @return {Mat3} The result.
       */
      Mat3.prototype.mmult = function(m,target){
          var r = target || new Mat3();
          for(var i=0; i<3; i++){
              for(var j=0; j<3; j++){
                  var sum = 0.0;
                  for(var k=0; k<3; k++){
                      sum += m.elements[i+k*3] * this.elements[k+j*3];
                  }
                  r.elements[i+j*3] = sum;
              }
          }
          return r;
      };

      /**
       * Scale each column of the matrix
       * @method scale
       * @param {Vec3} v
       * @return {Mat3} The result.
       */
      Mat3.prototype.scale = function(v,target){
          target = target || new Mat3();
          var e = this.elements,
              t = target.elements;
          for(var i=0; i!==3; i++){
              t[3*i + 0] = v.x * e[3*i + 0];
              t[3*i + 1] = v.y * e[3*i + 1];
              t[3*i + 2] = v.z * e[3*i + 2];
          }
          return target;
      };

      /**
       * Solve Ax=b
       * @method solve
       * @param {Vec3} b The right hand side
       * @param {Vec3} target Optional. Target vector to save in.
       * @return {Vec3} The solution x
       * @todo should reuse arrays
       */
      Mat3.prototype.solve = function(b,target){
          target = target || new Vec3();

          // Construct equations
          var nr = 3; // num rows
          var nc = 4; // num cols
          var eqns = [];
          for(var i=0; i<nr*nc; i++){
              eqns.push(0);
          }
          var i,j;
          for(i=0; i<3; i++){
              for(j=0; j<3; j++){
                  eqns[i+nc*j] = this.elements[i+3*j];
              }
          }
          eqns[3+4*0] = b.x;
          eqns[3+4*1] = b.y;
          eqns[3+4*2] = b.z;

          // Compute right upper triangular version of the matrix - Gauss elimination
          var n = 3, k = n, np;
          var kp = 4; // num rows
          var p;
          do {
              i = k - n;
              if (eqns[i+nc*i] === 0) {
                  // the pivot is null, swap lines
                  for (j = i + 1; j < k; j++) {
                      if (eqns[i+nc*j] !== 0) {
                          np = kp;
                          do {  // do ligne( i ) = ligne( i ) + ligne( k )
                              p = kp - np;
                              eqns[p+nc*i] += eqns[p+nc*j];
                          } while (--np);
                          break;
                      }
                  }
              }
              if (eqns[i+nc*i] !== 0) {
                  for (j = i + 1; j < k; j++) {
                      var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                      np = kp;
                      do {  // do ligne( k ) = ligne( k ) - multiplier * ligne( i )
                          p = kp - np;
                          eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                      } while (--np);
                  }
              }
          } while (--n);

          // Get the solution
          target.z = eqns[2*nc+3] / eqns[2*nc+2];
          target.y = (eqns[1*nc+3] - eqns[1*nc+2]*target.z) / eqns[1*nc+1];
          target.x = (eqns[0*nc+3] - eqns[0*nc+2]*target.z - eqns[0*nc+1]*target.y) / eqns[0*nc+0];

          if(isNaN(target.x) || isNaN(target.y) || isNaN(target.z) || target.x===Infinity || target.y===Infinity || target.z===Infinity){
              throw "Could not solve equation! Got x=["+target.toString()+"], b=["+b.toString()+"], A=["+this.toString()+"]";
          }

          return target;
      };

      /**
       * Get an element in the matrix by index. Index starts at 0, not 1!!!
       * @method e
       * @param {Number} row
       * @param {Number} column
       * @param {Number} value Optional. If provided, the matrix element will be set to this value.
       * @return {Number}
       */
      Mat3.prototype.e = function( row , column ,value){
          if(value===undefined){
              return this.elements[column+3*row];
          } else {
              // Set value
              this.elements[column+3*row] = value;
          }
      };

      /**
       * Copy another matrix into this matrix object.
       * @method copy
       * @param {Mat3} source
       * @return {Mat3} this
       */
      Mat3.prototype.copy = function(source){
          for(var i=0; i < source.elements.length; i++){
              this.elements[i] = source.elements[i];
          }
          return this;
      };

      /**
       * Returns a string representation of the matrix.
       * @method toString
       * @return string
       */
      Mat3.prototype.toString = function(){
          var r = "";
          var sep = ",";
          for(var i=0; i<9; i++){
              r += this.elements[i] + sep;
          }
          return r;
      };

      /**
       * reverse the matrix
       * @method reverse
       * @param {Mat3} target Optional. Target matrix to save in.
       * @return {Mat3} The solution x
       */
      Mat3.prototype.reverse = function(target){

          target = target || new Mat3();

          // Construct equations
          var nr = 3; // num rows
          var nc = 6; // num cols
          var eqns = [];
          for(var i=0; i<nr*nc; i++){
              eqns.push(0);
          }
          var i,j;
          for(i=0; i<3; i++){
              for(j=0; j<3; j++){
                  eqns[i+nc*j] = this.elements[i+3*j];
              }
          }
          eqns[3+6*0] = 1;
          eqns[3+6*1] = 0;
          eqns[3+6*2] = 0;
          eqns[4+6*0] = 0;
          eqns[4+6*1] = 1;
          eqns[4+6*2] = 0;
          eqns[5+6*0] = 0;
          eqns[5+6*1] = 0;
          eqns[5+6*2] = 1;

          // Compute right upper triangular version of the matrix - Gauss elimination
          var n = 3, k = n, np;
          var kp = nc; // num rows
          var p;
          do {
              i = k - n;
              if (eqns[i+nc*i] === 0) {
                  // the pivot is null, swap lines
                  for (j = i + 1; j < k; j++) {
                      if (eqns[i+nc*j] !== 0) {
                          np = kp;
                          do { // do line( i ) = line( i ) + line( k )
                              p = kp - np;
                              eqns[p+nc*i] += eqns[p+nc*j];
                          } while (--np);
                          break;
                      }
                  }
              }
              if (eqns[i+nc*i] !== 0) {
                  for (j = i + 1; j < k; j++) {
                      var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                      np = kp;
                      do { // do line( k ) = line( k ) - multiplier * line( i )
                          p = kp - np;
                          eqns[p+nc*j] = p <= i ? 0 : eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                      } while (--np);
                  }
              }
          } while (--n);

          // eliminate the upper left triangle of the matrix
          i = 2;
          do {
              j = i-1;
              do {
                  var multiplier = eqns[i+nc*j] / eqns[i+nc*i];
                  np = nc;
                  do {
                      p = nc - np;
                      eqns[p+nc*j] =  eqns[p+nc*j] - eqns[p+nc*i] * multiplier ;
                  } while (--np);
              } while (j--);
          } while (--i);

          // operations on the diagonal
          i = 2;
          do {
              var multiplier = 1 / eqns[i+nc*i];
              np = nc;
              do {
                  p = nc - np;
                  eqns[p+nc*i] = eqns[p+nc*i] * multiplier ;
              } while (--np);
          } while (i--);

          i = 2;
          do {
              j = 2;
              do {
                  p = eqns[nr+j+nc*i];
                  if( isNaN( p ) || p ===Infinity ){
                      throw "Could not reverse! A=["+this.toString()+"]";
                  }
                  target.e( i , j , p );
              } while (j--);
          } while (i--);

          return target;
      };

      /**
       * Set the matrix from a quaterion
       * @method setRotationFromQuaternion
       * @param {Quaternion} q
       */
      Mat3.prototype.setRotationFromQuaternion = function( q ) {
          var x = q.x, y = q.y, z = q.z, w = q.w,
              x2 = x + x, y2 = y + y, z2 = z + z,
              xx = x * x2, xy = x * y2, xz = x * z2,
              yy = y * y2, yz = y * z2, zz = z * z2,
              wx = w * x2, wy = w * y2, wz = w * z2,
              e = this.elements;

          e[3*0 + 0] = 1 - ( yy + zz );
          e[3*0 + 1] = xy - wz;
          e[3*0 + 2] = xz + wy;

          e[3*1 + 0] = xy + wz;
          e[3*1 + 1] = 1 - ( xx + zz );
          e[3*1 + 2] = yz - wx;

          e[3*2 + 0] = xz - wy;
          e[3*2 + 1] = yz + wx;
          e[3*2 + 2] = 1 - ( xx + yy );

          return this;
      };

      /**
       * Transpose the matrix
       * @method transpose
       * @param  {Mat3} target Where to store the result.
       * @return {Mat3} The target Mat3, or a new Mat3 if target was omitted.
       */
      Mat3.prototype.transpose = function( target ) {
          target = target || new Mat3();

          var Mt = target.elements,
              M = this.elements;

          for(var i=0; i!==3; i++){
              for(var j=0; j!==3; j++){
                  Mt[3*i + j] = M[3*j + i];
              }
          }

          return target;
      };

      },{"./Vec3":31}],29:[function(_dereq_,module,exports){
      module.exports = Quaternion;

      var Vec3 = _dereq_('./Vec3');

      /**
       * A Quaternion describes a rotation in 3D space. The Quaternion is mathematically defined as Q = x*i + y*j + z*k + w, where (i,j,k) are imaginary basis vectors. (x,y,z) can be seen as a vector related to the axis of rotation, while the real multiplier, w, is related to the amount of rotation.
       * @class Quaternion
       * @constructor
       * @param {Number} x Multiplier of the imaginary basis vector i.
       * @param {Number} y Multiplier of the imaginary basis vector j.
       * @param {Number} z Multiplier of the imaginary basis vector k.
       * @param {Number} w Multiplier of the real part.
       * @see http://en.wikipedia.org/wiki/Quaternion
       */
      function Quaternion(x,y,z,w){
          /**
           * @property {Number} x
           */
          this.x = x!==undefined ? x : 0;

          /**
           * @property {Number} y
           */
          this.y = y!==undefined ? y : 0;

          /**
           * @property {Number} z
           */
          this.z = z!==undefined ? z : 0;

          /**
           * The multiplier of the real quaternion basis vector.
           * @property {Number} w
           */
          this.w = w!==undefined ? w : 1;
      }

      /**
       * Set the value of the quaternion.
       * @method set
       * @param {Number} x
       * @param {Number} y
       * @param {Number} z
       * @param {Number} w
       */
      Quaternion.prototype.set = function(x,y,z,w){
          this.x = x;
          this.y = y;
          this.z = z;
          this.w = w;
          return this;
      };

      /**
       * Convert to a readable format
       * @method toString
       * @return string
       */
      Quaternion.prototype.toString = function(){
          return this.x+","+this.y+","+this.z+","+this.w;
      };

      /**
       * Convert to an Array
       * @method toArray
       * @return Array
       */
      Quaternion.prototype.toArray = function(){
          return [this.x, this.y, this.z, this.w];
      };

      /**
       * Set the quaternion components given an axis and an angle.
       * @method setFromAxisAngle
       * @param {Vec3} axis
       * @param {Number} angle in radians
       */
      Quaternion.prototype.setFromAxisAngle = function(axis,angle){
          var s = Math.sin(angle*0.5);
          this.x = axis.x * s;
          this.y = axis.y * s;
          this.z = axis.z * s;
          this.w = Math.cos(angle*0.5);
          return this;
      };

      /**
       * Converts the quaternion to axis/angle representation.
       * @method toAxisAngle
       * @param {Vec3} [targetAxis] A vector object to reuse for storing the axis.
       * @return {Array} An array, first elemnt is the axis and the second is the angle in radians.
       */
      Quaternion.prototype.toAxisAngle = function(targetAxis){
          targetAxis = targetAxis || new Vec3();
          this.normalize(); // if w>1 acos and sqrt will produce errors, this cant happen if quaternion is normalised
          var angle = 2 * Math.acos(this.w);
          var s = Math.sqrt(1-this.w*this.w); // assuming quaternion normalised then w is less than 1, so term always positive.
          if (s < 0.001) { // test to avoid divide by zero, s is always positive due to sqrt
              // if s close to zero then direction of axis not important
              targetAxis.x = this.x; // if it is important that axis is normalised then replace with x=1; y=z=0;
              targetAxis.y = this.y;
              targetAxis.z = this.z;
          } else {
              targetAxis.x = this.x / s; // normalise axis
              targetAxis.y = this.y / s;
              targetAxis.z = this.z / s;
          }
          return [targetAxis,angle];
      };

      var sfv_t1 = new Vec3(),
          sfv_t2 = new Vec3();

      /**
       * Set the quaternion value given two vectors. The resulting rotation will be the needed rotation to rotate u to v.
       * @method setFromVectors
       * @param {Vec3} u
       * @param {Vec3} v
       */
      Quaternion.prototype.setFromVectors = function(u,v){
          if(u.isAntiparallelTo(v)){
              var t1 = sfv_t1;
              var t2 = sfv_t2;

              u.tangents(t1,t2);
              this.setFromAxisAngle(t1,Math.PI);
          } else {
              var a = u.cross(v);
              this.x = a.x;
              this.y = a.y;
              this.z = a.z;
              this.w = Math.sqrt(Math.pow(u.norm(),2) * Math.pow(v.norm(),2)) + u.dot(v);
              this.normalize();
          }
          return this;
      };

      /**
       * Quaternion multiplication
       * @method mult
       * @param {Quaternion} q
       * @param {Quaternion} target Optional.
       * @return {Quaternion}
       */
      new Vec3();
      new Vec3();
      new Vec3();
      Quaternion.prototype.mult = function(q,target){
          target = target || new Quaternion();

          var ax = this.x, ay = this.y, az = this.z, aw = this.w,
              bx = q.x, by = q.y, bz = q.z, bw = q.w;

          target.x = ax * bw + aw * bx + ay * bz - az * by;
          target.y = ay * bw + aw * by + az * bx - ax * bz;
          target.z = az * bw + aw * bz + ax * by - ay * bx;
          target.w = aw * bw - ax * bx - ay * by - az * bz;

          return target;
      };

      /**
       * Get the inverse quaternion rotation.
       * @method inverse
       * @param {Quaternion} target
       * @return {Quaternion}
       */
      Quaternion.prototype.inverse = function(target){
          var x = this.x, y = this.y, z = this.z, w = this.w;
          target = target || new Quaternion();

          this.conjugate(target);
          var inorm2 = 1/(x*x + y*y + z*z + w*w);
          target.x *= inorm2;
          target.y *= inorm2;
          target.z *= inorm2;
          target.w *= inorm2;

          return target;
      };

      /**
       * Get the quaternion conjugate
       * @method conjugate
       * @param {Quaternion} target
       * @return {Quaternion}
       */
      Quaternion.prototype.conjugate = function(target){
          target = target || new Quaternion();

          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          target.w = this.w;

          return target;
      };

      /**
       * Normalize the quaternion. Note that this changes the values of the quaternion.
       * @method normalize
       */
      Quaternion.prototype.normalize = function(){
          var l = Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);
          if ( l === 0 ) {
              this.x = 0;
              this.y = 0;
              this.z = 0;
              this.w = 0;
          } else {
              l = 1 / l;
              this.x *= l;
              this.y *= l;
              this.z *= l;
              this.w *= l;
          }
          return this;
      };

      /**
       * Approximation of quaternion normalization. Works best when quat is already almost-normalized.
       * @method normalizeFast
       * @see http://jsperf.com/fast-quaternion-normalization
       * @author unphased, https://github.com/unphased
       */
      Quaternion.prototype.normalizeFast = function () {
          var f = (3.0-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2.0;
          if ( f === 0 ) {
              this.x = 0;
              this.y = 0;
              this.z = 0;
              this.w = 0;
          } else {
              this.x *= f;
              this.y *= f;
              this.z *= f;
              this.w *= f;
          }
          return this;
      };

      /**
       * Multiply the quaternion by a vector
       * @method vmult
       * @param {Vec3} v
       * @param {Vec3} target Optional
       * @return {Vec3}
       */
      Quaternion.prototype.vmult = function(v,target){
          target = target || new Vec3();

          var x = v.x,
              y = v.y,
              z = v.z;

          var qx = this.x,
              qy = this.y,
              qz = this.z,
              qw = this.w;

          // q*v
          var ix =  qw * x + qy * z - qz * y,
          iy =  qw * y + qz * x - qx * z,
          iz =  qw * z + qx * y - qy * x,
          iw = -qx * x - qy * y - qz * z;

          target.x = ix * qw + iw * -qx + iy * -qz - iz * -qy;
          target.y = iy * qw + iw * -qy + iz * -qx - ix * -qz;
          target.z = iz * qw + iw * -qz + ix * -qy - iy * -qx;

          return target;
      };

      /**
       * Copies value of source to this quaternion.
       * @method copy
       * @param {Quaternion} source
       * @return {Quaternion} this
       */
      Quaternion.prototype.copy = function(source){
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          this.w = source.w;
          return this;
      };

      /**
       * Convert the quaternion to euler angle representation. Order: YZX, as this page describes: http://www.euclideanspace.com/maths/standards/index.htm
       * @method toEuler
       * @param {Vec3} target
       * @param string order Three-character string e.g. "YZX", which also is default.
       */
      Quaternion.prototype.toEuler = function(target,order){
          order = order || "YZX";

          var heading, attitude, bank;
          var x = this.x, y = this.y, z = this.z, w = this.w;

          switch(order){
          case "YZX":
              var test = x*y + z*w;
              if (test > 0.499) { // singularity at north pole
                  heading = 2 * Math.atan2(x,w);
                  attitude = Math.PI/2;
                  bank = 0;
              }
              if (test < -0.499) { // singularity at south pole
                  heading = -2 * Math.atan2(x,w);
                  attitude = - Math.PI/2;
                  bank = 0;
              }
              if(isNaN(heading)){
                  var sqx = x*x;
                  var sqy = y*y;
                  var sqz = z*z;
                  heading = Math.atan2(2*y*w - 2*x*z , 1 - 2*sqy - 2*sqz); // Heading
                  attitude = Math.asin(2*test); // attitude
                  bank = Math.atan2(2*x*w - 2*y*z , 1 - 2*sqx - 2*sqz); // bank
              }
              break;
          default:
              throw new Error("Euler order "+order+" not supported yet.");
          }

          target.y = heading;
          target.z = attitude;
          target.x = bank;
      };

      /**
       * See http://www.mathworks.com/matlabcentral/fileexchange/20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/content/SpinCalc.m
       * @method setFromEuler
       * @param {Number} x
       * @param {Number} y
       * @param {Number} z
       * @param {String} order The order to apply angles: 'XYZ' or 'YXZ' or any other combination
       */
      Quaternion.prototype.setFromEuler = function ( x, y, z, order ) {
          order = order || "XYZ";

          var c1 = Math.cos( x / 2 );
          var c2 = Math.cos( y / 2 );
          var c3 = Math.cos( z / 2 );
          var s1 = Math.sin( x / 2 );
          var s2 = Math.sin( y / 2 );
          var s3 = Math.sin( z / 2 );

          if ( order === 'XYZ' ) {

              this.x = s1 * c2 * c3 + c1 * s2 * s3;
              this.y = c1 * s2 * c3 - s1 * c2 * s3;
              this.z = c1 * c2 * s3 + s1 * s2 * c3;
              this.w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'YXZ' ) {

              this.x = s1 * c2 * c3 + c1 * s2 * s3;
              this.y = c1 * s2 * c3 - s1 * c2 * s3;
              this.z = c1 * c2 * s3 - s1 * s2 * c3;
              this.w = c1 * c2 * c3 + s1 * s2 * s3;

          } else if ( order === 'ZXY' ) {

              this.x = s1 * c2 * c3 - c1 * s2 * s3;
              this.y = c1 * s2 * c3 + s1 * c2 * s3;
              this.z = c1 * c2 * s3 + s1 * s2 * c3;
              this.w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'ZYX' ) {

              this.x = s1 * c2 * c3 - c1 * s2 * s3;
              this.y = c1 * s2 * c3 + s1 * c2 * s3;
              this.z = c1 * c2 * s3 - s1 * s2 * c3;
              this.w = c1 * c2 * c3 + s1 * s2 * s3;

          } else if ( order === 'YZX' ) {

              this.x = s1 * c2 * c3 + c1 * s2 * s3;
              this.y = c1 * s2 * c3 + s1 * c2 * s3;
              this.z = c1 * c2 * s3 - s1 * s2 * c3;
              this.w = c1 * c2 * c3 - s1 * s2 * s3;

          } else if ( order === 'XZY' ) {

              this.x = s1 * c2 * c3 - c1 * s2 * s3;
              this.y = c1 * s2 * c3 - s1 * c2 * s3;
              this.z = c1 * c2 * s3 + s1 * s2 * c3;
              this.w = c1 * c2 * c3 + s1 * s2 * s3;

          }

          return this;
      };

      /**
       * @method clone
       * @return {Quaternion}
       */
      Quaternion.prototype.clone = function(){
          return new Quaternion(this.x, this.y, this.z, this.w);
      };

      /**
       * Performs a spherical linear interpolation between two quat
       *
       * @method slerp
       * @param {Quaternion} toQuat second operand
       * @param {Number} t interpolation amount between the self quaternion and toQuat
       * @param {Quaternion} [target] A quaternion to store the result in. If not provided, a new one will be created.
       * @returns {Quaternion} The "target" object
       */
      Quaternion.prototype.slerp = function (toQuat, t, target) {
          target = target || new Quaternion();

          var ax = this.x,
              ay = this.y,
              az = this.z,
              aw = this.w,
              bx = toQuat.x,
              by = toQuat.y,
              bz = toQuat.z,
              bw = toQuat.w;

          var omega, cosom, sinom, scale0, scale1;

          // calc cosine
          cosom = ax * bx + ay * by + az * bz + aw * bw;

          // adjust signs (if necessary)
          if ( cosom < 0.0 ) {
              cosom = -cosom;
              bx = - bx;
              by = - by;
              bz = - bz;
              bw = - bw;
          }

          // calculate coefficients
          if ( (1.0 - cosom) > 0.000001 ) {
              // standard case (slerp)
              omega  = Math.acos(cosom);
              sinom  = Math.sin(omega);
              scale0 = Math.sin((1.0 - t) * omega) / sinom;
              scale1 = Math.sin(t * omega) / sinom;
          } else {
              // "from" and "to" quaternions are very close
              //  ... so we can do a linear interpolation
              scale0 = 1.0 - t;
              scale1 = t;
          }

          // calculate final values
          target.x = scale0 * ax + scale1 * bx;
          target.y = scale0 * ay + scale1 * by;
          target.z = scale0 * az + scale1 * bz;
          target.w = scale0 * aw + scale1 * bw;

          return target;
      };

      /**
       * Rotate an absolute orientation quaternion given an angular velocity and a time step.
       * @param  {Vec3} angularVelocity
       * @param  {number} dt
       * @param  {Vec3} angularFactor
       * @param  {Quaternion} target
       * @return {Quaternion} The "target" object
       */
      Quaternion.prototype.integrate = function(angularVelocity, dt, angularFactor, target){
          target = target || new Quaternion();

          var ax = angularVelocity.x * angularFactor.x,
              ay = angularVelocity.y * angularFactor.y,
              az = angularVelocity.z * angularFactor.z,
              bx = this.x,
              by = this.y,
              bz = this.z,
              bw = this.w;

          var half_dt = dt * 0.5;

          target.x += half_dt * (ax * bw + ay * bz - az * by);
          target.y += half_dt * (ay * bw + az * bx - ax * bz);
          target.z += half_dt * (az * bw + ax * by - ay * bx);
          target.w += half_dt * (- ax * bx - ay * by - az * bz);

          return target;
      };

      Quaternion.prototype.euqals = function(v){
          return this.x===v.x&&this.y===v.y&&this.z===v.z&&this.w===v.w;
      };
      },{"./Vec3":31}],30:[function(_dereq_,module,exports){
      var Vec3 = _dereq_('./Vec3');
      var Quaternion = _dereq_('./Quaternion');

      module.exports = Transform;

      /**
       * @class Transform
       * @constructor
       */
      function Transform(options) {
          options = options || {};

      	/**
      	 * @property {Vec3} position
      	 */
      	this.position = new Vec3();
          if(options.position){
              this.position.copy(options.position);
          }

      	/**
      	 * @property {Quaternion} quaternion
      	 */
      	this.quaternion = new Quaternion();
          if(options.quaternion){
              this.quaternion.copy(options.quaternion);
          }
      }

      var tmpQuat = new Quaternion();

      /**
       * @static
       * @method pointToLocaFrame
       * @param {Vec3} position
       * @param {Quaternion} quaternion
       * @param {Vec3} worldPoint
       * @param {Vec3} result
       */
      Transform.pointToLocalFrame = function(position, quaternion, worldPoint, result){
          var result = result || new Vec3();
          worldPoint.vsub(position, result);
          quaternion.conjugate(tmpQuat);
          tmpQuat.vmult(result, result);
          return result;
      };

      /**
       * Get a global point in local transform coordinates.
       * @method pointToLocal
       * @param  {Vec3} point
       * @param  {Vec3} result
       * @return {Vec3} The "result" vector object
       */
      Transform.prototype.pointToLocal = function(worldPoint, result){
          return Transform.pointToLocalFrame(this.position, this.quaternion, worldPoint, result);
      };

      /**
       * @static
       * @method pointToWorldFrame
       * @param {Vec3} position
       * @param {Vec3} quaternion
       * @param {Vec3} localPoint
       * @param {Vec3} result
       */
      Transform.pointToWorldFrame = function(position, quaternion, localPoint, result){
          var result = result || new Vec3();
          quaternion.vmult(localPoint, result);
          result.vadd(position, result);
          return result;
      };

      /**
       * Get a local point in global transform coordinates.
       * @method pointToWorld
       * @param  {Vec3} point
       * @param  {Vec3} result
       * @return {Vec3} The "result" vector object
       */
      Transform.prototype.pointToWorld = function(localPoint, result){
          return Transform.pointToWorldFrame(this.position, this.quaternion, localPoint, result);
      };


      Transform.prototype.vectorToWorldFrame = function(localVector, result){
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
      };

      Transform.vectorToWorldFrame = function(quaternion, localVector, result){
          quaternion.vmult(localVector, result);
          return result;
      };

      Transform.vectorToLocalFrame = function(position, quaternion, worldVector, result){
          var result = result || new Vec3();
          quaternion.w *= -1;
          quaternion.vmult(worldVector, result);
          quaternion.w *= -1;
          return result;
      };

      },{"./Quaternion":29,"./Vec3":31}],31:[function(_dereq_,module,exports){
      module.exports = Vec3;

      var Mat3 = _dereq_('./Mat3');

      /**
       * 3-dimensional vector
       * @class Vec3
       * @constructor
       * @param {Number} x
       * @param {Number} y
       * @param {Number} z
       * @author schteppe
       * @example
       *     var v = new Vec3(1, 2, 3);
       *     console.log('x=' + v.x); // x=1
       */
      function Vec3(x,y,z){
          /**
           * @property x
           * @type {Number}
           */
          this.x = x||0.0;

          /**
           * @property y
           * @type {Number}
           */
          this.y = y||0.0;

          /**
           * @property z
           * @type {Number}
           */
          this.z = z||0.0;
      }

      /**
       * @static
       * @property {Vec3} ZERO
       */
      Vec3.ZERO = new Vec3(0, 0, 0);

      /**
       * @static
       * @property {Vec3} UNIT_X
       */
      Vec3.UNIT_X = new Vec3(1, 0, 0);

      /**
       * @static
       * @property {Vec3} UNIT_Y
       */
      Vec3.UNIT_Y = new Vec3(0, 1, 0);

      /**
       * @static
       * @property {Vec3} UNIT_Z
       */
      Vec3.UNIT_Z = new Vec3(0, 0, 1);

      /**
       * Vector cross product
       * @method cross
       * @param {Vec3} v
       * @param {Vec3} target Optional. Target to save in.
       * @return {Vec3}
       */
      Vec3.prototype.cross = function(v,target){
          var vx=v.x, vy=v.y, vz=v.z, x=this.x, y=this.y, z=this.z;
          target = target || new Vec3();

          target.x = (y * vz) - (z * vy);
          target.y = (z * vx) - (x * vz);
          target.z = (x * vy) - (y * vx);

          return target;
      };

      /**
       * Set the vectors' 3 elements
       * @method set
       * @param {Number} x
       * @param {Number} y
       * @param {Number} z
       * @return Vec3
       */
      Vec3.prototype.set = function(x,y,z){
          this.x = x;
          this.y = y;
          this.z = z;
          return this;
      };

      /**
       * Set all components of the vector to zero.
       * @method setZero
       */
      Vec3.prototype.setZero = function(){
          this.x = this.y = this.z = 0;
      };

      /**
       * Vector addition
       * @method vadd
       * @param {Vec3} v
       * @param {Vec3} target Optional.
       * @return {Vec3}
       */
      Vec3.prototype.vadd = function(v,target){
          if(target){
              target.x = v.x + this.x;
              target.y = v.y + this.y;
              target.z = v.z + this.z;
          } else {
              return new Vec3(this.x + v.x,
                                     this.y + v.y,
                                     this.z + v.z);
          }
      };

      /**
       * Vector subtraction
       * @method vsub
       * @param {Vec3} v
       * @param {Vec3} target Optional. Target to save in.
       * @return {Vec3}
       */
      Vec3.prototype.vsub = function(v,target){
          if(target){
              target.x = this.x - v.x;
              target.y = this.y - v.y;
              target.z = this.z - v.z;
          } else {
              return new Vec3(this.x-v.x,
                                     this.y-v.y,
                                     this.z-v.z);
          }
      };

      /**
       * Get the cross product matrix a_cross from a vector, such that a x b = a_cross * b = c
       * @method crossmat
       * @see http://www8.cs.umu.se/kurser/TDBD24/VT06/lectures/Lecture6.pdf
       * @return {Mat3}
       */
      Vec3.prototype.crossmat = function(){
          return new Mat3([     0,  -this.z,   this.y,
                                  this.z,        0,  -this.x,
                                 -this.y,   this.x,        0]);
      };

      /**
       * Normalize the vector. Note that this changes the values in the vector.
       * @method normalize
       * @return {Number} Returns the norm of the vector
       */
      Vec3.prototype.normalize = function(){
          var x=this.x, y=this.y, z=this.z;
          var n = Math.sqrt(x*x + y*y + z*z);
          if(n>0.0){
              var invN = 1/n;
              this.x *= invN;
              this.y *= invN;
              this.z *= invN;
          } else {
              // Make something up
              this.x = 0;
              this.y = 0;
              this.z = 0;
          }
          return n;
      };

      /**
       * Get the version of this vector that is of length 1.
       * @method unit
       * @param {Vec3} target Optional target to save in
       * @return {Vec3} Returns the unit vector
       */
      Vec3.prototype.unit = function(target){
          target = target || new Vec3();
          var x=this.x, y=this.y, z=this.z;
          var ninv = Math.sqrt(x*x + y*y + z*z);
          if(ninv>0.0){
              ninv = 1.0/ninv;
              target.x = x * ninv;
              target.y = y * ninv;
              target.z = z * ninv;
          } else {
              target.x = 1;
              target.y = 0;
              target.z = 0;
          }
          return target;
      };

      /**
       * Get the length of the vector
       * @method norm
       * @return {Number}
       * @deprecated Use .length() instead
       */
      Vec3.prototype.norm = function(){
          var x=this.x, y=this.y, z=this.z;
          return Math.sqrt(x*x + y*y + z*z);
      };

      /**
       * Get the length of the vector
       * @method length
       * @return {Number}
       */
      Vec3.prototype.length = Vec3.prototype.norm;

      /**
       * Get the squared length of the vector
       * @method norm2
       * @return {Number}
       * @deprecated Use .lengthSquared() instead.
       */
      Vec3.prototype.norm2 = function(){
          return this.dot(this);
      };

      /**
       * Get the squared length of the vector.
       * @method lengthSquared
       * @return {Number}
       */
      Vec3.prototype.lengthSquared = Vec3.prototype.norm2;

      /**
       * Get distance from this point to another point
       * @method distanceTo
       * @param  {Vec3} p
       * @return {Number}
       */
      Vec3.prototype.distanceTo = function(p){
          var x=this.x, y=this.y, z=this.z;
          var px=p.x, py=p.y, pz=p.z;
          return Math.sqrt((px-x)*(px-x)+
                           (py-y)*(py-y)+
                           (pz-z)*(pz-z));
      };

      /**
       * Get squared distance from this point to another point
       * @method distanceSquared
       * @param  {Vec3} p
       * @return {Number}
       */
      Vec3.prototype.distanceSquared = function(p){
          var x=this.x, y=this.y, z=this.z;
          var px=p.x, py=p.y, pz=p.z;
          return (px-x)*(px-x) + (py-y)*(py-y) + (pz-z)*(pz-z);
      };

      /**
       * Multiply all the components of the vector with a scalar.
       * @deprecated Use .scale instead
       * @method mult
       * @param {Number} scalar
       * @param {Vec3} target The vector to save the result in.
       * @return {Vec3}
       * @deprecated Use .scale() instead
       */
      Vec3.prototype.mult = function(scalar,target){
          target = target || new Vec3();
          var x = this.x,
              y = this.y,
              z = this.z;
          target.x = scalar * x;
          target.y = scalar * y;
          target.z = scalar * z;
          return target;
      };

      /**
       * Multiply the vector with an other vector, component-wise.
       * @method mult
       * @param {Number} vector
       * @param {Vec3} target The vector to save the result in.
       * @return {Vec3}
       */
      Vec3.prototype.vmul = function(vector, target){
          target = target || new Vec3();
          target.x = vector.x * this.x;
          target.y = vector.y * this.y;
          target.z = vector.z * this.z;
          return target;
      };

      /**
       * Multiply the vector with a scalar.
       * @method scale
       * @param {Number} scalar
       * @param {Vec3} target
       * @return {Vec3}
       */
      Vec3.prototype.scale = Vec3.prototype.mult;

      /**
       * Scale a vector and add it to this vector. Save the result in "target". (target = this + vector * scalar)
       * @method addScaledVector
       * @param {Number} scalar
       * @param {Vec3} vector
       * @param {Vec3} target The vector to save the result in.
       * @return {Vec3}
       */
      Vec3.prototype.addScaledVector = function(scalar, vector, target){
          target = target || new Vec3();
          target.x = this.x + scalar * vector.x;
          target.y = this.y + scalar * vector.y;
          target.z = this.z + scalar * vector.z;
          return target;
      };

      /**
       * Calculate dot product
       * @method dot
       * @param {Vec3} v
       * @return {Number}
       */
      Vec3.prototype.dot = function(v){
          return this.x * v.x + this.y * v.y + this.z * v.z;
      };

      /**
       * @method isZero
       * @return bool
       */
      Vec3.prototype.isZero = function(){
          return this.x===0 && this.y===0 && this.z===0;
      };

      /**
       * Make the vector point in the opposite direction.
       * @method negate
       * @param {Vec3} target Optional target to save in
       * @return {Vec3}
       */
      Vec3.prototype.negate = function(target){
          target = target || new Vec3();
          target.x = -this.x;
          target.y = -this.y;
          target.z = -this.z;
          return target;
      };

      /**
       * Compute two artificial tangents to the vector
       * @method tangents
       * @param {Vec3} t1 Vector object to save the first tangent in
       * @param {Vec3} t2 Vector object to save the second tangent in
       */
      var Vec3_tangents_n = new Vec3();
      var Vec3_tangents_randVec = new Vec3();
      Vec3.prototype.tangents = function(t1,t2){
          var norm = this.norm();
          if(norm>0.0){
              var n = Vec3_tangents_n;
              var inorm = 1/norm;
              n.set(this.x*inorm,this.y*inorm,this.z*inorm);
              var randVec = Vec3_tangents_randVec;
              if(Math.abs(n.x) < 0.9){
                  randVec.set(1,0,0);
                  n.cross(randVec,t1);
              } else {
                  randVec.set(0,1,0);
                  n.cross(randVec,t1);
              }
              n.cross(t1,t2);
          } else {
              // The normal length is zero, make something up
              t1.set(1, 0, 0);
              t2.set(0, 1, 0);
          }
      };

      /**
       * Converts to a more readable format
       * @method toString
       * @return string
       */
      Vec3.prototype.toString = function(){
          return this.x+","+this.y+","+this.z;
      };

      /**
       * Converts to an array
       * @method toArray
       * @return Array
       */
      Vec3.prototype.toArray = function(){
          return [this.x, this.y, this.z];
      };

      /**
       * Copies value of source to this vector.
       * @method copy
       * @param {Vec3} source
       * @return {Vec3} this
       */
      Vec3.prototype.copy = function(source){
          this.x = source.x;
          this.y = source.y;
          this.z = source.z;
          return this;
      };


      /**
       * Do a linear interpolation between two vectors
       * @method lerp
       * @param {Vec3} v
       * @param {Number} t A number between 0 and 1. 0 will make this function return u, and 1 will make it return v. Numbers in between will generate a vector in between them.
       * @param {Vec3} target
       */
      Vec3.prototype.lerp = function(v,t,target){
          var x=this.x, y=this.y, z=this.z;
          target.x = x + (v.x-x)*t;
          target.y = y + (v.y-y)*t;
          target.z = z + (v.z-z)*t;
      };

      /**
       * Check if a vector equals is almost equal to another one.
       * @method almostEquals
       * @param {Vec3} v
       * @param {Number} precision
       * @return bool
       */
      Vec3.prototype.almostEquals = function(v,precision){
          if(precision===undefined){
              precision = 1e-6;
          }
          if( Math.abs(this.x-v.x)>precision ||
              Math.abs(this.y-v.y)>precision ||
              Math.abs(this.z-v.z)>precision){
              return false;
          }
          return true;
      };

      /**
       * Check if a vector is almost zero
       * @method almostZero
       * @param {Number} precision
       */
      Vec3.prototype.almostZero = function(precision){
          if(precision===undefined){
              precision = 1e-6;
          }
          if( Math.abs(this.x)>precision ||
              Math.abs(this.y)>precision ||
              Math.abs(this.z)>precision){
              return false;
          }
          return true;
      };

      var antip_neg = new Vec3();

      /**
       * Check if the vector is anti-parallel to another vector.
       * @method isAntiparallelTo
       * @param  {Vec3}  v
       * @param  {Number}  precision Set to zero for exact comparisons
       * @return {Boolean}
       */
      Vec3.prototype.isAntiparallelTo = function(v,precision){
          this.negate(antip_neg);
          return antip_neg.almostEquals(v,precision);
      };

      /**
       * Clone the vector
       * @method clone
       * @return {Vec3}
       */
      Vec3.prototype.clone = function(){
          return new Vec3(this.x, this.y, this.z);
      };
      },{"./Mat3":28}],32:[function(_dereq_,module,exports){
      module.exports = Body;

      var EventTarget = _dereq_('../utils/EventTarget');
      var Shape = _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Mat3 = _dereq_('../math/Mat3');
      var Quaternion = _dereq_('../math/Quaternion');
      _dereq_('../material/Material');
      var AABB = _dereq_('../collision/AABB');
      var Box = _dereq_('../shapes/Box');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var World = _dereq_('../world/World');

      /**
       * Base class for all body types.
       * @class Body
       * @constructor
       * @extends EventTarget
       * @param {object} [options]
       * @param {Vec3} [options.position]
       * @param {Vec3} [options.velocity]
       * @param {Vec3} [options.angularVelocity]
       * @param {Quaternion} [options.quaternion]
       * @param {number} [options.mass]
       * @param {Material} [options.material]
       * @param {number} [options.type]
       * @param {number} [options.linearDamping=0.01]
       * @param {number} [options.angularDamping=0.01]
       * @param {boolean} [options.allowSleep=true]
       * @param {number} [options.sleepSpeedLimit=0.1]
       * @param {number} [options.sleepTimeLimit=1]
       * @param {number} [options.collisionFilterGroup=1]
       * @param {number} [options.collisionFilterMask=-1]
       * @param {boolean} [options.fixedRotation=false]
       * @param {Vec3} [options.linearFactor]
       * @param {Vec3} [options.angularFactor]
       * @param {Shape} [options.shape]
       * @example
       *     var body = new Body({
       *         mass: 1
       *     });
       *     var shape = new Sphere(1);
       *     body.addShape(shape);
       *     world.addBody(body);
       */
      function Body(options){
          options = options || {};

          EventTarget.apply(this);

          this.id = Body.idCounter++;

          /**
           * Reference to the world the body is living in
           * @property world
           * @type {World}
           */
          this.world = null;

          /**
           * Callback function that is used BEFORE stepping the system. Use it to apply forces, for example. Inside the function, "this" will refer to this Body object.
           * @property preStep
           * @type {Function}
           * @deprecated Use World events instead
           */
          this.preStep = null;

          /**
           * If the body speed exceeds this threshold, CCD (continuous collision detection) will be enabled. Set it to a negative number to disable CCD completely for this body.
           * @property {number} ccdSpeedThreshold
           * @default -1
           */
          this.ccdSpeedThreshold = options.ccdSpeedThreshold !== undefined ? options.ccdSpeedThreshold : -1;
          
          /**
           * The number of iterations that should be used when searching for the time of impact during CCD. A larger number will assure that there's a small penetration on CCD collision, but a small number will give more performance.
           * @property {number} ccdIterations
           * @default 10
           */
          this.ccdIterations = options.ccdIterations !== undefined ? options.ccdIterations : 5;


          /**
           * Callback function that is used AFTER stepping the system. Inside the function, "this" will refer to this Body object.
           * @property postStep
           * @type {Function}
           * @deprecated Use World events instead
           */
          this.postStep = null;

          this.vlambda = new Vec3();

          /**
           * @property {Number} collisionFilterGroup
           */
          this.collisionFilterGroup = typeof(options.collisionFilterGroup) === 'number' ? options.collisionFilterGroup : 1;

          /**
           * @property {Number} collisionFilterMask
           */
          this.collisionFilterMask = typeof(options.collisionFilterMask) === 'number' ? options.collisionFilterMask : -1;

          /**
           * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
           * @property {Number} collisionResponse
           */
          this.collisionResponse = true;

          /**
           * World space position of the body.
           * @property position
           * @type {Vec3}
           */
          this.position = new Vec3();

          /**
           * @property {Vec3} previousPosition
           */
          this.previousPosition = new Vec3();

          /**
           * Interpolated position of the body.
           * @property {Vec3} interpolatedPosition
           */
          this.interpolatedPosition = new Vec3();

          /**
           * Initial position of the body
           * @property initPosition
           * @type {Vec3}
           */
          this.initPosition = new Vec3();

          if(options.position){
              this.position.copy(options.position);
              this.previousPosition.copy(options.position);
              this.interpolatedPosition.copy(options.position);
              this.initPosition.copy(options.position);
          }

          /**
           * World space velocity of the body.
           * @property velocity
           * @type {Vec3}
           */
          this.velocity = new Vec3();

          if(options.velocity){
              this.velocity.copy(options.velocity);
          }

          /**
           * @property initVelocity
           * @type {Vec3}
           */
          this.initVelocity = new Vec3();

          /**
           * Linear force on the body in world space.
           * @property force
           * @type {Vec3}
           */
          this.force = new Vec3();

          var mass = typeof(options.mass) === 'number' ? options.mass : 0;

          /**
           * @property mass
           * @type {Number}
           * @default 0
           */
          this.mass = mass;

          /**
           * @property invMass
           * @type {Number}
           */
          this.invMass = mass > 0 ? 1.0 / mass : 0;

          /**
           * @property material
           * @type {Material}
           */
          this.material = options.material || null;

          /**
           * @property linearDamping
           * @type {Number}
           */
          this.linearDamping = typeof(options.linearDamping) === 'number' ? options.linearDamping : 0.01;

          /**
           * One of: Body.DYNAMIC, Body.STATIC and Body.KINEMATIC.
           * @property type
           * @type {Number}
           */
          this.type = (mass <= 0.0 ? Body.STATIC : Body.DYNAMIC);
          if(typeof(options.type) === typeof(Body.STATIC)){
              this.type = options.type;
          }

          /**
           * If true, the body will automatically fall to sleep.
           * @property allowSleep
           * @type {Boolean}
           * @default true
           */
          this.allowSleep = typeof(options.allowSleep) !== 'undefined' ? options.allowSleep : true;

          /**
           * Current sleep state.
           * @property sleepState
           * @type {Number}
           */
          this.sleepState = 0;

          /**
           * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.
           * @property sleepSpeedLimit
           * @type {Number}
           * @default 0.1
           */
          this.sleepSpeedLimit = typeof(options.sleepSpeedLimit) !== 'undefined' ? options.sleepSpeedLimit : 0.1;

          /**
           * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.
           * @property sleepTimeLimit
           * @type {Number}
           * @default 1
           */
          this.sleepTimeLimit = typeof(options.sleepTimeLimit) !== 'undefined' ? options.sleepTimeLimit : 1;

          this.timeLastSleepy = 0;

          this._wakeUpAfterNarrowphase = false;

          /**
           * World space rotational force on the body, around center of mass.
           * @property {Vec3} torque
           */
          this.torque = new Vec3();

          /**
           * World space orientation of the body.
           * @property quaternion
           * @type {Quaternion}
           */
          this.quaternion = new Quaternion();

          /**
           * @property initQuaternion
           * @type {Quaternion}
           */
          this.initQuaternion = new Quaternion();

          /**
           * @property {Quaternion} previousQuaternion
           */
          this.previousQuaternion = new Quaternion();

          /**
           * Interpolated orientation of the body.
           * @property {Quaternion} interpolatedQuaternion
           */
          this.interpolatedQuaternion = new Quaternion();

          if(options.quaternion){
              this.quaternion.copy(options.quaternion);
              this.initQuaternion.copy(options.quaternion);
              this.previousQuaternion.copy(options.quaternion);
              this.interpolatedQuaternion.copy(options.quaternion);
          }

          /**
           * Angular velocity of the body, in world space. Think of the angular velocity as a vector, which the body rotates around. The length of this vector determines how fast (in radians per second) the body rotates.
           * @property angularVelocity
           * @type {Vec3}
           */
          this.angularVelocity = new Vec3();

          if(options.angularVelocity){
              this.angularVelocity.copy(options.angularVelocity);
          }

          /**
           * @property initAngularVelocity
           * @type {Vec3}
           */
          this.initAngularVelocity = new Vec3();

          /**
           * @property shapes
           * @type {array}
           */
          this.shapes = [];

          /**
           * Position of each Shape in the body, given in local Body space.
           * @property shapeOffsets
           * @type {array}
           */
          this.shapeOffsets = [];

          /**
           * Orientation of each Shape, given in local Body space.
           * @property shapeOrientations
           * @type {array}
           */
          this.shapeOrientations = [];

          /**
           * @property inertia
           * @type {Vec3}
           */
          this.inertia = new Vec3();

          /**
           * @property {Vec3} invInertia
           */
          this.invInertia = new Vec3();

          /**
           * @property {Mat3} invInertiaWorld
           */
          this.invInertiaWorld = new Mat3();

          this.invMassSolve = 0;

          /**
           * @property {Vec3} invInertiaSolve
           */
          this.invInertiaSolve = new Vec3();

          /**
           * @property {Mat3} invInertiaWorldSolve
           */
          this.invInertiaWorldSolve = new Mat3();

          /**
           * Set to true if you don't want the body to rotate. Make sure to run .updateMassProperties() after changing this.
           * @property {Boolean} fixedRotation
           * @default false
           */
          this.fixedRotation = typeof(options.fixedRotation) !== "undefined" ? options.fixedRotation : false;

          /**
           * use gravity ?
           * @property {Boolean} useGravity
           * @default true
           */
          this.useGravity = true;

          /**
           * @property {Number} angularDamping
           */
          this.angularDamping = typeof(options.angularDamping) !== 'undefined' ? options.angularDamping : 0.01;

          /**
           * Use this property to limit the motion along any world axis. (1,1,1) will allow motion along all axes while (0,0,0) allows none.
           * @property {Vec3} linearFactor
           */
          this.linearFactor = new Vec3(1,1,1);
          if(options.linearFactor){
              this.linearFactor.copy(options.linearFactor);
          }

          /**
           * Use this property to limit the rotational motion along any world axis. (1,1,1) will allow rotation along all axes while (0,0,0) allows none.
           * @property {Vec3} angularFactor
           */
          this.angularFactor = new Vec3(1,1,1);
          if(options.angularFactor){
              this.angularFactor.copy(options.angularFactor);
          }

          /**
           * World space bounding box of the body and its shapes.
           * @property aabb
           * @type {AABB}
           */
          this.aabb = new AABB();

          /**
           * Indicates if the AABB needs to be updated before use.
           * @property aabbNeedsUpdate
           * @type {Boolean}
           */
          this.aabbNeedsUpdate = true;

          /**
           * Total bounding radius of the Body including its shapes, relative to body.position.
           * @property boundingRadius
           * @type {Number}
           */
          this.boundingRadius = 0;

          this.wlambda = new Vec3();

          if(options.shape){
              this.addShape(options.shape);
          }

          /**
           * has trigger?
           */
          this.hasTrigger = true;

          this.updateMassProperties();
      }
      Body.prototype = new EventTarget();
      Body.prototype.constructor = Body;

      /**
       * Dispatched after two bodies collide. This event is dispatched on each
       * of the two bodies involved in the collision.
       * @event collide
       * @param {Body} body The body that was involved in the collision.
       * @param {ContactEquation} contact The details of the collision.
       */
      Body.COLLIDE_EVENT_NAME = "collide";

      /**
       * A dynamic body is fully simulated. Can be moved manually by the user, but normally they move according to forces. A dynamic body can collide with all body types. A dynamic body always has finite, non-zero mass.
       * @static
       * @property DYNAMIC
       * @type {Number}
       */
      Body.DYNAMIC = 1;

      /**
       * A static body does not move during simulation and behaves as if it has infinite mass. Static bodies can be moved manually by setting the position of the body. The velocity of a static body is always zero. Static bodies do not collide with other static or kinematic bodies.
       * @static
       * @property STATIC
       * @type {Number}
       */
      Body.STATIC = 2;

      /**
       * A kinematic body moves under simulation according to its velocity. They do not respond to forces. They can be moved manually, but normally a kinematic body is moved by setting its velocity. A kinematic body behaves as if it has infinite mass. Kinematic bodies do not collide with other static or kinematic bodies.
       * @static
       * @property KINEMATIC
       * @type {Number}
       */
      Body.KINEMATIC = 4;



      /**
       * @static
       * @property AWAKE
       * @type {number}
       */
      Body.AWAKE = 0;

      /**
       * @static
       * @property SLEEPY
       * @type {number}
       */
      Body.SLEEPY = 1;

      /**
       * @static
       * @property SLEEPING
       * @type {number}
       */
      Body.SLEEPING = 2;

      Body.idCounter = 0;

      /**
       * Dispatched after a sleeping body has woken up.
       * @event wakeup
       */
      Body.wakeupEvent = {
          type: "wakeup"
      };

      /**
       * Wake the body up.
       * @method wakeUp
       */
      Body.prototype.wakeUp = function(){
          var s = this.sleepState;
          this.sleepState = 0;
          this._wakeUpAfterNarrowphase = false;
          if(s === Body.SLEEPING){
              this.dispatchEvent(Body.wakeupEvent);
          }
      };

      /**
       * Force body sleep
       * @method sleep
       */
      Body.prototype.sleep = function(){
          this.sleepState = Body.SLEEPING;
          this.velocity.set(0,0,0);
          this.angularVelocity.set(0,0,0);
          this._wakeUpAfterNarrowphase = false;
      };

      /**
       * Dispatched after a body has gone in to the sleepy state.
       * @event sleepy
       */
      Body.sleepyEvent = {
          type: "sleepy"
      };

      /**
       * Dispatched after a body has fallen asleep.
       * @event sleep
       */
      Body.sleepEvent = {
          type: "sleep"
      };

      /**
       * Called every timestep to update internal sleep timer and change sleep state if needed.
       * @method sleepTick
       * @param {Number} time The world time in seconds
       */
      Body.prototype.sleepTick = function(time){
          if(this.allowSleep){
              var sleepState = this.sleepState;
              var speedSquared = this.velocity.norm2() + this.angularVelocity.norm2();
              var speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);
              if(sleepState===Body.AWAKE && speedSquared < speedLimitSquared){
                  this.sleepState = Body.SLEEPY; // Sleepy
                  this.timeLastSleepy = time;
                  this.dispatchEvent(Body.sleepyEvent);
              } else if(sleepState===Body.SLEEPY && speedSquared > speedLimitSquared){
                  this.wakeUp(); // Wake up
              } else if(sleepState===Body.SLEEPY && (time - this.timeLastSleepy ) > this.sleepTimeLimit){
                  this.sleep(); // Sleeping
                  this.dispatchEvent(Body.sleepEvent);
              }
          }
      };

      /**
       * If the body is sleeping, it should be immovable / have infinite mass during solve. We solve it by having a separate "solve mass".
       * @method updateSolveMassProperties
       */
      Body.prototype.updateSolveMassProperties = function(){
          if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){
              this.invMassSolve = 0;
              this.invInertiaSolve.setZero();
              this.invInertiaWorldSolve.setZero();
          } else {
              this.invMassSolve = this.invMass;
              this.invInertiaSolve.copy(this.invInertia);
              this.invInertiaWorldSolve.copy(this.invInertiaWorld);
          }
      };

      /**
       * Convert a world point to local body frame.
       * @method pointToLocalFrame
       * @param  {Vec3} worldPoint
       * @param  {Vec3} result
       * @return {Vec3}
       */
      Body.prototype.pointToLocalFrame = function(worldPoint,result){
          var result = result || new Vec3();
          worldPoint.vsub(this.position,result);
          this.quaternion.conjugate().vmult(result,result);
          return result;
      };

      /**
       * Convert a world vector to local body frame.
       * @method vectorToLocalFrame
       * @param  {Vec3} worldPoint
       * @param  {Vec3} result
       * @return {Vec3}
       */
      Body.prototype.vectorToLocalFrame = function(worldVector, result){
          var result = result || new Vec3();
          this.quaternion.conjugate().vmult(worldVector,result);
          return result;
      };

      /**
       * Convert a local body point to world frame.
       * @method pointToWorldFrame
       * @param  {Vec3} localPoint
       * @param  {Vec3} result
       * @return {Vec3}
       */
      Body.prototype.pointToWorldFrame = function(localPoint,result){
          var result = result || new Vec3();
          this.quaternion.vmult(localPoint,result);
          result.vadd(this.position,result);
          return result;
      };

      /**
       * Convert a local body point to world frame.
       * @method vectorToWorldFrame
       * @param  {Vec3} localVector
       * @param  {Vec3} result
       * @return {Vec3}
       */
      Body.prototype.vectorToWorldFrame = function(localVector, result){
          var result = result || new Vec3();
          this.quaternion.vmult(localVector, result);
          return result;
      };

      var tmpVec = new Vec3();
      var tmpQuat = new Quaternion();

      /**
       * Add a shape to the body with a local offset and orientation.
       * @method addShape
       * @param {Shape} shape
       * @param {Vec3} [_offset]
       * @param {Quaternion} [_orientation]
       * @return {Body} The body object, for chainability.
       */
      Body.prototype.addShape = function(shape, _offset, _orientation){
          var offset = new Vec3();
          var orientation = new Quaternion();

          if(_offset){
              offset.copy(_offset);
          }
          if(_orientation){
              orientation.copy(_orientation);
          }

          this.shapes.push(shape);
          this.shapeOffsets.push(offset);
          this.shapeOrientations.push(orientation);
          this.aabbNeedsUpdate = true;
          this.updateMassProperties();
          this.updateBoundingRadius();

          this.updateHasTrigger();
          World.idToShapeMap[shape.id] = shape;
          shape.body = this;

          return this;
      };

      /**
       * Remove a shape from the body
       */
      Body.prototype.removeShape = function(shape){   
          var idx = this.shapes.indexOf(shape);
          if (idx === -1) {
              return;
          }
          // shape.body = null;  needed ?
          // delete World.idToShapeMap[shape.id];  needed ?

          this.shapes.splice(idx, 1);
          this.shapeOffsets.splice(idx, 1);
          this.shapeOrientations.splice(idx, 1);

          this.aabbNeedsUpdate = true;
          this.updateMassProperties();
          this.updateBoundingRadius();
          this.updateHasTrigger();
      };

      /**
       * Update the bounding radius of the body. Should be done if any of the shapes are changed.
       * @method updateBoundingRadius
       */
      Body.prototype.updateBoundingRadius = function(){
          var shapes = this.shapes,
              shapeOffsets = this.shapeOffsets,
              N = shapes.length,
              radius = 0;

          for(var i=0; i!==N; i++){
              var shape = shapes[i];
              shape.updateBoundingSphereRadius();
              var offset = shapeOffsets[i].norm(),
                  r = shape.boundingSphereRadius;
              if(offset + r > radius){
                  radius = offset + r;
              }
          }

          this.boundingRadius = radius;
      };

      var computeAABB_shapeAABB = new AABB();

      /**
       * Updates the .aabb
       * @method computeAABB
       * @todo rename to updateAABB()
       */
      Body.prototype.computeAABB = function(){
          var shapes = this.shapes,
              shapeOffsets = this.shapeOffsets,
              shapeOrientations = this.shapeOrientations,
              N = shapes.length,
              offset = tmpVec,
              orientation = tmpQuat,
              bodyQuat = this.quaternion,
              aabb = this.aabb,
              shapeAABB = computeAABB_shapeAABB;

          for(var i=0; i!==N; i++){
              var shape = shapes[i];

              // Get shape world position
              bodyQuat.vmult(shapeOffsets[i], offset);
              offset.vadd(this.position, offset);

              // Get shape world quaternion
              shapeOrientations[i].mult(bodyQuat, orientation);

              // Get shape AABB
              shape.calculateWorldAABB(offset, orientation, shapeAABB.lowerBound, shapeAABB.upperBound);

              if(i === 0){
                  aabb.copy(shapeAABB);
              } else {
                  aabb.extend(shapeAABB);
              }
          }

          this.aabbNeedsUpdate = false;
      };

      var uiw_m1 = new Mat3(),
          uiw_m2 = new Mat3();
          new Mat3();

      /**
       * Update .inertiaWorld and .invInertiaWorld
       * @method updateInertiaWorld
       */
      Body.prototype.updateInertiaWorld = function(force){
          var I = this.invInertia;
          if (I.x === I.y && I.y === I.z && !force) ; else {
              var m1 = uiw_m1,
                  m2 = uiw_m2;
              m1.setRotationFromQuaternion(this.quaternion);
              m1.transpose(m2);
              m1.scale(I,m1);
              m1.mmult(m2,this.invInertiaWorld);
          }
      };

      /**
       * Apply force to a world point. This could for example be a point on the Body surface. Applying force this way will add to Body.force and Body.torque.
       * @method applyForce
       * @param  {Vec3} force The amount of force to add.
       * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
       */
      new Vec3();
      var Body_applyForce_rotForce = new Vec3();
      Body.prototype.applyForce = function(force,relativePoint){
          if(this.type !== Body.DYNAMIC){ // Needed?
              return;
          }

          // Compute produced rotational force
          var rotForce = Body_applyForce_rotForce;
          relativePoint.cross(force,rotForce);

          // Add linear force
          this.force.vadd(force,this.force);

          // Add rotational force
          this.torque.vadd(rotForce,this.torque);
      };

      /**
       * Apply force to a local point in the body.
       * @method applyLocalForce
       * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
       * @param  {Vec3} localPoint A local point in the body to apply the force on.
       */
      var Body_applyLocalForce_worldForce = new Vec3();
      var Body_applyLocalForce_relativePointWorld = new Vec3();
      Body.prototype.applyLocalForce = function(localForce, localPoint){
          if(this.type !== Body.DYNAMIC){
              return;
          }

          var worldForce = Body_applyLocalForce_worldForce;
          var relativePointWorld = Body_applyLocalForce_relativePointWorld;

          // Transform the force vector to world space
          this.vectorToWorldFrame(localForce, worldForce);
          this.vectorToWorldFrame(localPoint, relativePointWorld);

          this.applyForce(worldForce, relativePointWorld);
      };

      /**
       * Apply impulse to a world point. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.
       * @method applyImpulse
       * @param  {Vec3} impulse The amount of impulse to add.
       * @param  {Vec3} relativePoint A point relative to the center of mass to apply the force on.
       */
      new Vec3();
      var Body_applyImpulse_velo = new Vec3();
      var Body_applyImpulse_rotVelo = new Vec3();
      Body.prototype.applyImpulse = function(impulse, relativePoint){
          if(this.type !== Body.DYNAMIC){
              return;
          }

          // Compute point position relative to the body center
          var r = relativePoint;

          // Compute produced central impulse velocity
          var velo = Body_applyImpulse_velo;
          velo.copy(impulse);
          velo.mult(this.invMass,velo);

          // Add linear impulse
          this.velocity.vadd(velo, this.velocity);

          // Compute produced rotational impulse velocity
          var rotVelo = Body_applyImpulse_rotVelo;
          r.cross(impulse,rotVelo);

          /*
          rotVelo.x *= this.invInertia.x;
          rotVelo.y *= this.invInertia.y;
          rotVelo.z *= this.invInertia.z;
          */
          this.invInertiaWorld.vmult(rotVelo,rotVelo);

          // Add rotational Impulse
          this.angularVelocity.vadd(rotVelo, this.angularVelocity);
      };

      /**
       * Apply locally-defined impulse to a local point in the body.
       * @method applyLocalImpulse
       * @param  {Vec3} force The force vector to apply, defined locally in the body frame.
       * @param  {Vec3} localPoint A local point in the body to apply the force on.
       */
      var Body_applyLocalImpulse_worldImpulse = new Vec3();
      var Body_applyLocalImpulse_relativePoint = new Vec3();
      Body.prototype.applyLocalImpulse = function(localImpulse, localPoint){
          if(this.type !== Body.DYNAMIC){
              return;
          }

          var worldImpulse = Body_applyLocalImpulse_worldImpulse;
          var relativePointWorld = Body_applyLocalImpulse_relativePoint;

          // Transform the force vector to world space
          this.vectorToWorldFrame(localImpulse, worldImpulse);
          this.vectorToWorldFrame(localPoint, relativePointWorld);

          this.applyImpulse(worldImpulse, relativePointWorld);
      };

      var Body_updateMassProperties_halfExtents = new Vec3();

      /**
       * Should be called whenever you change the body shape or mass.
       * @method updateMassProperties
       */
      Body.prototype.updateMassProperties = function(){
          var halfExtents = Body_updateMassProperties_halfExtents;

          this.invMass = this.mass > 0 ? 1.0 / this.mass : 0;
          var I = this.inertia;
          var fixed = this.fixedRotation;

          // Approximate with AABB box
          this.computeAABB();
          halfExtents.set(
              (this.aabb.upperBound.x-this.aabb.lowerBound.x) / 2,
              (this.aabb.upperBound.y-this.aabb.lowerBound.y) / 2,
              (this.aabb.upperBound.z-this.aabb.lowerBound.z) / 2
          );
          Box.calculateInertia(halfExtents, this.mass, I);

          this.invInertia.set(
              I.x > 0 && !fixed ? 1.0 / I.x : 0,
              I.y > 0 && !fixed ? 1.0 / I.y : 0,
              I.z > 0 && !fixed ? 1.0 / I.z : 0
          );
          this.updateInertiaWorld(true);
      };

      /**
       * Get world velocity of a point in the body.
       * @method getVelocityAtWorldPoint
       * @param  {Vec3} worldPoint
       * @param  {Vec3} result
       * @return {Vec3} The result vector.
       */
      Body.prototype.getVelocityAtWorldPoint = function(worldPoint, result){
          var r = new Vec3();
          worldPoint.vsub(this.position, r);
          this.angularVelocity.cross(r, result);
          this.velocity.vadd(result, result);
          return result;
      };

      new Vec3();
      new Vec3();
      var integrate_velodt = new Vec3();
      new Quaternion();
      var wq = new Quaternion();

      /**
       * Move the body forward in time.
       * @param {number} dt Time step
       * @param {boolean} quatNormalize Set to true to normalize the body quaternion
       * @param {boolean} quatNormalizeFast If the quaternion should be normalized using "fast" quaternion normalization
       */
      Body.prototype.integrate = function(dt, quatNormalize, quatNormalizeFast){

          // Save previous position
          this.previousPosition.copy(this.position);
          this.previousQuaternion.copy(this.quaternion);

          // Only for dynamic
          if(!(this.type === Body.DYNAMIC || (World.integrateKinematic && this.type === Body.KINEMATIC)) || this.sleepState === Body.SLEEPING){
              return;
          }

          var velo = this.velocity,
              angularVelo = this.angularVelocity,
              pos = this.position,
              force = this.force,
              torque = this.torque,
              quat = this.quaternion,
              invMass = this.invMass,
              invInertia = this.invInertiaWorld,
              linearFactor = this.linearFactor;

          var iMdt = invMass * dt;
          velo.x += force.x * iMdt * linearFactor.x;
          velo.y += force.y * iMdt * linearFactor.y;
          velo.z += force.z * iMdt * linearFactor.z;

          var e = invInertia.elements;
          var angularFactor = this.angularFactor;
          var tx = torque.x * angularFactor.x;
          var ty = torque.y * angularFactor.y;
          var tz = torque.z * angularFactor.z;
          angularVelo.x += dt * (e[0] * tx + e[1] * ty + e[2] * tz);
          angularVelo.y += dt * (e[3] * tx + e[4] * ty + e[5] * tz);
          angularVelo.z += dt * (e[6] * tx + e[7] * ty + e[8] * tz);

          // Use new velocity  - leap frog

          quat.integrate(this.angularVelocity, dt, this.angularFactor, quat);

          if(quatNormalize){
              if(quatNormalizeFast){
                  quat.normalizeFast();
              } else {
                  quat.normalize();
              }
          }

          // CCD
          if(this.type === Body.DYNAMIC && this.ccdSpeedThreshold > 0 && this.velocity.length() >= Math.pow(this.ccdSpeedThreshold, 2)){
              if(!this.integrateToTimeOfImpact(dt)){
                  // Regular position update
                  velo.mult(dt, integrate_velodt);
                  pos.vadd(integrate_velodt, pos);
              }
          } else {
              // Regular position update
              velo.mult(dt, integrate_velodt);
              pos.vadd(integrate_velodt, pos);
          }

          this.aabbNeedsUpdate = true;

          // Update world inertia
          this.updateInertiaWorld();
      };

      Body.prototype.updateKinematic = function (dt) {
          if (this.type === Body.KINEMATIC && dt !== 0) {
              this.velocity.setZero();
              this.angularVelocity.setZero();
              var invDt = 1 / dt;
              if (!this.previousPosition.almostEquals(this.position)) {
                  this.position.vsub(this.previousPosition, this.velocity);
                  this.velocity.mult(invDt, this.velocity);
                  this.aabbNeedsUpdate = true;
              }
              if (!this.previousQuaternion.euqals(this.quaternion)) {
                  this.previousQuaternion.conjugate(wq);
                  wq.mult(this.quaternion, wq);
                  wq.toEuler(this.angularVelocity);
                  this.angularVelocity.mult(invDt, this.angularVelocity);
                  this.aabbNeedsUpdate = true;
              }
          }
      };

      Body.prototype.applyGravity = function (gravity) {
          if (this.type === Body.DYNAMIC) {
              // zero external force if damping = 1
              if(this.linearDamping == 1) {
                  this.force.setZero();
              } else {
                  if (this.useGravity) {
                      var gx = gravity.x, gy = gravity.y, gz = gravity.z;
                      var f = this.force, m = this.mass;
                      f.x += m*gx; f.y += m*gy; f.z += m*gz;
                  }
              }
              if(this.angularDamping == 1) {
                  this.torque.setZero();
              }
          }
      };

      var direction = new Vec3();
      var end = new Vec3();
      var end2 = new Vec3();
      var end3 = new Vec3();
      var startToEnd = new Vec3();
      var rememberPosition = new Vec3();
      var result = new RaycastResult();
      var result1 = new RaycastResult();
      var result2 = new RaycastResult();
      var v3_0 = new Vec3();
      var v3_1 = new Vec3();
      var vel_norm = new Vec3();
      var m33 = new Mat3();
      Body.prototype.integrateToTimeOfImpact = function(dt){
          direction.copy(this.velocity);
          direction.normalize();

          this.velocity.mult(dt, end2);
          end2.vadd(this.position, end);

          end.vsub(this.position, startToEnd);
          var len = startToEnd.length();

          var hitBody;
          var g = this.collisionFilterGroup;
          this.collisionFilterGroup = 0;
          var radius = 1;
          for(var i=0; i<this.shapes.length; i++){
              var shape = this.shapes[i];
              var opt = {
                  collisionFilterMask: shape.collisionFilterMask,
                  collisionFilterGroup: shape.collisionFilterGroup,
                  skipBackfaces: true
              };
              v3_0.copy(this.position); // ray start
              v3_0.vadd(startToEnd, v3_1); // ray end
              Body.DrawLine(v3_0, v3_1);
              this.world.raycastClosest(v3_0, v3_1, opt, result);
              hitBody = result.body;
              if(shape.type === Shape.types.SPHERE){
                  radius = shape.radius;
                  if(World.ccdSphereAdvance){
                      vel_norm.copy(this.velocity); vel_norm.y = 0;
                      vel_norm.normalize(); v3_0.copy(vel_norm); m33.identity();
                      m33.elements[0] = v3_0.x;
                      m33.elements[1] = -v3_0.z;
                      m33.elements[3] = v3_0.z;
                      m33.elements[4] = v3_0.x;
                      end3.set(0,shape.radius,0);
                      m33.vmult(end3,end3);
                      end3.z=end3.y;end3.y=0;
                      end3.vadd(this.position,v3_0);
                      end2.vadd(v3_0, v3_1);
                      Body.DrawLine(v3_0, v3_1);
                      this.world.raycastClosest(v3_0, v3_1, opt, result1);
                      end3.negate(end3);
                      end3.vadd(this.position,v3_0);
                      end2.vadd(v3_0, v3_1);
                      Body.DrawLine(v3_0, v3_1);
                      this.world.raycastClosest(v3_0, v3_1, opt, result2);
                      if(result1.hasHit){
                          result1.hitPointWorld.vsub(this.position, v3_0);
                          var d = direction.dot(v3_0);
                          if(!result.hasHit||result.distance > d){
                              result.hasHit = true;
                              result.distance = d;
                              hitBody = result1.body;
                              direction.mult(d, v3_0);
                              v3_0.vadd(this.position, result.hitPointWorld);
                          }
                      }
                      if(result2.hasHit){
                          result2.hitPointWorld.vsub(this.position, v3_0);
                          var d = direction.dot(v3_0);
                          if(!result.hasHit||result.distance > d){
                              result.hasHit = true;
                              result.distance = d;
                              hitBody = result2.body;
                              direction.mult(d, v3_0);
                              v3_0.vadd(this.position, result.hitPointWorld);
                          }
                      }
                  }
              }
              if(hitBody)break;
          }
          this.collisionFilterGroup = g;
          if(!hitBody) return false;
          
          if(result.hasHit) Body.DrawSphere(result.hitPointWorld, 0.05);
          if(result1.hasHit) Body.DrawSphere(result1.hitPointWorld, 0.05);
          if(result2.hasHit) Body.DrawSphere(result2.hitPointWorld, 0.05);

          var timeOfImpact = 1;
          end = result.hitPointWorld;
          end.vsub(this.position, startToEnd);
          timeOfImpact = result.distance / len; // guess

          rememberPosition.copy(this.position);

          // Got a start and end point. Approximate time of impact using binary search
          var iter = 0;
          var tmin = 0;
          var tmid = timeOfImpact;
          var tmax = 1;
          while (tmax >= tmin && iter < this.ccdIterations) {
              iter++;

              // calculate the midpoint
              tmid = (tmax + tmin) / 2;

              // Move the body to that point
              startToEnd.mult(tmid, integrate_velodt);
              rememberPosition.vadd(integrate_velodt, this.position);
              this.computeAABB();
              Body.DrawSphere(this.position, radius);
              // check overlap
              var overlaps = this.aabb.overlaps(hitBody.aabb);
              if (overlaps) {
                  var overlapResult = [];
                  this.world.narrowphase.getContacts([this], [hitBody], this.world, overlapResult, [], [], []);
                  overlaps = overlapResult.length > 0;
              }

              if (overlaps) {
                  // change max to search lower interval
                  tmax = tmid;
              } else {
                  // change min to search upper interval
                  tmin = tmid;
              }
          }

          timeOfImpact = tmax; // Need to guarantee overlap to resolve collisions

          this.position.copy(rememberPosition);

          // move to TOI
          startToEnd.mult(timeOfImpact, integrate_velodt);
          this.position.vadd(integrate_velodt, this.position);

          return true;
      };
      Body.DrawSphere=Body.DrawLine=function() {};
      /**
       * Is Sleeping
       */
      Body.prototype.isSleeping = function(){
          return this.sleepState === Body.SLEEPING;
      };

      /**
       * Is Sleepy
       */
      Body.prototype.isSleepy = function(){
          return this.sleepState === Body.SLEEPY;
      };

      /**
       * Is Awake
       */
      Body.prototype.isAwake = function(){
          return this.sleepState === Body.AWAKE;
      };

      /**
       * Update hasTrigger
       */
      Body.prototype.updateHasTrigger = function () {
          for (var i = this.shapes.length; i--;) {
              this.hasTrigger = !this.shapes[i].collisionResponse;
              if (this.hasTrigger) break;
          }
      };

      },{"../collision/AABB":3,"../collision/RaycastResult":11,"../material/Material":26,"../math/Mat3":28,"../math/Quaternion":29,"../math/Vec3":31,"../shapes/Box":38,"../shapes/Shape":44,"../utils/EventTarget":50,"../world/World":57}],33:[function(_dereq_,module,exports){
      _dereq_('./Body');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      _dereq_('../collision/RaycastResult');
      var Ray = _dereq_('../collision/Ray');
      var WheelInfo = _dereq_('../objects/WheelInfo');

      module.exports = RaycastVehicle;

      /**
       * Vehicle helper class that casts rays from the wheel positions towards the ground and applies forces.
       * @class RaycastVehicle
       * @constructor
       * @param {object} [options]
       * @param {Body} [options.chassisBody] The car chassis body.
       * @param {integer} [options.indexRightAxis] Axis to use for right. x=0, y=1, z=2
       * @param {integer} [options.indexLeftAxis]
       * @param {integer} [options.indexUpAxis]
       */
      function RaycastVehicle(options){

          /**
           * @property {Body} chassisBody
           */
          this.chassisBody = options.chassisBody;

          /**
           * An array of WheelInfo objects.
           * @property {array} wheelInfos
           */
          this.wheelInfos = [];

          /**
           * Will be set to true if the car is sliding.
           * @property {boolean} sliding
           */
          this.sliding = false;

          /**
           * @property {World} world
           */
          this.world = null;

          /**
           * Index of the right axis, 0=x, 1=y, 2=z
           * @property {integer} indexRightAxis
           * @default 1
           */
          this.indexRightAxis = typeof(options.indexRightAxis) !== 'undefined' ? options.indexRightAxis : 1;

          /**
           * Index of the forward axis, 0=x, 1=y, 2=z
           * @property {integer} indexForwardAxis
           * @default 0
           */
          this.indexForwardAxis = typeof(options.indexForwardAxis) !== 'undefined' ? options.indexForwardAxis : 0;

          /**
           * Index of the up axis, 0=x, 1=y, 2=z
           * @property {integer} indexUpAxis
           * @default 2
           */
          this.indexUpAxis = typeof(options.indexUpAxis) !== 'undefined' ? options.indexUpAxis : 2;
      }

      new Vec3();
      new Vec3();
      new Vec3();
      var tmpVec4 = new Vec3();
      var tmpVec5 = new Vec3();
      var tmpVec6 = new Vec3();
      new Ray();

      /**
       * Add a wheel. For information about the options, see WheelInfo.
       * @method addWheel
       * @param {object} [options]
       */
      RaycastVehicle.prototype.addWheel = function(options){
          options = options || {};

          var info = new WheelInfo(options);
          var index = this.wheelInfos.length;
          this.wheelInfos.push(info);

          return index;
      };

      /**
       * Set the steering value of a wheel.
       * @method setSteeringValue
       * @param {number} value
       * @param {integer} wheelIndex
       */
      RaycastVehicle.prototype.setSteeringValue = function(value, wheelIndex){
          var wheel = this.wheelInfos[wheelIndex];
          wheel.steering = value;
      };

      new Vec3();

      /**
       * Set the wheel force to apply on one of the wheels each time step
       * @method applyEngineForce
       * @param  {number} value
       * @param  {integer} wheelIndex
       */
      RaycastVehicle.prototype.applyEngineForce = function(value, wheelIndex){
          this.wheelInfos[wheelIndex].engineForce = value;
      };

      /**
       * Set the braking force of a wheel
       * @method setBrake
       * @param {number} brake
       * @param {integer} wheelIndex
       */
      RaycastVehicle.prototype.setBrake = function(brake, wheelIndex){
          this.wheelInfos[wheelIndex].brake = brake;
      };

      /**
       * Add the vehicle including its constraints to the world.
       * @method addToWorld
       * @param {World} world
       */
      RaycastVehicle.prototype.addToWorld = function(world){
          this.constraints;
          world.addBody(this.chassisBody);
          var that = this;
          this.preStepCallback = function(){
              that.updateVehicle(world.dt);
          };
          world.addEventListener('preStep', this.preStepCallback);
          this.world = world;
      };

      /**
       * Get one of the wheel axles, world-oriented.
       * @private
       * @method getVehicleAxisWorld
       * @param  {integer} axisIndex
       * @param  {Vec3} result
       */
      RaycastVehicle.prototype.getVehicleAxisWorld = function(axisIndex, result){
          result.set(
              axisIndex === 0 ? 1 : 0,
              axisIndex === 1 ? 1 : 0,
              axisIndex === 2 ? 1 : 0
          );
          this.chassisBody.vectorToWorldFrame(result, result);
      };

      RaycastVehicle.prototype.updateVehicle = function(timeStep){
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;

          for (var i = 0; i < numWheels; i++) {
              this.updateWheelTransform(i);
          }

          this.currentVehicleSpeedKmHour = 3.6 * chassisBody.velocity.norm();

          var forwardWorld = new Vec3();
          this.getVehicleAxisWorld(this.indexForwardAxis, forwardWorld);

          if (forwardWorld.dot(chassisBody.velocity) < 0){
              this.currentVehicleSpeedKmHour *= -1;
          }

          // simulate suspension
          for (var i = 0; i < numWheels; i++) {
              this.castRay(wheelInfos[i]);
          }

          this.updateSuspension(timeStep);

          var impulse = new Vec3();
          var relpos = new Vec3();
          for (var i = 0; i < numWheels; i++) {
              //apply suspension force
              var wheel = wheelInfos[i];
              var suspensionForce = wheel.suspensionForce;
              if (suspensionForce > wheel.maxSuspensionForce) {
                  suspensionForce = wheel.maxSuspensionForce;
              }
              wheel.raycastResult.hitNormalWorld.scale(suspensionForce * timeStep, impulse);

              wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, relpos);
              chassisBody.applyImpulse(impulse, relpos);
          }

          this.updateFriction(timeStep);

          var hitNormalWorldScaledWithProj = new Vec3();
          var fwd  = new Vec3();
          var vel = new Vec3();
          for (i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];
              //var relpos = new Vec3();
              //wheel.chassisConnectionPointWorld.vsub(chassisBody.position, relpos);
              chassisBody.getVelocityAtWorldPoint(wheel.chassisConnectionPointWorld, vel);

              // Hack to get the rotation in the correct direction
              var m = 1;
              switch(this.indexUpAxis){
              case 1:
                  m = -1;
                  break;
              }

              if (wheel.isInContact) {

                  this.getVehicleAxisWorld(this.indexForwardAxis, fwd);
                  var proj = fwd.dot(wheel.raycastResult.hitNormalWorld);
                  wheel.raycastResult.hitNormalWorld.scale(proj, hitNormalWorldScaledWithProj);

                  fwd.vsub(hitNormalWorldScaledWithProj, fwd);

                  var proj2 = fwd.dot(vel);
                  wheel.deltaRotation = m * proj2 * timeStep / wheel.radius;
              }

              if((wheel.sliding || !wheel.isInContact) && wheel.engineForce !== 0 && wheel.useCustomSlidingRotationalSpeed){
                  // Apply custom rotation when accelerating and sliding
                  wheel.deltaRotation = (wheel.engineForce > 0 ? 1 : -1) * wheel.customSlidingRotationalSpeed * timeStep;
              }

              // Lock wheels
              if(Math.abs(wheel.brake) > Math.abs(wheel.engineForce)){
                  wheel.deltaRotation = 0;
              }

              wheel.rotation += wheel.deltaRotation; // Use the old value
              wheel.deltaRotation *= 0.99; // damping of rotation when not in contact
          }
      };

      RaycastVehicle.prototype.updateSuspension = function(deltaTime) {
          var chassisBody = this.chassisBody;
          var chassisMass = chassisBody.mass;
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;

          for (var w_it = 0; w_it < numWheels; w_it++){
              var wheel = wheelInfos[w_it];

              if (wheel.isInContact){
                  var force;

                  // Spring
                  var susp_length = wheel.suspensionRestLength;
                  var current_length = wheel.suspensionLength;
                  var length_diff = (susp_length - current_length);

                  force = wheel.suspensionStiffness * length_diff * wheel.clippedInvContactDotSuspension;

                  // Damper
                  var projected_rel_vel = wheel.suspensionRelativeVelocity;
                  var susp_damping;
                  if (projected_rel_vel < 0) {
                      susp_damping = wheel.dampingCompression;
                  } else {
                      susp_damping = wheel.dampingRelaxation;
                  }
                  force -= susp_damping * projected_rel_vel;

                  wheel.suspensionForce = force * chassisMass;
                  if (wheel.suspensionForce < 0) {
                      wheel.suspensionForce = 0;
                  }
              } else {
                  wheel.suspensionForce = 0;
              }
          }
      };

      /**
       * Remove the vehicle including its constraints from the world.
       * @method removeFromWorld
       * @param {World} world
       */
      RaycastVehicle.prototype.removeFromWorld = function(world){
          this.constraints;
          world.remove(this.chassisBody);
          world.removeEventListener('preStep', this.preStepCallback);
          this.world = null;
      };

      var castRay_rayvector = new Vec3();
      var castRay_target = new Vec3();
      RaycastVehicle.prototype.castRay = function(wheel) {
          var rayvector = castRay_rayvector;
          var target = castRay_target;

          this.updateWheelTransformWorld(wheel);
          var chassisBody = this.chassisBody;

          var depth = -1;

          var raylen = wheel.suspensionRestLength + wheel.radius;

          wheel.directionWorld.scale(raylen, rayvector);
          var source = wheel.chassisConnectionPointWorld;
          source.vadd(rayvector, target);
          var raycastResult = wheel.raycastResult;

          raycastResult.reset();
          // Turn off ray collision with the chassis temporarily
          var oldState = chassisBody.collisionResponse;
          chassisBody.collisionResponse = false;

          // Cast ray against world
          this.world.rayTest(source, target, raycastResult);
          chassisBody.collisionResponse = oldState;

          var object = raycastResult.body;

          wheel.raycastResult.groundObject = 0;

          if (object) {
              depth = raycastResult.distance;
              wheel.raycastResult.hitNormalWorld  = raycastResult.hitNormalWorld;
              wheel.isInContact = true;

              var hitDistance = raycastResult.distance;
              wheel.suspensionLength = hitDistance - wheel.radius;

              // clamp on max suspension travel
              var minSuspensionLength = wheel.suspensionRestLength - wheel.maxSuspensionTravel;
              var maxSuspensionLength = wheel.suspensionRestLength + wheel.maxSuspensionTravel;
              if (wheel.suspensionLength < minSuspensionLength) {
                  wheel.suspensionLength = minSuspensionLength;
              }
              if (wheel.suspensionLength > maxSuspensionLength) {
                  wheel.suspensionLength = maxSuspensionLength;
                  wheel.raycastResult.reset();
              }

              var denominator = wheel.raycastResult.hitNormalWorld.dot(wheel.directionWorld);

              var chassis_velocity_at_contactPoint = new Vec3();
              chassisBody.getVelocityAtWorldPoint(wheel.raycastResult.hitPointWorld, chassis_velocity_at_contactPoint);

              var projVel = wheel.raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );

              if (denominator >= -0.1) {
                  wheel.suspensionRelativeVelocity = 0;
                  wheel.clippedInvContactDotSuspension = 1 / 0.1;
              } else {
                  var inv = -1 / denominator;
                  wheel.suspensionRelativeVelocity = projVel * inv;
                  wheel.clippedInvContactDotSuspension = inv;
              }

          } else {

              //put wheel info as in rest position
              wheel.suspensionLength = wheel.suspensionRestLength + 0 * wheel.maxSuspensionTravel;
              wheel.suspensionRelativeVelocity = 0.0;
              wheel.directionWorld.scale(-1, wheel.raycastResult.hitNormalWorld);
              wheel.clippedInvContactDotSuspension = 1.0;
          }

          return depth;
      };

      RaycastVehicle.prototype.updateWheelTransformWorld = function(wheel){
          wheel.isInContact = false;
          var chassisBody = this.chassisBody;
          chassisBody.pointToWorldFrame(wheel.chassisConnectionPointLocal, wheel.chassisConnectionPointWorld);
          chassisBody.vectorToWorldFrame(wheel.directionLocal, wheel.directionWorld);
          chassisBody.vectorToWorldFrame(wheel.axleLocal, wheel.axleWorld);
      };


      /**
       * Update one of the wheel transform.
       * Note when rendering wheels: during each step, wheel transforms are updated BEFORE the chassis; ie. their position becomes invalid after the step. Thus when you render wheels, you must update wheel transforms before rendering them. See raycastVehicle demo for an example.
       * @method updateWheelTransform
       * @param {integer} wheelIndex The wheel index to update.
       */
      RaycastVehicle.prototype.updateWheelTransform = function(wheelIndex){
          var up = tmpVec4;
          var right = tmpVec5;
          var fwd = tmpVec6;

          var wheel = this.wheelInfos[wheelIndex];
          this.updateWheelTransformWorld(wheel);

          wheel.directionLocal.scale(-1, up);
          right.copy(wheel.axleLocal);
          up.cross(right, fwd);
          fwd.normalize();
          right.normalize();

          // Rotate around steering over the wheelAxle
          var steering = wheel.steering;
          var steeringOrn = new Quaternion();
          steeringOrn.setFromAxisAngle(up, steering);

          var rotatingOrn = new Quaternion();
          rotatingOrn.setFromAxisAngle(right, wheel.rotation);

          // World rotation of the wheel
          var q = wheel.worldTransform.quaternion;
          this.chassisBody.quaternion.mult(steeringOrn, q);
          q.mult(rotatingOrn, q);

          q.normalize();

          // world position of the wheel
          var p = wheel.worldTransform.position;
          p.copy(wheel.directionWorld);
          p.scale(wheel.suspensionLength, p);
          p.vadd(wheel.chassisConnectionPointWorld, p);
      };

      var directions = [
          new Vec3(1, 0, 0),
          new Vec3(0, 1, 0),
          new Vec3(0, 0, 1)
      ];

      /**
       * Get the world transform of one of the wheels
       * @method getWheelTransformWorld
       * @param  {integer} wheelIndex
       * @return {Transform}
       */
      RaycastVehicle.prototype.getWheelTransformWorld = function(wheelIndex) {
          return this.wheelInfos[wheelIndex].worldTransform;
      };


      var updateFriction_surfNormalWS_scaled_proj = new Vec3();
      var updateFriction_axle = [];
      var updateFriction_forwardWS = [];
      var sideFrictionStiffness2 = 1;
      RaycastVehicle.prototype.updateFriction = function(timeStep) {
          var surfNormalWS_scaled_proj = updateFriction_surfNormalWS_scaled_proj;

          //calculate the impulse, so that the wheels don't move sidewards
          var wheelInfos = this.wheelInfos;
          var numWheels = wheelInfos.length;
          var chassisBody = this.chassisBody;
          var forwardWS = updateFriction_forwardWS;
          var axle = updateFriction_axle;

          for (var i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];

              var groundObject = wheel.raycastResult.body;

              wheel.sideImpulse = 0;
              wheel.forwardImpulse = 0;
              if(!forwardWS[i]){
                  forwardWS[i] = new Vec3();
              }
              if(!axle[i]){
                  axle[i] = new Vec3();
              }
          }

          for (var i = 0; i < numWheels; i++){
              var wheel = wheelInfos[i];

              var groundObject = wheel.raycastResult.body;

              if (groundObject) {
                  var axlei = axle[i];
                  var wheelTrans = this.getWheelTransformWorld(i);

                  // Get world axle
                  wheelTrans.vectorToWorldFrame(directions[this.indexRightAxis], axlei);

                  var surfNormalWS = wheel.raycastResult.hitNormalWorld;
                  var proj = axlei.dot(surfNormalWS);
                  surfNormalWS.scale(proj, surfNormalWS_scaled_proj);
                  axlei.vsub(surfNormalWS_scaled_proj, axlei);
                  axlei.normalize();

                  surfNormalWS.cross(axlei, forwardWS[i]);
                  forwardWS[i].normalize();

                  wheel.sideImpulse = resolveSingleBilateral(
                      chassisBody,
                      wheel.raycastResult.hitPointWorld,
                      groundObject,
                      wheel.raycastResult.hitPointWorld,
                      axlei
                  );

                  wheel.sideImpulse *= sideFrictionStiffness2;
              }
          }

          var sideFactor = 1;
          var fwdFactor = 0.5;

          this.sliding = false;
          for (var i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];
              var groundObject = wheel.raycastResult.body;

              var rollingFriction = 0;

              wheel.slipInfo = 1;
              if (groundObject) {
                  var defaultRollingFrictionImpulse = 0;
                  var maxImpulse = wheel.brake ? wheel.brake : defaultRollingFrictionImpulse;

                  // btWheelContactPoint contactPt(chassisBody,groundObject,wheelInfraycastInfo.hitPointWorld,forwardWS[wheel],maxImpulse);
                  // rollingFriction = calcRollingFriction(contactPt);
                  rollingFriction = calcRollingFriction(chassisBody, groundObject, wheel.raycastResult.hitPointWorld, forwardWS[i], maxImpulse);

                  rollingFriction += wheel.engineForce * timeStep;

                  // rollingFriction = 0;
                  var factor = maxImpulse / rollingFriction;
                  wheel.slipInfo *= factor;
              }

              //switch between active rolling (throttle), braking and non-active rolling friction (nthrottle/break)

              wheel.forwardImpulse = 0;
              wheel.skidInfo = 1;

              if (groundObject) {
                  wheel.skidInfo = 1;

                  var maximp = wheel.suspensionForce * timeStep * wheel.frictionSlip;
                  var maximpSide = maximp;

                  var maximpSquared = maximp * maximpSide;

                  wheel.forwardImpulse = rollingFriction;//wheelInfo.engineForce* timeStep;

                  var x = wheel.forwardImpulse * fwdFactor;
                  var y = wheel.sideImpulse * sideFactor;

                  var impulseSquared = x * x + y * y;

                  wheel.sliding = false;
                  if (impulseSquared > maximpSquared) {
                      this.sliding = true;
                      wheel.sliding = true;

                      var factor = maximp / Math.sqrt(impulseSquared);

                      wheel.skidInfo *= factor;
                  }
              }
          }

          if (this.sliding) {
              for (var i = 0; i < numWheels; i++) {
                  var wheel = wheelInfos[i];
                  if (wheel.sideImpulse !== 0) {
                      if (wheel.skidInfo < 1){
                          wheel.forwardImpulse *= wheel.skidInfo;
                          wheel.sideImpulse *= wheel.skidInfo;
                      }
                  }
              }
          }

          // apply the impulses
          for (var i = 0; i < numWheels; i++) {
              var wheel = wheelInfos[i];

              var rel_pos = new Vec3();
              wheel.raycastResult.hitPointWorld.vsub(chassisBody.position, rel_pos);
              // cannons applyimpulse is using world coord for the position
              //rel_pos.copy(wheel.raycastResult.hitPointWorld);

              if (wheel.forwardImpulse !== 0) {
                  var impulse = new Vec3();
                  forwardWS[i].scale(wheel.forwardImpulse, impulse);
                  chassisBody.applyImpulse(impulse, rel_pos);
              }

              if (wheel.sideImpulse !== 0){
                  var groundObject = wheel.raycastResult.body;

                  var rel_pos2 = new Vec3();
                  wheel.raycastResult.hitPointWorld.vsub(groundObject.position, rel_pos2);
                  //rel_pos2.copy(wheel.raycastResult.hitPointWorld);
                  var sideImp = new Vec3();
                  axle[i].scale(wheel.sideImpulse, sideImp);

                  // Scale the relative position in the up direction with rollInfluence.
                  // If rollInfluence is 1, the impulse will be applied on the hitPoint (easy to roll over), if it is zero it will be applied in the same plane as the center of mass (not easy to roll over).
                  chassisBody.vectorToLocalFrame(rel_pos, rel_pos);
                  rel_pos['xyz'[this.indexUpAxis]] *= wheel.rollInfluence;
                  chassisBody.vectorToWorldFrame(rel_pos, rel_pos);
                  chassisBody.applyImpulse(sideImp, rel_pos);

                  //apply friction impulse on the ground
                  sideImp.scale(-1, sideImp);
                  groundObject.applyImpulse(sideImp, rel_pos2);
              }
          }
      };

      var calcRollingFriction_vel1 = new Vec3();
      var calcRollingFriction_vel2 = new Vec3();
      var calcRollingFriction_vel = new Vec3();

      function calcRollingFriction(body0, body1, frictionPosWorld, frictionDirectionWorld, maxImpulse) {
          var j1 = 0;
          var contactPosWorld = frictionPosWorld;

          // var rel_pos1 = new Vec3();
          // var rel_pos2 = new Vec3();
          var vel1 = calcRollingFriction_vel1;
          var vel2 = calcRollingFriction_vel2;
          var vel = calcRollingFriction_vel;
          // contactPosWorld.vsub(body0.position, rel_pos1);
          // contactPosWorld.vsub(body1.position, rel_pos2);

          body0.getVelocityAtWorldPoint(contactPosWorld, vel1);
          body1.getVelocityAtWorldPoint(contactPosWorld, vel2);
          vel1.vsub(vel2, vel);

          var vrel = frictionDirectionWorld.dot(vel);

          var denom0 = computeImpulseDenominator(body0, frictionPosWorld, frictionDirectionWorld);
          var denom1 = computeImpulseDenominator(body1, frictionPosWorld, frictionDirectionWorld);
          var relaxation = 1;
          var jacDiagABInv = relaxation / (denom0 + denom1);

          // calculate j that moves us to zero relative velocity
          j1 = -vrel * jacDiagABInv;

          if (maxImpulse < j1) {
              j1 = maxImpulse;
          }
          if (j1 < -maxImpulse) {
              j1 = -maxImpulse;
          }

          return j1;
      }

      var computeImpulseDenominator_r0 = new Vec3();
      var computeImpulseDenominator_c0 = new Vec3();
      var computeImpulseDenominator_vec = new Vec3();
      var computeImpulseDenominator_m = new Vec3();
      function computeImpulseDenominator(body, pos, normal) {
          var r0 = computeImpulseDenominator_r0;
          var c0 = computeImpulseDenominator_c0;
          var vec = computeImpulseDenominator_vec;
          var m = computeImpulseDenominator_m;

          pos.vsub(body.position, r0);
          r0.cross(normal, c0);
          body.invInertiaWorld.vmult(c0, m);
          m.cross(r0, vec);

          return body.invMass + normal.dot(vec);
      }


      var resolveSingleBilateral_vel1 = new Vec3();
      var resolveSingleBilateral_vel2 = new Vec3();
      var resolveSingleBilateral_vel = new Vec3();

      //bilateral constraint between two dynamic objects
      function resolveSingleBilateral(body1, pos1, body2, pos2, normal, impulse){
          var normalLenSqr = normal.norm2();
          if (normalLenSqr > 1.1){
              return 0; // no impulse
          }
          // var rel_pos1 = new Vec3();
          // var rel_pos2 = new Vec3();
          // pos1.vsub(body1.position, rel_pos1);
          // pos2.vsub(body2.position, rel_pos2);

          var vel1 = resolveSingleBilateral_vel1;
          var vel2 = resolveSingleBilateral_vel2;
          var vel = resolveSingleBilateral_vel;
          body1.getVelocityAtWorldPoint(pos1, vel1);
          body2.getVelocityAtWorldPoint(pos2, vel2);

          vel1.vsub(vel2, vel);

          var rel_vel = normal.dot(vel);

          var contactDamping = 0.2;
          var massTerm = 1 / (body1.invMass + body2.invMass);
          var impulse = - contactDamping * rel_vel * massTerm;

          return impulse;
      }
      },{"../collision/Ray":10,"../collision/RaycastResult":11,"../math/Quaternion":29,"../math/Vec3":31,"../objects/WheelInfo":37,"./Body":32}],34:[function(_dereq_,module,exports){
      var Body = _dereq_('./Body');
      var Sphere = _dereq_('../shapes/Sphere');
      var Box = _dereq_('../shapes/Box');
      var Vec3 = _dereq_('../math/Vec3');
      var HingeConstraint = _dereq_('../constraints/HingeConstraint');

      module.exports = RigidVehicle;

      /**
       * Simple vehicle helper class with spherical rigid body wheels.
       * @class RigidVehicle
       * @constructor
       * @param {Body} [options.chassisBody]
       */
      function RigidVehicle(options){
          this.wheelBodies = [];

          /**
           * @property coordinateSystem
           * @type {Vec3}
           */
          this.coordinateSystem = typeof(options.coordinateSystem)==='undefined' ? new Vec3(1, 2, 3) : options.coordinateSystem.clone();

          /**
           * @property {Body} chassisBody
           */
          this.chassisBody = options.chassisBody;

          if(!this.chassisBody){
              // No chassis body given. Create it!
              var chassisShape = new Box(new Vec3(5, 2, 0.5));
              this.chassisBody = new Body(1, chassisShape);
          }

          /**
           * @property constraints
           * @type {Array}
           */
          this.constraints = [];

          this.wheelAxes = [];
          this.wheelForces = [];
      }

      /**
       * Add a wheel
       * @method addWheel
       * @param {object} options
       * @param {boolean} [options.isFrontWheel]
       * @param {Vec3} [options.position] Position of the wheel, locally in the chassis body.
       * @param {Vec3} [options.direction] Slide direction of the wheel along the suspension.
       * @param {Vec3} [options.axis] Axis of rotation of the wheel, locally defined in the chassis.
       * @param {Body} [options.body] The wheel body.
       */
      RigidVehicle.prototype.addWheel = function(options){
          options = options || {};
          var wheelBody = options.body;
          if(!wheelBody){
              wheelBody =  new Body(1, new Sphere(1.2));
          }
          this.wheelBodies.push(wheelBody);
          this.wheelForces.push(0);

          // Position constrain wheels
          new Vec3();
          var position = typeof(options.position) !== 'undefined' ? options.position.clone() : new Vec3();

          // Set position locally to the chassis
          var worldPosition = new Vec3();
          this.chassisBody.pointToWorldFrame(position, worldPosition);
          wheelBody.position.set(worldPosition.x, worldPosition.y, worldPosition.z);

          // Constrain wheel
          var axis = typeof(options.axis) !== 'undefined' ? options.axis.clone() : new Vec3(0, 1, 0);
          this.wheelAxes.push(axis);

          var hingeConstraint = new HingeConstraint(this.chassisBody, wheelBody, {
              pivotA: position,
              axisA: axis,
              pivotB: Vec3.ZERO,
              axisB: axis,
              collideConnected: false
          });
          this.constraints.push(hingeConstraint);

          return this.wheelBodies.length - 1;
      };

      /**
       * Set the steering value of a wheel.
       * @method setSteeringValue
       * @param {number} value
       * @param {integer} wheelIndex
       * @todo check coordinateSystem
       */
      RigidVehicle.prototype.setSteeringValue = function(value, wheelIndex){
          // Set angle of the hinge axis
          var axis = this.wheelAxes[wheelIndex];

          var c = Math.cos(value),
              s = Math.sin(value),
              x = axis.x,
              y = axis.y;
          this.constraints[wheelIndex].axisA.set(
              c*x -s*y,
              s*x +c*y,
              0
          );
      };

      /**
       * Set the target rotational speed of the hinge constraint.
       * @method setMotorSpeed
       * @param {number} value
       * @param {integer} wheelIndex
       */
      RigidVehicle.prototype.setMotorSpeed = function(value, wheelIndex){
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.enableMotor();
          hingeConstraint.motorTargetVelocity = value;
      };

      /**
       * Set the target rotational speed of the hinge constraint.
       * @method disableMotor
       * @param {number} value
       * @param {integer} wheelIndex
       */
      RigidVehicle.prototype.disableMotor = function(wheelIndex){
          var hingeConstraint = this.constraints[wheelIndex];
          hingeConstraint.disableMotor();
      };

      var torque = new Vec3();

      /**
       * Set the wheel force to apply on one of the wheels each time step
       * @method setWheelForce
       * @param  {number} value
       * @param  {integer} wheelIndex
       */
      RigidVehicle.prototype.setWheelForce = function(value, wheelIndex){
          this.wheelForces[wheelIndex] = value;
      };

      /**
       * Apply a torque on one of the wheels.
       * @method applyWheelForce
       * @param  {number} value
       * @param  {integer} wheelIndex
       */
      RigidVehicle.prototype.applyWheelForce = function(value, wheelIndex){
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var bodyTorque = wheelBody.torque;

          axis.scale(value, torque);
          wheelBody.vectorToWorldFrame(torque, torque);
          bodyTorque.vadd(torque, bodyTorque);
      };

      /**
       * Add the vehicle including its constraints to the world.
       * @method addToWorld
       * @param {World} world
       */
      RigidVehicle.prototype.addToWorld = function(world){
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);

          for (var i = 0; i < bodies.length; i++) {
              world.addBody(bodies[i]);
          }

          for (var i = 0; i < constraints.length; i++) {
              world.addConstraint(constraints[i]);
          }

          world.addEventListener('preStep', this._update.bind(this));
      };

      RigidVehicle.prototype._update = function(){
          var wheelForces = this.wheelForces;
          for (var i = 0; i < wheelForces.length; i++) {
              this.applyWheelForce(wheelForces[i], i);
          }
      };

      /**
       * Remove the vehicle including its constraints from the world.
       * @method removeFromWorld
       * @param {World} world
       */
      RigidVehicle.prototype.removeFromWorld = function(world){
          var constraints = this.constraints;
          var bodies = this.wheelBodies.concat([this.chassisBody]);

          for (var i = 0; i < bodies.length; i++) {
              world.remove(bodies[i]);
          }

          for (var i = 0; i < constraints.length; i++) {
              world.removeConstraint(constraints[i]);
          }
      };

      var worldAxis = new Vec3();

      /**
       * Get current rotational velocity of a wheel
       * @method getWheelSpeed
       * @param {integer} wheelIndex
       */
      RigidVehicle.prototype.getWheelSpeed = function(wheelIndex){
          var axis = this.wheelAxes[wheelIndex];
          var wheelBody = this.wheelBodies[wheelIndex];
          var w = wheelBody.angularVelocity;
          this.chassisBody.vectorToWorldFrame(axis, worldAxis);
          return w.dot(worldAxis);
      };

      },{"../constraints/HingeConstraint":16,"../math/Vec3":31,"../shapes/Box":38,"../shapes/Sphere":45,"./Body":32}],35:[function(_dereq_,module,exports){
      module.exports = SPHSystem;

      _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      _dereq_('../shapes/Particle');
      _dereq_('../objects/Body');
      _dereq_('../material/Material');

      /**
       * Smoothed-particle hydrodynamics system
       * @class SPHSystem
       * @constructor
       */
      function SPHSystem(){
          this.particles = [];
      	
          /**
           * Density of the system (kg/m3).
           * @property {number} density
           */
          this.density = 1;
      	
          /**
           * Distance below which two particles are considered to be neighbors.
           * It should be adjusted so there are about 15-20 neighbor particles within this radius.
           * @property {number} smoothingRadius
           */
          this.smoothingRadius = 1;
          this.speedOfSound = 1;
      	
          /**
           * Viscosity of the system.
           * @property {number} viscosity
           */
          this.viscosity = 0.01;
          this.eps = 0.000001;

          // Stuff Computed per particle
          this.pressures = [];
          this.densities = [];
          this.neighbors = [];
      }

      /**
       * Add a particle to the system.
       * @method add
       * @param {Body} particle
       */
      SPHSystem.prototype.add = function(particle){
          this.particles.push(particle);
          if(this.neighbors.length < this.particles.length){
              this.neighbors.push([]);
          }
      };

      /**
       * Remove a particle from the system.
       * @method remove
       * @param {Body} particle
       */
      SPHSystem.prototype.remove = function(particle){
          var idx = this.particles.indexOf(particle);
          if(idx !== -1){
              this.particles.splice(idx,1);
              if(this.neighbors.length > this.particles.length){
                  this.neighbors.pop();
              }
          }
      };

      /**
       * Get neighbors within smoothing volume, save in the array neighbors
       * @method getNeighbors
       * @param {Body} particle
       * @param {Array} neighbors
       */
      var SPHSystem_getNeighbors_dist = new Vec3();
      SPHSystem.prototype.getNeighbors = function(particle,neighbors){
          var N = this.particles.length,
              id = particle.id,
              R2 = this.smoothingRadius * this.smoothingRadius,
              dist = SPHSystem_getNeighbors_dist;
          for(var i=0; i!==N; i++){
              var p = this.particles[i];
              p.position.vsub(particle.position,dist);
              if(id!==p.id && dist.norm2() < R2){
                  neighbors.push(p);
              }
          }
      };

      // Temp vectors for calculation
      var SPHSystem_update_dist = new Vec3(),
          SPHSystem_update_a_pressure = new Vec3(),
          SPHSystem_update_a_visc = new Vec3(),
          SPHSystem_update_gradW = new Vec3(),
          SPHSystem_update_r_vec = new Vec3(),
          SPHSystem_update_u = new Vec3(); // Relative velocity
      SPHSystem.prototype.update = function(){
          var N = this.particles.length,
              dist = SPHSystem_update_dist,
              cs = this.speedOfSound,
              eps = this.eps;

          for(var i=0; i!==N; i++){
              var p = this.particles[i]; // Current particle
              var neighbors = this.neighbors[i];

              // Get neighbors
              neighbors.length = 0;
              this.getNeighbors(p,neighbors);
              neighbors.push(this.particles[i]); // Add current too
              var numNeighbors = neighbors.length;

              // Accumulate density for the particle
              var sum = 0.0;
              for(var j=0; j!==numNeighbors; j++){

                  //printf("Current particle has position %f %f %f\n",objects[id].pos.x(),objects[id].pos.y(),objects[id].pos.z());
                  p.position.vsub(neighbors[j].position, dist);
                  var len = dist.norm();

                  var weight = this.w(len);
                  sum += neighbors[j].mass * weight;
              }

              // Save
              this.densities[i] = sum;
              this.pressures[i] = cs * cs * (this.densities[i] - this.density);
          }

          // Add forces

          // Sum to these accelerations
          var a_pressure= SPHSystem_update_a_pressure;
          var a_visc =    SPHSystem_update_a_visc;
          var gradW =     SPHSystem_update_gradW;
          var r_vec =     SPHSystem_update_r_vec;
          var u =         SPHSystem_update_u;

          for(var i=0; i!==N; i++){

              var particle = this.particles[i];

              a_pressure.set(0,0,0);
              a_visc.set(0,0,0);

              // Init vars
              var Pij;
              var nabla;

              // Sum up for all other neighbors
              var neighbors = this.neighbors[i];
              var numNeighbors = neighbors.length;

              //printf("Neighbors: ");
              for(var j=0; j!==numNeighbors; j++){

                  var neighbor = neighbors[j];
                  //printf("%d ",nj);

                  // Get r once for all..
                  particle.position.vsub(neighbor.position,r_vec);
                  var r = r_vec.norm();

                  // Pressure contribution
                  Pij = -neighbor.mass * (this.pressures[i] / (this.densities[i]*this.densities[i] + eps) + this.pressures[j] / (this.densities[j]*this.densities[j] + eps));
                  this.gradw(r_vec, gradW);
                  // Add to pressure acceleration
                  gradW.mult(Pij , gradW);
                  a_pressure.vadd(gradW, a_pressure);

                  // Viscosity contribution
                  neighbor.velocity.vsub(particle.velocity, u);
                  u.mult( 1.0 / (0.0001+this.densities[i] * this.densities[j]) * this.viscosity * neighbor.mass , u );
                  nabla = this.nablaw(r);
                  u.mult(nabla,u);
                  // Add to viscosity acceleration
                  a_visc.vadd( u, a_visc );
              }

              // Calculate force
              a_visc.mult(particle.mass, a_visc);
              a_pressure.mult(particle.mass, a_pressure);

              // Add force to particles
              particle.force.vadd(a_visc, particle.force);
              particle.force.vadd(a_pressure, particle.force);
          }
      };

      // Calculate the weight using the W(r) weightfunction
      SPHSystem.prototype.w = function(r){
          // 315
          var h = this.smoothingRadius;
          return 315.0/(64.0*Math.PI*Math.pow(h,9)) * Math.pow(h*h-r*r,3);
      };

      // calculate gradient of the weight function
      SPHSystem.prototype.gradw = function(rVec,resultVec){
          var r = rVec.norm(),
              h = this.smoothingRadius;
          rVec.mult(945.0/(32.0*Math.PI*Math.pow(h,9)) * Math.pow((h*h-r*r),2) , resultVec);
      };

      // Calculate nabla(W)
      SPHSystem.prototype.nablaw = function(r){
          var h = this.smoothingRadius;
          var nabla = 945.0/(32.0*Math.PI*Math.pow(h,9)) * (h*h-r*r)*(7*r*r - 3*h*h);
          return nabla;
      };

      },{"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Particle":42,"../shapes/Shape":44}],36:[function(_dereq_,module,exports){
      var Vec3 = _dereq_('../math/Vec3');

      module.exports = Spring;

      /**
       * A spring, connecting two bodies.
       *
       * @class Spring
       * @constructor
       * @param {Body} bodyA
       * @param {Body} bodyB
       * @param {Object} [options]
       * @param {number} [options.restLength]   A number > 0. Default: 1
       * @param {number} [options.stiffness]    A number >= 0. Default: 100
       * @param {number} [options.damping]      A number >= 0. Default: 1
       * @param {Vec3}  [options.worldAnchorA] Where to hook the spring to body A, in world coordinates.
       * @param {Vec3}  [options.worldAnchorB]
       * @param {Vec3}  [options.localAnchorA] Where to hook the spring to body A, in local body coordinates.
       * @param {Vec3}  [options.localAnchorB]
       */
      function Spring(bodyA,bodyB,options){
          options = options || {};

          /**
           * Rest length of the spring.
           * @property restLength
           * @type {number}
           */
          this.restLength = typeof(options.restLength) === "number" ? options.restLength : 1;

          /**
           * Stiffness of the spring.
           * @property stiffness
           * @type {number}
           */
          this.stiffness = options.stiffness || 100;

          /**
           * Damping of the spring.
           * @property damping
           * @type {number}
           */
          this.damping = options.damping || 1;

          /**
           * First connected body.
           * @property bodyA
           * @type {Body}
           */
          this.bodyA = bodyA;

          /**
           * Second connected body.
           * @property bodyB
           * @type {Body}
           */
          this.bodyB = bodyB;

          /**
           * Anchor for bodyA in local bodyA coordinates.
           * @property localAnchorA
           * @type {Vec3}
           */
          this.localAnchorA = new Vec3();

          /**
           * Anchor for bodyB in local bodyB coordinates.
           * @property localAnchorB
           * @type {Vec3}
           */
          this.localAnchorB = new Vec3();

          if(options.localAnchorA){
              this.localAnchorA.copy(options.localAnchorA);
          }
          if(options.localAnchorB){
              this.localAnchorB.copy(options.localAnchorB);
          }
          if(options.worldAnchorA){
              this.setWorldAnchorA(options.worldAnchorA);
          }
          if(options.worldAnchorB){
              this.setWorldAnchorB(options.worldAnchorB);
          }
      }

      /**
       * Set the anchor point on body A, using world coordinates.
       * @method setWorldAnchorA
       * @param {Vec3} worldAnchorA
       */
      Spring.prototype.setWorldAnchorA = function(worldAnchorA){
          this.bodyA.pointToLocalFrame(worldAnchorA,this.localAnchorA);
      };

      /**
       * Set the anchor point on body B, using world coordinates.
       * @method setWorldAnchorB
       * @param {Vec3} worldAnchorB
       */
      Spring.prototype.setWorldAnchorB = function(worldAnchorB){
          this.bodyB.pointToLocalFrame(worldAnchorB,this.localAnchorB);
      };

      /**
       * Get the anchor point on body A, in world coordinates.
       * @method getWorldAnchorA
       * @param {Vec3} result The vector to store the result in.
       */
      Spring.prototype.getWorldAnchorA = function(result){
          this.bodyA.pointToWorldFrame(this.localAnchorA,result);
      };

      /**
       * Get the anchor point on body B, in world coordinates.
       * @method getWorldAnchorB
       * @param {Vec3} result The vector to store the result in.
       */
      Spring.prototype.getWorldAnchorB = function(result){
          this.bodyB.pointToWorldFrame(this.localAnchorB,result);
      };

      var applyForce_r =              new Vec3(),
          applyForce_r_unit =         new Vec3(),
          applyForce_u =              new Vec3(),
          applyForce_f =              new Vec3(),
          applyForce_worldAnchorA =   new Vec3(),
          applyForce_worldAnchorB =   new Vec3(),
          applyForce_ri =             new Vec3(),
          applyForce_rj =             new Vec3(),
          applyForce_ri_x_f =         new Vec3(),
          applyForce_rj_x_f =         new Vec3(),
          applyForce_tmp =            new Vec3();

      /**
       * Apply the spring force to the connected bodies.
       * @method applyForce
       */
      Spring.prototype.applyForce = function(){
          var k = this.stiffness,
              d = this.damping,
              l = this.restLength,
              bodyA = this.bodyA,
              bodyB = this.bodyB,
              r = applyForce_r,
              r_unit = applyForce_r_unit,
              u = applyForce_u,
              f = applyForce_f,
              tmp = applyForce_tmp;

          var worldAnchorA = applyForce_worldAnchorA,
              worldAnchorB = applyForce_worldAnchorB,
              ri = applyForce_ri,
              rj = applyForce_rj,
              ri_x_f = applyForce_ri_x_f,
              rj_x_f = applyForce_rj_x_f;

          // Get world anchors
          this.getWorldAnchorA(worldAnchorA);
          this.getWorldAnchorB(worldAnchorB);

          // Get offset points
          worldAnchorA.vsub(bodyA.position,ri);
          worldAnchorB.vsub(bodyB.position,rj);

          // Compute distance vector between world anchor points
          worldAnchorB.vsub(worldAnchorA,r);
          var rlen = r.norm();
          r_unit.copy(r);
          r_unit.normalize();

          // Compute relative velocity of the anchor points, u
          bodyB.velocity.vsub(bodyA.velocity,u);
          // Add rotational velocity

          bodyB.angularVelocity.cross(rj,tmp);
          u.vadd(tmp,u);
          bodyA.angularVelocity.cross(ri,tmp);
          u.vsub(tmp,u);

          // F = - k * ( x - L ) - D * ( u )
          r_unit.mult(-k*(rlen-l) - d*u.dot(r_unit), f);

          // Add forces to bodies
          bodyA.force.vsub(f,bodyA.force);
          bodyB.force.vadd(f,bodyB.force);

          // Angular force
          ri.cross(f,ri_x_f);
          rj.cross(f,rj_x_f);
          bodyA.torque.vsub(ri_x_f,bodyA.torque);
          bodyB.torque.vadd(rj_x_f,bodyB.torque);
      };

      },{"../math/Vec3":31}],37:[function(_dereq_,module,exports){
      var Vec3 = _dereq_('../math/Vec3');
      var Transform = _dereq_('../math/Transform');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var Utils = _dereq_('../utils/Utils');

      module.exports = WheelInfo;

      /**
       * @class WheelInfo
       * @constructor
       * @param {Object} [options]
       *
       * @param {Vec3} [options.chassisConnectionPointLocal]
       * @param {Vec3} [options.chassisConnectionPointWorld]
       * @param {Vec3} [options.directionLocal]
       * @param {Vec3} [options.directionWorld]
       * @param {Vec3} [options.axleLocal]
       * @param {Vec3} [options.axleWorld]
       * @param {number} [options.suspensionRestLength=1]
       * @param {number} [options.suspensionMaxLength=2]
       * @param {number} [options.radius=1]
       * @param {number} [options.suspensionStiffness=100]
       * @param {number} [options.dampingCompression=10]
       * @param {number} [options.dampingRelaxation=10]
       * @param {number} [options.frictionSlip=10000]
       * @param {number} [options.steering=0]
       * @param {number} [options.rotation=0]
       * @param {number} [options.deltaRotation=0]
       * @param {number} [options.rollInfluence=0.01]
       * @param {number} [options.maxSuspensionForce]
       * @param {boolean} [options.isFrontWheel=true]
       * @param {number} [options.clippedInvContactDotSuspension=1]
       * @param {number} [options.suspensionRelativeVelocity=0]
       * @param {number} [options.suspensionForce=0]
       * @param {number} [options.skidInfo=0]
       * @param {number} [options.suspensionLength=0]
       * @param {number} [options.maxSuspensionTravel=1]
       * @param {boolean} [options.useCustomSlidingRotationalSpeed=false]
       * @param {number} [options.customSlidingRotationalSpeed=-0.1]
       */
      function WheelInfo(options){
          options = Utils.defaults(options, {
              chassisConnectionPointLocal: new Vec3(),
              chassisConnectionPointWorld: new Vec3(),
              directionLocal: new Vec3(),
              directionWorld: new Vec3(),
              axleLocal: new Vec3(),
              axleWorld: new Vec3(),
              suspensionRestLength: 1,
              suspensionMaxLength: 2,
              radius: 1,
              suspensionStiffness: 100,
              dampingCompression: 10,
              dampingRelaxation: 10,
              frictionSlip: 10000,
              steering: 0,
              rotation: 0,
              deltaRotation: 0,
              rollInfluence: 0.01,
              maxSuspensionForce: Number.MAX_VALUE,
              isFrontWheel: true,
              clippedInvContactDotSuspension: 1,
              suspensionRelativeVelocity: 0,
              suspensionForce: 0,
              skidInfo: 0,
              suspensionLength: 0,
              maxSuspensionTravel: 1,
              useCustomSlidingRotationalSpeed: false,
              customSlidingRotationalSpeed: -0.1
          });

          /**
           * Max travel distance of the suspension, in meters.
           * @property {number} maxSuspensionTravel
           */
          this.maxSuspensionTravel = options.maxSuspensionTravel;

          /**
           * Speed to apply to the wheel rotation when the wheel is sliding.
           * @property {number} customSlidingRotationalSpeed
           */
          this.customSlidingRotationalSpeed = options.customSlidingRotationalSpeed;

          /**
           * If the customSlidingRotationalSpeed should be used.
           * @property {Boolean} useCustomSlidingRotationalSpeed
           */
          this.useCustomSlidingRotationalSpeed = options.useCustomSlidingRotationalSpeed;

          /**
           * @property {Boolean} sliding
           */
          this.sliding = false;

          /**
           * Connection point, defined locally in the chassis body frame.
           * @property {Vec3} chassisConnectionPointLocal
           */
          this.chassisConnectionPointLocal = options.chassisConnectionPointLocal.clone();

          /**
           * @property {Vec3} chassisConnectionPointWorld
           */
          this.chassisConnectionPointWorld = options.chassisConnectionPointWorld.clone();

          /**
           * @property {Vec3} directionLocal
           */
          this.directionLocal = options.directionLocal.clone();

          /**
           * @property {Vec3} directionWorld
           */
          this.directionWorld = options.directionWorld.clone();

          /**
           * @property {Vec3} axleLocal
           */
          this.axleLocal = options.axleLocal.clone();

          /**
           * @property {Vec3} axleWorld
           */
          this.axleWorld = options.axleWorld.clone();

          /**
           * @property {number} suspensionRestLength
           */
          this.suspensionRestLength = options.suspensionRestLength;

          /**
           * @property {number} suspensionMaxLength
           */
          this.suspensionMaxLength = options.suspensionMaxLength;

          /**
           * @property {number} radius
           */
          this.radius = options.radius;

          /**
           * @property {number} suspensionStiffness
           */
          this.suspensionStiffness = options.suspensionStiffness;

          /**
           * @property {number} dampingCompression
           */
          this.dampingCompression = options.dampingCompression;

          /**
           * @property {number} dampingRelaxation
           */
          this.dampingRelaxation = options.dampingRelaxation;

          /**
           * @property {number} frictionSlip
           */
          this.frictionSlip = options.frictionSlip;

          /**
           * @property {number} steering
           */
          this.steering = 0;

          /**
           * Rotation value, in radians.
           * @property {number} rotation
           */
          this.rotation = 0;

          /**
           * @property {number} deltaRotation
           */
          this.deltaRotation = 0;

          /**
           * @property {number} rollInfluence
           */
          this.rollInfluence = options.rollInfluence;

          /**
           * @property {number} maxSuspensionForce
           */
          this.maxSuspensionForce = options.maxSuspensionForce;

          /**
           * @property {number} engineForce
           */
          this.engineForce = 0;

          /**
           * @property {number} brake
           */
          this.brake = 0;

          /**
           * @property {number} isFrontWheel
           */
          this.isFrontWheel = options.isFrontWheel;

          /**
           * @property {number} clippedInvContactDotSuspension
           */
          this.clippedInvContactDotSuspension = 1;

          /**
           * @property {number} suspensionRelativeVelocity
           */
          this.suspensionRelativeVelocity = 0;

          /**
           * @property {number} suspensionForce
           */
          this.suspensionForce = 0;

          /**
           * @property {number} skidInfo
           */
          this.skidInfo = 0;

          /**
           * @property {number} suspensionLength
           */
          this.suspensionLength = 0;

          /**
           * @property {number} sideImpulse
           */
          this.sideImpulse = 0;

          /**
           * @property {number} forwardImpulse
           */
          this.forwardImpulse = 0;

          /**
           * The result from raycasting
           * @property {RaycastResult} raycastResult
           */
          this.raycastResult = new RaycastResult();

          /**
           * Wheel world transform
           * @property {Transform} worldTransform
           */
          this.worldTransform = new Transform();

          /**
           * @property {boolean} isInContact
           */
          this.isInContact = false;
      }

      var chassis_velocity_at_contactPoint = new Vec3();
      var relpos = new Vec3();
      var chassis_velocity_at_contactPoint = new Vec3();
      WheelInfo.prototype.updateWheel = function(chassis){
          var raycastResult = this.raycastResult;

          if (this.isInContact){
              var project= raycastResult.hitNormalWorld.dot(raycastResult.directionWorld);
              raycastResult.hitPointWorld.vsub(chassis.position, relpos);
              chassis.getVelocityAtWorldPoint(relpos, chassis_velocity_at_contactPoint);
              var projVel = raycastResult.hitNormalWorld.dot( chassis_velocity_at_contactPoint );
              if (project >= -0.1) {
                  this.suspensionRelativeVelocity = 0.0;
                  this.clippedInvContactDotSuspension = 1.0 / 0.1;
              } else {
                  var inv = -1 / project;
                  this.suspensionRelativeVelocity = projVel * inv;
                  this.clippedInvContactDotSuspension = inv;
              }

          } else {
              // Not in contact : position wheel in a nice (rest length) position
              raycastResult.suspensionLength = this.suspensionRestLength;
              this.suspensionRelativeVelocity = 0.0;
              raycastResult.directionWorld.scale(-1, raycastResult.hitNormalWorld);
              this.clippedInvContactDotSuspension = 1.0;
          }
      };
      },{"../collision/RaycastResult":11,"../math/Transform":30,"../math/Vec3":31,"../utils/Utils":54}],38:[function(_dereq_,module,exports){
      module.exports = Box;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

      /**
       * A 3d box shape.
       * @class Box
       * @constructor
       * @param {Vec3} halfExtents
       * @author schteppe
       * @extends Shape
       */
      function Box(halfExtents){
          Shape.call(this, {
              type: Shape.types.BOX
          });

          /**
           * @property halfExtents
           * @type {Vec3}
           */
          this.halfExtents = halfExtents;

          /**
           * Used by the contact generator to make contacts with other convex polyhedra for example
           * @property convexPolyhedronRepresentation
           * @type {ConvexPolyhedron}
           */
          this.convexPolyhedronRepresentation = null;

          this.updateConvexPolyhedronRepresentation();
          this.updateBoundingSphereRadius();
      }
      Box.prototype = new Shape();
      Box.prototype.constructor = Box;

      /**
       * Updates the local convex polyhedron representation used for some collisions.
       * @method updateConvexPolyhedronRepresentation
       */
      Box.prototype.updateConvexPolyhedronRepresentation = function(){
          var sx = this.halfExtents.x;
          var sy = this.halfExtents.y;
          var sz = this.halfExtents.z;
          var V = Vec3;

          var vertices = [
              new V(-sx,-sy,-sz),
              new V( sx,-sy,-sz),
              new V( sx, sy,-sz),
              new V(-sx, sy,-sz),
              new V(-sx,-sy, sz),
              new V( sx,-sy, sz),
              new V( sx, sy, sz),
              new V(-sx, sy, sz)
          ];

          var indices = [
              [3,2,1,0], // -z
              [4,5,6,7], // +z
              [5,4,0,1], // -y
              [2,3,7,6], // +y
              [0,4,7,3], // -x
              [1,2,6,5], // +x
          ];

          [
              new V(0, 0, 1),
              new V(0, 1, 0),
              new V(1, 0, 0)
          ];

          var h = new ConvexPolyhedron(vertices, indices);
          this.convexPolyhedronRepresentation = h;
          h.material = this.material;
      };

      /**
       * @method calculateLocalInertia
       * @param  {Number} mass
       * @param  {Vec3} target
       * @return {Vec3}
       */
      Box.prototype.calculateLocalInertia = function(mass,target){
          target = target || new Vec3();
          Box.calculateInertia(this.halfExtents, mass, target);
          return target;
      };

      Box.calculateInertia = function(halfExtents,mass,target){
          var e = halfExtents;
          if (e.isZero()) {
              target.x = 2.0 / 12.0 * mass;
              target.y = 2.0 / 12.0 * mass;
              target.z = 2.0 / 12.0 * mass;
          }else {
              target.x = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.z*2*e.z );
              target.y = 1.0 / 12.0 * mass * (   2*e.x*2*e.x + 2*e.z*2*e.z );
              target.z = 1.0 / 12.0 * mass * (   2*e.y*2*e.y + 2*e.x*2*e.x );
          }
      };

      /**
       * Get the box 6 side normals
       * @method getSideNormals
       * @param {array}      sixTargetVectors An array of 6 vectors, to store the resulting side normals in.
       * @param {Quaternion} quat             Orientation to apply to the normal vectors. If not provided, the vectors will be in respect to the local frame.
       * @return {array}
       */
      Box.prototype.getSideNormals = function(sixTargetVectors,quat){
          var sides = sixTargetVectors;
          var ex = this.halfExtents;
          sides[0].set(  ex.x,     0,     0);
          sides[1].set(     0,  ex.y,     0);
          sides[2].set(     0,     0,  ex.z);
          sides[3].set( -ex.x,     0,     0);
          sides[4].set(     0, -ex.y,     0);
          sides[5].set(     0,     0, -ex.z);

          if(quat!==undefined){
              for(var i=0; i!==sides.length; i++){
                  quat.vmult(sides[i],sides[i]);
              }
          }

          return sides;
      };

      Box.prototype.volume = function(){
          return 8.0 * this.halfExtents.x * this.halfExtents.y * this.halfExtents.z;
      };

      Box.prototype.updateBoundingSphereRadius = function(){
          this.boundingSphereRadius = this.halfExtents.norm();
      };

      var worldCornerTempPos = new Vec3();
      new Vec3();
      Box.prototype.forEachWorldCorner = function(pos,quat,callback){

          var e = this.halfExtents;
          var corners = [[  e.x,  e.y,  e.z],
                         [ -e.x,  e.y,  e.z],
                         [ -e.x, -e.y,  e.z],
                         [ -e.x, -e.y, -e.z],
                         [  e.x, -e.y, -e.z],
                         [  e.x,  e.y, -e.z],
                         [ -e.x,  e.y, -e.z],
                         [  e.x, -e.y,  e.z]];
          for(var i=0; i<corners.length; i++){
              worldCornerTempPos.set(corners[i][0],corners[i][1],corners[i][2]);
              quat.vmult(worldCornerTempPos,worldCornerTempPos);
              pos.vadd(worldCornerTempPos,worldCornerTempPos);
              callback(worldCornerTempPos.x,
                       worldCornerTempPos.y,
                       worldCornerTempPos.z);
          }
      };

      var worldCornersTemp = [
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3(),
          new Vec3()
      ];
      Box.prototype.calculateWorldAABB = function(pos,quat,min,max){

          var e = this.halfExtents;
          worldCornersTemp[0].set(e.x, e.y, e.z);
          worldCornersTemp[1].set(-e.x,  e.y, e.z);
          worldCornersTemp[2].set(-e.x, -e.y, e.z);
          worldCornersTemp[3].set(-e.x, -e.y, -e.z);
          worldCornersTemp[4].set(e.x, -e.y, -e.z);
          worldCornersTemp[5].set(e.x,  e.y, -e.z);
          worldCornersTemp[6].set(-e.x,  e.y, -e.z);
          worldCornersTemp[7].set(e.x, -e.y,  e.z);

          var wc = worldCornersTemp[0];
          quat.vmult(wc, wc);
          pos.vadd(wc, wc);
          max.copy(wc);
          min.copy(wc);
          for(var i=1; i<8; i++){
              var wc = worldCornersTemp[i];
              quat.vmult(wc, wc);
              pos.vadd(wc, wc);
              var x = wc.x;
              var y = wc.y;
              var z = wc.z;
              if(x > max.x){
                  max.x = x;
              }
              if(y > max.y){
                  max.y = y;
              }
              if(z > max.z){
                  max.z = z;
              }

              if(x < min.x){
                  min.x = x;
              }
              if(y < min.y){
                  min.y = y;
              }
              if(z < min.z){
                  min.z = z;
              }
          }

          // Get each axis max
          // min.set(Infinity,Infinity,Infinity);
          // max.set(-Infinity,-Infinity,-Infinity);
          // this.forEachWorldCorner(pos,quat,function(x,y,z){
          //     if(x > max.x){
          //         max.x = x;
          //     }
          //     if(y > max.y){
          //         max.y = y;
          //     }
          //     if(z > max.z){
          //         max.z = z;
          //     }

          //     if(x < min.x){
          //         min.x = x;
          //     }
          //     if(y < min.y){
          //         min.y = y;
          //     }
          //     if(z < min.z){
          //         min.z = z;
          //     }
          // });
      };

      },{"../math/Vec3":31,"./ConvexPolyhedron":39,"./Shape":44}],39:[function(_dereq_,module,exports){
      module.exports = ConvexPolyhedron;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');

      /**
       * A set of polygons describing a convex shape.
       * @class ConvexPolyhedron
       * @constructor
       * @extends Shape
       * @description The shape MUST be convex for the code to work properly. No polygons may be coplanar (contained
       * in the same 3D plane), instead these should be merged into one polygon.
       *
       * @param {array} points An array of Vec3's
       * @param {array} faces Array of integer arrays, describing which vertices that is included in each face.
       *
       * @author qiao / https://github.com/qiao (original author, see https://github.com/qiao/three.js/commit/85026f0c769e4000148a67d45a9e9b9c5108836f)
       * @author schteppe / https://github.com/schteppe
       * @see http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/
       * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
       *
       * @todo Move the clipping functions to ContactGenerator?
       * @todo Automatically merge coplanar polygons in constructor.
       */
      function ConvexPolyhedron(points, faces, uniqueAxes) {
          Shape.call(this, {
              type: Shape.types.CONVEXPOLYHEDRON
          });

          /**
           * Array of Vec3
           * @property vertices
           * @type {Array}
           */
          this.vertices = points||[];

          this.worldVertices = []; // World transformed version of .vertices
          this.worldVerticesNeedsUpdate = true;

          /**
           * Array of integer arrays, indicating which vertices each face consists of
           * @property faces
           * @type {Array}
           */
          this.faces = faces||[];

          /**
           * Array of Vec3
           * @property faceNormals
           * @type {Array}
           */
          this.faceNormals = [];
          this.computeNormals();

          this.worldFaceNormalsNeedsUpdate = true;
          this.worldFaceNormals = []; // World transformed version of .faceNormals

          /**
           * Array of Vec3
           * @property uniqueEdges
           * @type {Array}
           */
          this.uniqueEdges = [];

          /**
           * If given, these locally defined, normalized axes are the only ones being checked when doing separating axis check.
           * @property {Array} uniqueAxes
           */
          this.uniqueAxes = uniqueAxes ? uniqueAxes.slice() : null;

          this.computeEdges();
          this.updateBoundingSphereRadius();
      }
      ConvexPolyhedron.prototype = new Shape();
      ConvexPolyhedron.prototype.constructor = ConvexPolyhedron;

      var computeEdges_tmpEdge = new Vec3();
      /**
       * Computes uniqueEdges
       * @method computeEdges
       */
      ConvexPolyhedron.prototype.computeEdges = function(){
          var faces = this.faces;
          var vertices = this.vertices;
          vertices.length;
          var edges = this.uniqueEdges;

          edges.length = 0;

          var edge = computeEdges_tmpEdge;

          for(var i=0; i !== faces.length; i++){
              var face = faces[i];
              var numVertices = face.length;
              for(var j = 0; j !== numVertices; j++){
                  var k = ( j+1 ) % numVertices;
                  vertices[face[j]].vsub(vertices[face[k]], edge);
                  edge.normalize();
                  var found = false;
                  for(var p=0; p !== edges.length; p++){
                      if (edges[p].almostEquals(edge) || edges[p].almostEquals(edge)){
                          found = true;
                          break;
                      }
                  }

                  if (!found){
                      edges.push(edge.clone());
                  }
              }
          }
      };

      /**
       * Compute the normals of the faces. Will reuse existing Vec3 objects in the .faceNormals array if they exist.
       * @method computeNormals
       */
      ConvexPolyhedron.prototype.computeNormals = function(){
          this.faceNormals.length = this.faces.length;

          // Generate normals
          for(var i=0; i<this.faces.length; i++){

              // Check so all vertices exists for this face
              for(var j=0; j<this.faces[i].length; j++){
                  if(!this.vertices[this.faces[i][j]]){
                      throw new Error("Vertex "+this.faces[i][j]+" not found!");
                  }
              }

              var n = this.faceNormals[i] || new Vec3();
              this.getFaceNormal(i,n);
              n.negate(n);
              this.faceNormals[i] = n;
              // var vertex = this.vertices[this.faces[i][0]];
              // if(n.dot(vertex) < 0){
              //     console.error(".faceNormals[" + i + "] = Vec3("+n.toString()+") looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.");
              //     for(var j=0; j<this.faces[i].length; j++){
              //         console.warn(".vertices["+this.faces[i][j]+"] = Vec3("+this.vertices[this.faces[i][j]].toString()+")");
              //     }
              // }
          }
      };

      /**
       * Get face normal given 3 vertices
       * @static
       * @method getFaceNormal
       * @param {Vec3} va
       * @param {Vec3} vb
       * @param {Vec3} vc
       * @param {Vec3} target
       */
      var cb = new Vec3();
      var ab = new Vec3();
      ConvexPolyhedron.computeNormal = function ( va, vb, vc, target ) {
          vb.vsub(va,ab);
          vc.vsub(vb,cb);
          cb.cross(ab,target);
          if ( !target.isZero() ) {
              target.normalize();
          }
      };

      /**
       * Compute the normal of a face from its vertices
       * @method getFaceNormal
       * @param  {Number} i
       * @param  {Vec3} target
       */
      ConvexPolyhedron.prototype.getFaceNormal = function(i,target){
          var f = this.faces[i];
          var va = this.vertices[f[0]];
          var vb = this.vertices[f[1]];
          var vc = this.vertices[f[2]];
          return ConvexPolyhedron.computeNormal(va,vb,vc,target);
      };

      /**
       * @method clipAgainstHull
       * @param {Vec3} posA
       * @param {Quaternion} quatA
       * @param {ConvexPolyhedron} hullB
       * @param {Vec3} posB
       * @param {Quaternion} quatB
       * @param {Vec3} separatingNormal
       * @param {Number} minDist Clamp distance
       * @param {Number} maxDist
       * @param {array} result The an array of contact point objects, see clipFaceAgainstHull
       * @see http://bullet.googlecode.com/svn/trunk/src/BulletCollision/NarrowPhaseCollision/btPolyhedralContactClipping.cpp
       */
      var cah_WorldNormal = new Vec3();
      ConvexPolyhedron.prototype.clipAgainstHull = function(posA,quatA,hullB,posB,quatB,separatingNormal,minDist,maxDist,result){
          var WorldNormal = cah_WorldNormal;
          var closestFaceB = -1;
          var dmax = -Number.MAX_VALUE;
          for(var face=0; face < hullB.faces.length; face++){
              WorldNormal.copy(hullB.faceNormals[face]);
              quatB.vmult(WorldNormal,WorldNormal);
              //posB.vadd(WorldNormal,WorldNormal);
              var d = WorldNormal.dot(separatingNormal);
              if (d > dmax){
                  dmax = d;
                  closestFaceB = face;
              }
          }
          var worldVertsB1 = [];
          var polyB = hullB.faces[closestFaceB];
          var numVertices = polyB.length;
          for(var e0=0; e0<numVertices; e0++){
              var b = hullB.vertices[polyB[e0]];
              var worldb = new Vec3();
              worldb.copy(b);
              quatB.vmult(worldb,worldb);
              posB.vadd(worldb,worldb);
              worldVertsB1.push(worldb);
          }

          if (closestFaceB>=0){
              this.clipFaceAgainstHull(separatingNormal,
                                       posA,
                                       quatA,
                                       worldVertsB1,
                                       minDist,
                                       maxDist,
                                       result);
          }
      };

      /**
       * Find the separating axis between this hull and another
       * @method findSeparatingAxis
       * @param {ConvexPolyhedron} hullB
       * @param {Vec3} posA
       * @param {Quaternion} quatA
       * @param {Vec3} posB
       * @param {Quaternion} quatB
       * @param {Vec3} target The target vector to save the axis in
       * @return {bool} Returns false if a separation is found, else true
       */
      var fsa_faceANormalWS3 = new Vec3(),
          fsa_Worldnormal1 = new Vec3(),
          fsa_deltaC = new Vec3(),
          fsa_worldEdge0 = new Vec3(),
          fsa_worldEdge1 = new Vec3(),
          fsa_Cross = new Vec3();
      ConvexPolyhedron.prototype.findSeparatingAxis = function(hullB,posA,quatA,posB,quatB,target, faceListA, faceListB){
          var faceANormalWS3 = fsa_faceANormalWS3,
              Worldnormal1 = fsa_Worldnormal1,
              deltaC = fsa_deltaC,
              worldEdge0 = fsa_worldEdge0,
              worldEdge1 = fsa_worldEdge1,
              Cross = fsa_Cross;

          var dmin = Number.MAX_VALUE;
          var hullA = this;

          if(!hullA.uniqueAxes){

              var numFacesA = faceListA ? faceListA.length : hullA.faces.length;

              // Test face normals from hullA
              for(var i=0; i<numFacesA; i++){
                  var fi = faceListA ? faceListA[i] : i;

                  // Get world face normal
                  faceANormalWS3.copy(hullA.faceNormals[fi]);
                  quatA.vmult(faceANormalWS3,faceANormalWS3);

                  var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
                  if(d===false){
                      return false;
                  }

                  if(d<dmin){
                      dmin = d;
                      target.copy(faceANormalWS3);
                  }
              }

          } else {

              // Test unique axes
              for(var i = 0; i !== hullA.uniqueAxes.length; i++){

                  // Get world axis
                  quatA.vmult(hullA.uniqueAxes[i],faceANormalWS3);

                  var d = hullA.testSepAxis(faceANormalWS3, hullB, posA, quatA, posB, quatB);
                  if(d===false){
                      return false;
                  }

                  if(d<dmin){
                      dmin = d;
                      target.copy(faceANormalWS3);
                  }
              }
          }

          if(!hullB.uniqueAxes){

              // Test face normals from hullB
              var numFacesB = faceListB ? faceListB.length : hullB.faces.length;
              for(var i=0;i<numFacesB;i++){

                  var fi = faceListB ? faceListB[i] : i;

                  Worldnormal1.copy(hullB.faceNormals[fi]);
                  quatB.vmult(Worldnormal1,Worldnormal1);
                  var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
                  if(d===false){
                      return false;
                  }

                  if(d<dmin){
                      dmin = d;
                      target.copy(Worldnormal1);
                  }
              }
          } else {

              // Test unique axes in B
              for(var i = 0; i !== hullB.uniqueAxes.length; i++){
                  quatB.vmult(hullB.uniqueAxes[i],Worldnormal1);
                  var d = hullA.testSepAxis(Worldnormal1, hullB,posA,quatA,posB,quatB);
                  if(d===false){
                      return false;
                  }

                  if(d<dmin){
                      dmin = d;
                      target.copy(Worldnormal1);
                  }
              }
          }

          // Test edges
          for(var e0=0; e0 !== hullA.uniqueEdges.length; e0++){

              // Get world edge
              quatA.vmult(hullA.uniqueEdges[e0],worldEdge0);

              for(var e1=0; e1 !== hullB.uniqueEdges.length; e1++){

                  // Get world edge 2
                  quatB.vmult(hullB.uniqueEdges[e1], worldEdge1);
                  worldEdge0.cross(worldEdge1,Cross);

                  if(!Cross.almostZero()){
                      Cross.normalize();
                      var dist = hullA.testSepAxis(Cross, hullB, posA, quatA, posB, quatB);
                      if(dist === false){
                          return false;
                      }
                      if(dist < dmin){
                          dmin = dist;
                          target.copy(Cross);
                      }
                  }
              }
          }

          posB.vsub(posA,deltaC);
          if((deltaC.dot(target))>0.0){
              target.negate(target);
          }

          return true;
      };

      var maxminA=[], maxminB=[];

      /**
       * Test separating axis against two hulls. Both hulls are projected onto the axis and the overlap size is returned if there is one.
       * @method testSepAxis
       * @param {Vec3} axis
       * @param {ConvexPolyhedron} hullB
       * @param {Vec3} posA
       * @param {Quaternion} quatA
       * @param {Vec3} posB
       * @param {Quaternion} quatB
       * @return {number} The overlap depth, or FALSE if no penetration.
       */
      ConvexPolyhedron.prototype.testSepAxis = function(axis, hullB, posA, quatA, posB, quatB){
          var hullA=this;
          ConvexPolyhedron.project(hullA, axis, posA, quatA, maxminA);
          ConvexPolyhedron.project(hullB, axis, posB, quatB, maxminB);
          var maxA = maxminA[0];
          var minA = maxminA[1];
          var maxB = maxminB[0];
          var minB = maxminB[1];
          if(maxA<minB || maxB<minA){
              return false; // Separated
          }
          var d0 = maxA - minB;
          var d1 = maxB - minA;
          var depth = d0<d1 ? d0:d1;
          return depth;
      };

      var cli_aabbmin = new Vec3(),
          cli_aabbmax = new Vec3();

      /**
       * @method calculateLocalInertia
       * @param  {Number} mass
       * @param  {Vec3} target
       */
      ConvexPolyhedron.prototype.calculateLocalInertia = function(mass,target){
          // Approximate with box inertia
          // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
          this.computeLocalAABB(cli_aabbmin,cli_aabbmax);
          var x = cli_aabbmax.x - cli_aabbmin.x,
              y = cli_aabbmax.y - cli_aabbmin.y,
              z = cli_aabbmax.z - cli_aabbmin.z;
          target.x = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z );
          target.y = 1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z );
          target.z = 1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x );
      };

      /**
       * @method getPlaneConstantOfFace
       * @param  {Number} face_i Index of the face
       * @return {Number}
       */
      ConvexPolyhedron.prototype.getPlaneConstantOfFace = function(face_i){
          var f = this.faces[face_i];
          var n = this.faceNormals[face_i];
          var v = this.vertices[f[0]];
          var c = -n.dot(v);
          return c;
      };

      /**
       * Clip a face against a hull.
       * @method clipFaceAgainstHull
       * @param {Vec3} separatingNormal
       * @param {Vec3} posA
       * @param {Quaternion} quatA
       * @param {Array} worldVertsB1 An array of Vec3 with vertices in the world frame.
       * @param {Number} minDist Distance clamping
       * @param {Number} maxDist
       * @param Array result Array to store resulting contact points in. Will be objects with properties: point, depth, normal. These are represented in world coordinates.
       */
      var cfah_faceANormalWS = new Vec3(),
          cfah_edge0 = new Vec3(),
          cfah_WorldEdge0 = new Vec3(),
          cfah_worldPlaneAnormal1 = new Vec3(),
          cfah_planeNormalWS1 = new Vec3(),
          cfah_worldA1 = new Vec3(),
          cfah_localPlaneNormal = new Vec3(),
          cfah_planeNormalWS = new Vec3();
      ConvexPolyhedron.prototype.clipFaceAgainstHull = function(separatingNormal, posA, quatA, worldVertsB1, minDist, maxDist,result){
          var faceANormalWS = cfah_faceANormalWS,
              edge0 = cfah_edge0,
              WorldEdge0 = cfah_WorldEdge0,
              worldPlaneAnormal1 = cfah_worldPlaneAnormal1,
              planeNormalWS1 = cfah_planeNormalWS1,
              worldA1 = cfah_worldA1,
              localPlaneNormal = cfah_localPlaneNormal,
              planeNormalWS = cfah_planeNormalWS;

          var hullA = this;
          var worldVertsB2 = [];
          var pVtxIn = worldVertsB1;
          var pVtxOut = worldVertsB2;
          // Find the face with normal closest to the separating axis
          var closestFaceA = -1;
          var dmin = Number.MAX_VALUE;
          for(var face=0; face<hullA.faces.length; face++){
              faceANormalWS.copy(hullA.faceNormals[face]);
              quatA.vmult(faceANormalWS,faceANormalWS);
              //posA.vadd(faceANormalWS,faceANormalWS);
              var d = faceANormalWS.dot(separatingNormal);
              if (d < dmin){
                  dmin = d;
                  closestFaceA = face;
              }
          }
          if (closestFaceA < 0){
              // console.log("--- did not find any closest face... ---");
              return;
          }
          //console.log("closest A: ",closestFaceA);
          // Get the face and construct connected faces
          var polyA = hullA.faces[closestFaceA];
          polyA.connectedFaces = [];
          for(var i=0; i<hullA.faces.length; i++){
              for(var j=0; j<hullA.faces[i].length; j++){
                  if(polyA.indexOf(hullA.faces[i][j])!==-1 /* Sharing a vertex*/ && i!==closestFaceA /* Not the one we are looking for connections from */ && polyA.connectedFaces.indexOf(i)===-1 /* Not already added */ ){
                      polyA.connectedFaces.push(i);
                  }
              }
          }
          // Clip the polygon to the back of the planes of all faces of hull A, that are adjacent to the witness face
          pVtxIn.length;
          var numVerticesA = polyA.length;
          for(var e0=0; e0<numVerticesA; e0++){
              var a = hullA.vertices[polyA[e0]];
              var b = hullA.vertices[polyA[(e0+1)%numVerticesA]];
              a.vsub(b,edge0);
              WorldEdge0.copy(edge0);
              quatA.vmult(WorldEdge0,WorldEdge0);
              posA.vadd(WorldEdge0,WorldEdge0);
              worldPlaneAnormal1.copy(this.faceNormals[closestFaceA]);//transA.getBasis()* btVector3(polyA.m_plane[0],polyA.m_plane[1],polyA.m_plane[2]);
              quatA.vmult(worldPlaneAnormal1,worldPlaneAnormal1);
              posA.vadd(worldPlaneAnormal1,worldPlaneAnormal1);
              WorldEdge0.cross(worldPlaneAnormal1,planeNormalWS1);
              planeNormalWS1.negate(planeNormalWS1);
              worldA1.copy(a);
              quatA.vmult(worldA1,worldA1);
              posA.vadd(worldA1,worldA1);
              -worldA1.dot(planeNormalWS1);
              var planeEqWS;
              {
                  var otherFace = polyA.connectedFaces[e0];
                  localPlaneNormal.copy(this.faceNormals[otherFace]);
                  var localPlaneEq = this.getPlaneConstantOfFace(otherFace);

                  planeNormalWS.copy(localPlaneNormal);
                  quatA.vmult(planeNormalWS,planeNormalWS);
                  //posA.vadd(planeNormalWS,planeNormalWS);
                  var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
              }

              // Clip face against our constructed plane
              this.clipFaceAgainstPlane(pVtxIn, pVtxOut, planeNormalWS, planeEqWS);

              // Throw away all clipped points, but save the reamining until next clip
              while(pVtxIn.length){
                  pVtxIn.shift();
              }
              while(pVtxOut.length){
                  pVtxIn.push(pVtxOut.shift());
              }
          }

          //console.log("Resulting points after clip:",pVtxIn);

          // only keep contact points that are behind the witness face
          localPlaneNormal.copy(this.faceNormals[closestFaceA]);

          var localPlaneEq = this.getPlaneConstantOfFace(closestFaceA);
          planeNormalWS.copy(localPlaneNormal);
          quatA.vmult(planeNormalWS,planeNormalWS);

          var planeEqWS = localPlaneEq - planeNormalWS.dot(posA);
          for (var i=0; i<pVtxIn.length; i++){
              var depth = planeNormalWS.dot(pVtxIn[i]) + planeEqWS; //???
              /*console.log("depth calc from normal=",planeNormalWS.toString()," and constant "+planeEqWS+" and vertex ",pVtxIn[i].toString()," gives "+depth);*/
              if (depth <=minDist){
                  // console.log("clamped: depth="+depth+" to minDist="+(minDist+""));
                  depth = minDist;
              }

              if (depth <=maxDist){
                  var point = pVtxIn[i];
                  if(depth<=0){
                      /*console.log("Got contact point ",point.toString(),
                        ", depth=",depth,
                        "contact normal=",separatingNormal.toString(),
                        "plane",planeNormalWS.toString(),
                        "planeConstant",planeEqWS);*/
                      var p = {
                          point:point,
                          normal:planeNormalWS,
                          depth: depth,
                      };
                      result.push(p);
                  }
              }
          }
      };

      /**
       * Clip a face in a hull against the back of a plane.
       * @method clipFaceAgainstPlane
       * @param {Array} inVertices
       * @param {Array} outVertices
       * @param {Vec3} planeNormal
       * @param {Number} planeConstant The constant in the mathematical plane equation
       */
      ConvexPolyhedron.prototype.clipFaceAgainstPlane = function(inVertices,outVertices, planeNormal, planeConstant){
          var n_dot_first, n_dot_last;
          var numVerts = inVertices.length;

          if(numVerts < 2){
              return outVertices;
          }

          var firstVertex = inVertices[inVertices.length-1],
              lastVertex =   inVertices[0];

          n_dot_first = planeNormal.dot(firstVertex) + planeConstant;

          for(var vi = 0; vi < numVerts; vi++){
              lastVertex = inVertices[vi];
              n_dot_last = planeNormal.dot(lastVertex) + planeConstant;
              if(n_dot_first < 0){
                  if(n_dot_last < 0){
                      // Start < 0, end < 0, so output lastVertex
                      var newv = new Vec3();
                      newv.copy(lastVertex);
                      outVertices.push(newv);
                  } else {
                      // Start < 0, end >= 0, so output intersection
                      var newv = new Vec3();
                      firstVertex.lerp(lastVertex,
                                       n_dot_first / (n_dot_first - n_dot_last),
                                       newv);
                      outVertices.push(newv);
                  }
              } else {
                  if(n_dot_last<0){
                      // Start >= 0, end < 0 so output intersection and end
                      var newv = new Vec3();
                      firstVertex.lerp(lastVertex,
                                       n_dot_first / (n_dot_first - n_dot_last),
                                       newv);
                      outVertices.push(newv);
                      outVertices.push(lastVertex);
                  }
              }
              firstVertex = lastVertex;
              n_dot_first = n_dot_last;
          }
          return outVertices;
      };

      // Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
      ConvexPolyhedron.prototype.computeWorldVertices = function(position,quat){
          var N = this.vertices.length;
          while(this.worldVertices.length < N){
              this.worldVertices.push( new Vec3() );
          }

          var verts = this.vertices,
              worldVerts = this.worldVertices;
          for(var i=0; i!==N; i++){
              quat.vmult( verts[i] , worldVerts[i] );
              position.vadd( worldVerts[i] , worldVerts[i] );
          }

          this.worldVerticesNeedsUpdate = false;
      };

      new Vec3();
      ConvexPolyhedron.prototype.computeLocalAABB = function(aabbmin,aabbmax){
          var n = this.vertices.length,
              vertices = this.vertices;

          aabbmin.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
          aabbmax.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);

          for(var i=0; i<n; i++){
              var v = vertices[i];
              if     (v.x < aabbmin.x){
                  aabbmin.x = v.x;
              } else if(v.x > aabbmax.x){
                  aabbmax.x = v.x;
              }
              if     (v.y < aabbmin.y){
                  aabbmin.y = v.y;
              } else if(v.y > aabbmax.y){
                  aabbmax.y = v.y;
              }
              if     (v.z < aabbmin.z){
                  aabbmin.z = v.z;
              } else if(v.z > aabbmax.z){
                  aabbmax.z = v.z;
              }
          }
      };

      /**
       * Updates .worldVertices and sets .worldVerticesNeedsUpdate to false.
       * @method computeWorldFaceNormals
       * @param  {Quaternion} quat
       */
      ConvexPolyhedron.prototype.computeWorldFaceNormals = function(quat){
          var N = this.faceNormals.length;
          while(this.worldFaceNormals.length < N){
              this.worldFaceNormals.push( new Vec3() );
          }

          var normals = this.faceNormals,
              worldNormals = this.worldFaceNormals;
          for(var i=0; i!==N; i++){
              quat.vmult( normals[i] , worldNormals[i] );
          }

          this.worldFaceNormalsNeedsUpdate = false;
      };

      /**
       * @method updateBoundingSphereRadius
       */
      ConvexPolyhedron.prototype.updateBoundingSphereRadius = function(){
          // Assume points are distributed with local (0,0,0) as center
          var max2 = 0;
          var verts = this.vertices;
          for(var i=0, N=verts.length; i!==N; i++) {
              var norm2 = verts[i].norm2();
              if(norm2 > max2){
                  max2 = norm2;
              }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
      };

      var tempWorldVertex = new Vec3();

      /**
       * @method calculateWorldAABB
       * @param {Vec3}        pos
       * @param {Quaternion}  quat
       * @param {Vec3}        min
       * @param {Vec3}        max
       */
      ConvexPolyhedron.prototype.calculateWorldAABB = function(pos,quat,min,max){
          var n = this.vertices.length, verts = this.vertices;
          var minx,miny,minz,maxx,maxy,maxz;
          for(var i=0; i<n; i++){
              tempWorldVertex.copy(verts[i]);
              quat.vmult(tempWorldVertex,tempWorldVertex);
              pos.vadd(tempWorldVertex,tempWorldVertex);
              var v = tempWorldVertex;
              if     (v.x < minx || minx===undefined){
                  minx = v.x;
              } 
              
              if(v.x > maxx || maxx===undefined){
                  maxx = v.x;
              }

              if     (v.y < miny || miny===undefined){
                  miny = v.y;
              } 
              
              if(v.y > maxy || maxy===undefined){
                  maxy = v.y;
              }

              if     (v.z < minz || minz===undefined){
                  minz = v.z;
              }  
              
              if(v.z > maxz || maxz===undefined){
                  maxz = v.z;
              }
          }
          min.set(minx,miny,minz);
          max.set(maxx,maxy,maxz);
      };

      /**
       * Get approximate convex volume
       * @method volume
       * @return {Number}
       */
      ConvexPolyhedron.prototype.volume = function(){
          return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
      };

      /**
       * Get an average of all the vertices positions
       * @method getAveragePointLocal
       * @param  {Vec3} target
       * @return {Vec3}
       */
      ConvexPolyhedron.prototype.getAveragePointLocal = function(target){
          target = target || new Vec3();
          var n = this.vertices.length,
              verts = this.vertices;
          for(var i=0; i<n; i++){
              target.vadd(verts[i],target);
          }
          target.mult(1/n,target);
          return target;
      };

      /**
       * Transform all local points. Will change the .vertices
       * @method transformAllPoints
       * @param  {Vec3} offset
       * @param  {Quaternion} quat
       */
      ConvexPolyhedron.prototype.transformAllPoints = function(offset,quat){
          var n = this.vertices.length,
              verts = this.vertices;

          // Apply rotation
          if(quat){
              // Rotate vertices
              for(var i=0; i<n; i++){
                  var v = verts[i];
                  quat.vmult(v,v);
              }
              // Rotate face normals
              for(var i=0; i<this.faceNormals.length; i++){
                  var v = this.faceNormals[i];
                  quat.vmult(v,v);
              }
              /*
              // Rotate edges
              for(var i=0; i<this.uniqueEdges.length; i++){
                  var v = this.uniqueEdges[i];
                  quat.vmult(v,v);
              }*/
          }

          // Apply offset
          if(offset){
              for(var i=0; i<n; i++){
                  var v = verts[i];
                  v.vadd(offset,v);
              }
          }
      };

      /**
       * Checks whether p is inside the polyhedra. Must be in local coords. The point lies outside of the convex hull of the other points if and only if the direction of all the vectors from it to those other points are on less than one half of a sphere around it.
       * @method pointIsInside
       * @param  {Vec3} p      A point given in local coordinates
       * @return {Boolean}
       */
      var ConvexPolyhedron_pointIsInside = new Vec3();
      var ConvexPolyhedron_vToP = new Vec3();
      var ConvexPolyhedron_vToPointInside = new Vec3();
      ConvexPolyhedron.prototype.pointIsInside = function(p){
          var n = this.vertices.length,
              verts = this.vertices,
              faces = this.faces,
              normals = this.faceNormals;
          var positiveResult = null;
          var N = this.faces.length;
          var pointInside = ConvexPolyhedron_pointIsInside;
          this.getAveragePointLocal(pointInside);
          for(var i=0; i<N; i++){
              this.faces[i].length;
              var n = normals[i];
              var v = verts[faces[i][0]]; // We only need one point in the face

              // This dot product determines which side of the edge the point is
              var vToP = ConvexPolyhedron_vToP;
              p.vsub(v,vToP);
              var r1 = n.dot(vToP);

              var vToPointInside = ConvexPolyhedron_vToPointInside;
              pointInside.vsub(v,vToPointInside);
              var r2 = n.dot(vToPointInside);

              if((r1<0 && r2>0) || (r1>0 && r2<0)){
                  return false; // Encountered some other sign. Exit.
              }
          }

          // If we got here, all dot products were of the same sign.
          return positiveResult ? 1 : -1;
      };

      /**
       * Get max and min dot product of a convex hull at position (pos,quat) projected onto an axis. Results are saved in the array maxmin.
       * @static
       * @method project
       * @param {ConvexPolyhedron} hull
       * @param {Vec3} axis
       * @param {Vec3} pos
       * @param {Quaternion} quat
       * @param {array} result result[0] and result[1] will be set to maximum and minimum, respectively.
       */
      new Vec3();
      var project_localAxis = new Vec3();
      var project_localOrigin = new Vec3();
      ConvexPolyhedron.project = function(hull, axis, pos, quat, result){
          var n = hull.vertices.length,
              localAxis = project_localAxis,
              max = 0,
              min = 0,
              localOrigin = project_localOrigin,
              vs = hull.vertices;

          localOrigin.setZero();

          // Transform the axis to local
          Transform.vectorToLocalFrame(pos, quat, axis, localAxis);
          Transform.pointToLocalFrame(pos, quat, localOrigin, localOrigin);
          var add = localOrigin.dot(localAxis);

          min = max = vs[0].dot(localAxis);

          for(var i = 1; i < n; i++){
              var val = vs[i].dot(localAxis);

              if(val > max){
                  max = val;
              }

              if(val < min){
                  min = val;
              }
          }

          min -= add;
          max -= add;

          if(min > max){
              // Inconsistent - swap
              var temp = min;
              min = max;
              max = temp;
          }
          // Output
          result[0] = max;
          result[1] = min;
      };

      },{"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"./Shape":44}],40:[function(_dereq_,module,exports){
      module.exports = Cylinder;

      _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');

      /**
       * @class Cylinder
       * @constructor
       * @extends ConvexPolyhedron
       * @author schteppe / https://github.com/schteppe
       * @param {Number} radiusTop
       * @param {Number} radiusBottom
       * @param {Number} height
       * @param {Number} numSegments The number of segments to build the cylinder out of
       */
      function Cylinder( radiusTop, radiusBottom, height , numSegments , isDirY) {
          if (isDirY) {
              var N = numSegments,
              cos = Math.cos,
              sin = Math.sin;
              var halfH = height / 2;
              var vertices = [];
              var indices = [];
              var tf = [0];
              var bf = [1];
              var axes = [];
              var theta = Math.PI * 2 / N;
              for (var i = 0; i < N; i++) {
                  vertices.push(new Vec3(radiusTop * cos(theta * i), halfH, radiusTop * sin(theta * i)));
                  vertices.push(new Vec3(radiusTop * cos(theta * i), -halfH, radiusTop * sin(theta * i)));
                  if (i < N - 1) {
                      indices.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
                      tf.push(2 * i + 2);
                      bf.push(2 * i + 3);
                  } else {
                      indices.push([0, 1, 2 * i + 1, 2 * i]);
                  }
                  if (N % 2 === 1 || i < N / 2) axes.push(new Vec3(cos(theta * (i + 0.5)), 0, sin(theta * (i + 0.5))));            
              }
              indices.push(bf);
              var temp = [];
              for (var i = 0; i < tf.length; i++) temp.push(tf[tf.length - i - 1]);    
              indices.push(temp);
              axes.push(new Vec3(0, 1, 0));
              ConvexPolyhedron.call(this, vertices, indices, axes);
              return;
          }
          var N = numSegments,
              verts = [],
              axes = [],
              faces = [],
              bottomface = [],
              topface = [],
              cos = Math.cos,
              sin = Math.sin;

          // First bottom point
          verts.push(new Vec3(radiusBottom*cos(0),
                                     radiusBottom*sin(0),
                                     -height*0.5));
          bottomface.push(0);

          // First top point
          verts.push(new Vec3(radiusTop*cos(0),
                                     radiusTop*sin(0),
                                     height*0.5));
          topface.push(1);

          for(var i=0; i<N; i++){
              var theta = 2*Math.PI/N * (i+1);
              var thetaN = 2*Math.PI/N * (i+0.5);
              if(i<N-1){
                  // Bottom
                  verts.push(new Vec3(radiusBottom*cos(theta),
                                             radiusBottom*sin(theta),
                                             -height*0.5));
                  bottomface.push(2*i+2);
                  // Top
                  verts.push(new Vec3(radiusTop*cos(theta),
                                             radiusTop*sin(theta),
                                             height*0.5));
                  topface.push(2*i+3);

                  // Face
                  faces.push([2*i+2, 2*i+3, 2*i+1,2*i]);
              } else {
                  faces.push([0,1, 2*i+1, 2*i]); // Connect
              }

              // Axis: we can cut off half of them if we have even number of segments
              if(N % 2 === 1 || i < N / 2){
                  axes.push(new Vec3(cos(thetaN), sin(thetaN), 0));
              }
          }
          faces.push(topface);
          axes.push(new Vec3(0,0,1));

          // Reorder bottom face
          var temp = [];
          for(var i=0; i<bottomface.length; i++){
              temp.push(bottomface[bottomface.length - i - 1]);
          }
          faces.push(temp);

          ConvexPolyhedron.call( this, verts, faces, axes );
      }

      Cylinder.prototype = new ConvexPolyhedron();

      },{"../math/Quaternion":29,"../math/Vec3":31,"./ConvexPolyhedron":39,"./Shape":44}],41:[function(_dereq_,module,exports){
      var Shape = _dereq_('./Shape');
      var ConvexPolyhedron = _dereq_('./ConvexPolyhedron');
      var Vec3 = _dereq_('../math/Vec3');
      var Utils = _dereq_('../utils/Utils');

      module.exports = Heightfield;

      /**
       * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a given distance.
       * @class Heightfield
       * @extends Shape
       * @constructor
       * @param {Array} data An array of Y values that will be used to construct the terrain.
       * @param {object} options
       * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.
       * @param {Number} [options.maxValue] Maximum value.
       * @param {Number} [options.elementSize=0.1] World spacing between the data points in X direction.
       * @todo Should be possible to use along all axes, not just y
       * @todo should be possible to scale along all axes
       *
       * @example
       *     // Generate some height data (y-values).
       *     var data = [];
       *     for(var i = 0; i < 1000; i++){
       *         var y = 0.5 * Math.cos(0.2 * i);
       *         data.push(y);
       *     }
       *
       *     // Create the heightfield shape
       *     var heightfieldShape = new Heightfield(data, {
       *         elementSize: 1 // Distance between the data points in X and Y directions
       *     });
       *     var heightfieldBody = new Body();
       *     heightfieldBody.addShape(heightfieldShape);
       *     world.addBody(heightfieldBody);
       */
      function Heightfield(data, options){
          options = Utils.defaults(options, {
              maxValue : null,
              minValue : null,
              elementSize : 1
          });

          /**
           * An array of numbers, or height values, that are spread out along the x axis.
           * @property {array} data
           */
          this.data = data;

          /**
           * Max value of the data
           * @property {number} maxValue
           */
          this.maxValue = options.maxValue;

          /**
           * Max value of the data
           * @property {number} minValue
           */
          this.minValue = options.minValue;

          /**
           * The width of each element
           * @property {number} elementSize
           * @todo elementSizeX and Y
           */
          this.elementSize = options.elementSize;

          if(options.minValue === null){
              this.updateMinValue();
          }
          if(options.maxValue === null){
              this.updateMaxValue();
          }

          this.cacheEnabled = true;

          Shape.call(this, {
              type: Shape.types.HEIGHTFIELD
          });

          this.pillarConvex = new ConvexPolyhedron();
          this.pillarOffset = new Vec3();

          this.updateBoundingSphereRadius();

          // "i_j_isUpper" => { convex: ..., offset: ... }
          // for example:
          // _cachedPillars["0_2_1"]
          this._cachedPillars = {};
      }
      Heightfield.prototype = new Shape();

      /**
       * Call whenever you change the data array.
       * @method update
       */
      Heightfield.prototype.update = function(){
          this._cachedPillars = {};
      };

      /**
       * Update the .minValue property
       * @method updateMinValue
       */
      Heightfield.prototype.updateMinValue = function(){
          var data = this.data;
          var minValue = data[0][0];
          for(var i=0; i !== data.length; i++){
              for(var j=0; j !== data[i].length; j++){
                  var v = data[i][j];
                  if(v < minValue){
                      minValue = v;
                  }
              }
          }
          this.minValue = minValue;
      };

      /**
       * Update the .maxValue property
       * @method updateMaxValue
       */
      Heightfield.prototype.updateMaxValue = function(){
          var data = this.data;
          var maxValue = data[0][0];
          for(var i=0; i !== data.length; i++){
              for(var j=0; j !== data[i].length; j++){
                  var v = data[i][j];
                  if(v > maxValue){
                      maxValue = v;
                  }
              }
          }
          this.maxValue = maxValue;
      };

      /**
       * Set the height value at an index. Don't forget to update maxValue and minValue after you're done.
       * @method setHeightValueAtIndex
       * @param {integer} xi
       * @param {integer} yi
       * @param {number} value
       */
      Heightfield.prototype.setHeightValueAtIndex = function(xi, yi, value){
          var data = this.data;
          data[xi][yi] = value;

          // Invalidate cache
          this.clearCachedConvexTrianglePillar(xi, yi, false);
          if(xi > 0){
              this.clearCachedConvexTrianglePillar(xi - 1, yi, true);
              this.clearCachedConvexTrianglePillar(xi - 1, yi, false);
          }
          if(yi > 0){
              this.clearCachedConvexTrianglePillar(xi, yi - 1, true);
              this.clearCachedConvexTrianglePillar(xi, yi - 1, false);
          }
          if(yi > 0 && xi > 0){
              this.clearCachedConvexTrianglePillar(xi - 1, yi - 1, true);
          }
      };

      /**
       * Get max/min in a rectangle in the matrix data
       * @method getRectMinMax
       * @param  {integer} iMinX
       * @param  {integer} iMinY
       * @param  {integer} iMaxX
       * @param  {integer} iMaxY
       * @param  {array} [result] An array to store the results in.
       * @return {array} The result array, if it was passed in. Minimum will be at position 0 and max at 1.
       */
      Heightfield.prototype.getRectMinMax = function (iMinX, iMinY, iMaxX, iMaxY, result) {
          result = result || [];

          // Get max and min of the data
          var data = this.data,
              max = this.minValue; // Set first value
          for(var i = iMinX; i <= iMaxX; i++){
              for(var j = iMinY; j <= iMaxY; j++){
                  var height = data[i][j];
                  if(height > max){
                      max = height;
                  }
              }
          }

          result[0] = this.minValue;
          result[1] = max;
      };



      /**
       * Get the index of a local position on the heightfield. The indexes indicate the rectangles, so if your terrain is made of N x N height data points, you will have rectangle indexes ranging from 0 to N-1.
       * @method getIndexOfPosition
       * @param  {number} x
       * @param  {number} y
       * @param  {array} result Two-element array
       * @param  {boolean} clamp If the position should be clamped to the heightfield edge.
       * @return {boolean}
       */
      Heightfield.prototype.getIndexOfPosition = function (x, y, result, clamp) {

          // Get the index of the data points to test against
          var w = this.elementSize;
          var data = this.data;
          var xi = Math.floor(x / w);
          var yi = Math.floor(y / w);

          result[0] = xi;
          result[1] = yi;

          if(clamp){
              // Clamp index to edges
              if(xi < 0){ xi = 0; }
              if(yi < 0){ yi = 0; }
              if(xi >= data.length - 1){ xi = data.length - 1; }
              if(yi >= data[0].length - 1){ yi = data[0].length - 1; }
          }

          // Bail out if we are out of the terrain
          if(xi < 0 || yi < 0 || xi >= data.length-1 || yi >= data[0].length-1){
              return false;
          }

          return true;
      };


      var getHeightAt_idx = [];
      var getHeightAt_weights = new Vec3();
      var getHeightAt_a = new Vec3();
      var getHeightAt_b = new Vec3();
      var getHeightAt_c = new Vec3();

      Heightfield.prototype.getTriangleAt = function(x, y, edgeClamp, a, b, c){
          var idx = getHeightAt_idx;
          this.getIndexOfPosition(x, y, idx, edgeClamp);
          var xi = idx[0];
          var yi = idx[1];

          var data = this.data;
          if(edgeClamp){
              xi = Math.min(data.length - 2, Math.max(0, xi));
              yi = Math.min(data[0].length - 2, Math.max(0, yi));
          }

          var elementSize = this.elementSize;
          var lowerDist2 = Math.pow(x / elementSize - xi, 2) + Math.pow(y / elementSize - yi, 2);
          var upperDist2 = Math.pow(x / elementSize - (xi + 1), 2) + Math.pow(y / elementSize - (yi + 1), 2);
          var upper = lowerDist2 > upperDist2;
          this.getTriangle(xi, yi, upper, a, b, c);
          return upper;
      };

      var getNormalAt_a = new Vec3();
      var getNormalAt_b = new Vec3();
      var getNormalAt_c = new Vec3();
      var getNormalAt_e0 = new Vec3();
      var getNormalAt_e1 = new Vec3();
      Heightfield.prototype.getNormalAt = function(x, y, edgeClamp, result){
          var a = getNormalAt_a;
          var b = getNormalAt_b;
          var c = getNormalAt_c;
          var e0 = getNormalAt_e0;
          var e1 = getNormalAt_e1;
          this.getTriangleAt(x, y, edgeClamp, a, b, c);
          b.vsub(a, e0);
          c.vsub(a, e1);
          e0.cross(e1, result);
          result.normalize();
      };


      /**
       * Get an AABB of a square in the heightfield
       * @param  {number} xi
       * @param  {number} yi
       * @param  {AABB} result
       */
      Heightfield.prototype.getAabbAtIndex = function(xi, yi, result){
          var data = this.data;
          var elementSize = this.elementSize;

          result.lowerBound.set(
              xi * elementSize,
              yi * elementSize,
              data[xi][yi]
          );
          result.upperBound.set(
              (xi + 1) * elementSize,
              (yi + 1) * elementSize,
              data[xi + 1][yi + 1]
          );
      };


      /**
       * Get the height in the heightfield at a given position
       * @param  {number} x
       * @param  {number} y
       * @param  {boolean} edgeClamp
       * @return {number}
       */
      Heightfield.prototype.getHeightAt = function(x, y, edgeClamp){
          var data = this.data;
          var a = getHeightAt_a;
          var b = getHeightAt_b;
          var c = getHeightAt_c;
          var idx = getHeightAt_idx;

          this.getIndexOfPosition(x, y, idx, edgeClamp);
          var xi = idx[0];
          var yi = idx[1];
          if(edgeClamp){
              xi = Math.min(data.length - 2, Math.max(0, xi));
              yi = Math.min(data[0].length - 2, Math.max(0, yi));
          }
          var upper = this.getTriangleAt(x, y, edgeClamp, a, b, c);
          barycentricWeights(x, y, a.x, a.y, b.x, b.y, c.x, c.y, getHeightAt_weights);

          var w = getHeightAt_weights;

          if(upper){

              // Top triangle verts
              return data[xi + 1][yi + 1] * w.x + data[xi][yi + 1] * w.y + data[xi + 1][yi] * w.z;

          } else {

              // Top triangle verts
              return data[xi][yi] * w.x + data[xi + 1][yi] * w.y + data[xi][yi + 1] * w.z;
          }
      };

      // from https://en.wikipedia.org/wiki/Barycentric_coordinate_system
      function barycentricWeights(x, y, ax, ay, bx, by, cx, cy, result){
          result.x = ((by - cy) * (x - cx) + (cx - bx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
          result.y = ((cy - ay) * (x - cx) + (ax - cx) * (y - cy)) / ((by - cy) * (ax - cx) + (cx - bx) * (ay - cy));
          result.z = 1 - result.x - result.y;
      }

      Heightfield.prototype.getCacheConvexTrianglePillarKey = function(xi, yi, getUpperTriangle){
          return xi + '_' + yi + '_' + (getUpperTriangle ? 1 : 0);
      };

      Heightfield.prototype.getCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
          return this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
      };

      Heightfield.prototype.setCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle, convex, offset){
          this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)] = {
              convex: convex,
              offset: offset
          };
      };

      Heightfield.prototype.clearCachedConvexTrianglePillar = function(xi, yi, getUpperTriangle){
          delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(xi, yi, getUpperTriangle)];
      };

      /**
       * Get a triangle from the heightfield
       * @param  {number} xi
       * @param  {number} yi
       * @param  {boolean} upper
       * @param  {Vec3} a
       * @param  {Vec3} b
       * @param  {Vec3} c
       */
      Heightfield.prototype.getTriangle = function(xi, yi, upper, a, b, c){
          var data = this.data;
          var elementSize = this.elementSize;

          if(upper){

              // Top triangle verts
              a.set(
                  (xi + 1) * elementSize,
                  (yi + 1) * elementSize,
                  data[xi + 1][yi + 1]
              );
              b.set(
                  xi * elementSize,
                  (yi + 1) * elementSize,
                  data[xi][yi + 1]
              );
              c.set(
                  (xi + 1) * elementSize,
                  yi * elementSize,
                  data[xi + 1][yi]
              );

          } else {

              // Top triangle verts
              a.set(
                  xi * elementSize,
                  yi * elementSize,
                  data[xi][yi]
              );
              b.set(
                  (xi + 1) * elementSize,
                  yi * elementSize,
                  data[xi + 1][yi]
              );
              c.set(
                  xi * elementSize,
                  (yi + 1) * elementSize,
                  data[xi][yi + 1]
              );
          }
      };

      /**
       * Get a triangle in the terrain in the form of a triangular convex shape.
       * @method getConvexTrianglePillar
       * @param  {integer} i
       * @param  {integer} j
       * @param  {boolean} getUpperTriangle
       */
      Heightfield.prototype.getConvexTrianglePillar = function(xi, yi, getUpperTriangle){
          var result = this.pillarConvex;
          var offsetResult = this.pillarOffset;

          if(this.cacheEnabled){
              var data = this.getCachedConvexTrianglePillar(xi, yi, getUpperTriangle);
              if(data){
                  this.pillarConvex = data.convex;
                  this.pillarOffset = data.offset;
                  return;
              }

              result = new ConvexPolyhedron();
              offsetResult = new Vec3();

              this.pillarConvex = result;
              this.pillarOffset = offsetResult;
          }

          var data = this.data;
          var elementSize = this.elementSize;
          var faces = result.faces;

          // Reuse verts if possible
          result.vertices.length = 6;
          for (var i = 0; i < 6; i++) {
              if(!result.vertices[i]){
                  result.vertices[i] = new Vec3();
              }
          }

          // Reuse faces if possible
          faces.length = 5;
          for (var i = 0; i < 5; i++) {
              if(!faces[i]){
                  faces[i] = [];
              }
          }

          var verts = result.vertices;

          var h = (Math.min(
              data[xi][yi],
              data[xi+1][yi],
              data[xi][yi+1],
              data[xi+1][yi+1]
          ) - this.minValue ) / 2 + this.minValue;

          if (!getUpperTriangle) {

              // Center of the triangle pillar - all polygons are given relative to this one
              offsetResult.set(
                  (xi + 0.25) * elementSize, // sort of center of a triangle
                  (yi + 0.25) * elementSize,
                  h // vertical center
              );

              // Top triangle verts
              verts[0].set(
                  -0.25 * elementSize,
                  -0.25 * elementSize,
                  data[xi][yi] - h
              );
              verts[1].set(
                  0.75 * elementSize,
                  -0.25 * elementSize,
                  data[xi + 1][yi] - h
              );
              verts[2].set(
                  -0.25 * elementSize,
                  0.75 * elementSize,
                  data[xi][yi + 1] - h
              );

              // bottom triangle verts
              verts[3].set(
                  -0.25 * elementSize,
                  -0.25 * elementSize,
                  -h-1
              );
              verts[4].set(
                  0.75 * elementSize,
                  -0.25 * elementSize,
                  -h-1
              );
              verts[5].set(
                  -0.25 * elementSize,
                  0.75  * elementSize,
                  -h-1
              );

              // top triangle
              faces[0][0] = 0;
              faces[0][1] = 1;
              faces[0][2] = 2;

              // bottom triangle
              faces[1][0] = 5;
              faces[1][1] = 4;
              faces[1][2] = 3;

              // -x facing quad
              faces[2][0] = 0;
              faces[2][1] = 2;
              faces[2][2] = 5;
              faces[2][3] = 3;

              // -y facing quad
              faces[3][0] = 1;
              faces[3][1] = 0;
              faces[3][2] = 3;
              faces[3][3] = 4;

              // +xy facing quad
              faces[4][0] = 4;
              faces[4][1] = 5;
              faces[4][2] = 2;
              faces[4][3] = 1;


          } else {

              // Center of the triangle pillar - all polygons are given relative to this one
              offsetResult.set(
                  (xi + 0.75) * elementSize, // sort of center of a triangle
                  (yi + 0.75) * elementSize,
                  h // vertical center
              );

              // Top triangle verts
              verts[0].set(
                  0.25 * elementSize,
                  0.25 * elementSize,
                  data[xi + 1][yi + 1] - h
              );
              verts[1].set(
                  -0.75 * elementSize,
                  0.25 * elementSize,
                  data[xi][yi + 1] - h
              );
              verts[2].set(
                  0.25 * elementSize,
                  -0.75 * elementSize,
                  data[xi + 1][yi] - h
              );

              // bottom triangle verts
              verts[3].set(
                  0.25 * elementSize,
                  0.25 * elementSize,
                  - h-1
              );
              verts[4].set(
                  -0.75 * elementSize,
                  0.25 * elementSize,
                  - h-1
              );
              verts[5].set(
                  0.25 * elementSize,
                  -0.75 * elementSize,
                  - h-1
              );

              // Top triangle
              faces[0][0] = 0;
              faces[0][1] = 1;
              faces[0][2] = 2;

              // bottom triangle
              faces[1][0] = 5;
              faces[1][1] = 4;
              faces[1][2] = 3;

              // +x facing quad
              faces[2][0] = 2;
              faces[2][1] = 5;
              faces[2][2] = 3;
              faces[2][3] = 0;

              // +y facing quad
              faces[3][0] = 3;
              faces[3][1] = 4;
              faces[3][2] = 1;
              faces[3][3] = 0;

              // -xy facing quad
              faces[4][0] = 1;
              faces[4][1] = 4;
              faces[4][2] = 5;
              faces[4][3] = 2;
          }

          result.computeNormals();
          result.computeEdges();
          result.updateBoundingSphereRadius();

          this.setCachedConvexTrianglePillar(xi, yi, getUpperTriangle, result, offsetResult);
      };

      Heightfield.prototype.calculateLocalInertia = function(mass, target){
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
      };

      Heightfield.prototype.volume = function(){
          return Number.MAX_VALUE; // The terrain is infinite
      };

      Heightfield.prototype.calculateWorldAABB = function(pos, quat, min, max){
          // TODO: do it properly
          min.set(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
          max.set(Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE);
      };

      Heightfield.prototype.updateBoundingSphereRadius = function(){
          // Use the bounding box of the min/max values
          var data = this.data,
              s = this.elementSize;
          this.boundingSphereRadius = new Vec3(data.length * s, data[0].length * s, Math.max(Math.abs(this.maxValue), Math.abs(this.minValue))).norm();
      };

      /**
       * Sets the height values from an image. Currently only supported in browser.
       * @method setHeightsFromImage
       * @param {Image} image
       * @param {Vec3} scale
       */
      Heightfield.prototype.setHeightsFromImage = function(image, scale){
          var canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          var imageData = context.getImageData(0, 0, image.width, image.height);

          var matrix = this.data;
          matrix.length = 0;
          this.elementSize = Math.abs(scale.x) / imageData.width;
          for(var i=0; i<imageData.height; i++){
              var row = [];
              for(var j=0; j<imageData.width; j++){
                  var a = imageData.data[(i*imageData.height + j) * 4];
                  var b = imageData.data[(i*imageData.height + j) * 4 + 1];
                  var c = imageData.data[(i*imageData.height + j) * 4 + 2];
                  var height = (a + b + c) / 4 / 255 * scale.z;
                  if(scale.x < 0){
                      row.push(height);
                  } else {
                      row.unshift(height);
                  }
              }
              if(scale.y < 0){
                  matrix.unshift(row);
              } else {
                  matrix.push(row);
              }
          }
          this.updateMaxValue();
          this.updateMinValue();
          this.update();
      };
      },{"../math/Vec3":31,"../utils/Utils":54,"./ConvexPolyhedron":39,"./Shape":44}],42:[function(_dereq_,module,exports){
      module.exports = Particle;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * Particle shape.
       * @class Particle
       * @constructor
       * @author schteppe
       * @extends Shape
       */
      function Particle(){
          Shape.call(this, {
              type: Shape.types.PARTICLE
          });
      }
      Particle.prototype = new Shape();
      Particle.prototype.constructor = Particle;

      /**
       * @method calculateLocalInertia
       * @param  {Number} mass
       * @param  {Vec3} target
       * @return {Vec3}
       */
      Particle.prototype.calculateLocalInertia = function(mass,target){
          target = target || new Vec3();
          target.set(0, 0, 0);
          return target;
      };

      Particle.prototype.volume = function(){
          return 0;
      };

      Particle.prototype.updateBoundingSphereRadius = function(){
          this.boundingSphereRadius = 0;
      };

      Particle.prototype.calculateWorldAABB = function(pos,quat,min,max){
          // Get each axis max
          min.copy(pos);
          max.copy(pos);
      };

      },{"../math/Vec3":31,"./Shape":44}],43:[function(_dereq_,module,exports){
      module.exports = Plane;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * A plane, facing in the Z direction. The plane has its surface at z=0 and everything below z=0 is assumed to be solid plane. To make the plane face in some other direction than z, you must put it inside a Body and rotate that body. See the demos.
       * @class Plane
       * @constructor
       * @extends Shape
       * @author schteppe
       */
      function Plane(){
          Shape.call(this, {
              type: Shape.types.PLANE
          });

          // World oriented normal
          this.worldNormal = new Vec3();
          this.worldNormalNeedsUpdate = true;

          this.boundingSphereRadius = Number.MAX_VALUE;
      }
      Plane.prototype = new Shape();
      Plane.prototype.constructor = Plane;

      Plane.prototype.computeWorldNormal = function(quat){
          var n = this.worldNormal;
          n.set(0,0,1);
          quat.vmult(n,n);
          this.worldNormalNeedsUpdate = false;
      };

      Plane.prototype.calculateLocalInertia = function(mass,target){
          target = target || new Vec3();
          return target;
      };

      Plane.prototype.volume = function(){
          return Number.MAX_VALUE; // The plane is infinite...
      };

      var tempNormal = new Vec3();
      Plane.prototype.calculateWorldAABB = function(pos, quat, min, max){
          // The plane AABB is infinite, except if the normal is pointing along any axis
          tempNormal.set(0,0,1); // Default plane normal is z
          quat.vmult(tempNormal,tempNormal);
          var maxVal = Number.MAX_VALUE;
          min.set(-maxVal, -maxVal, -maxVal);
          max.set(maxVal, maxVal, maxVal);

          if(tempNormal.x === 1){ max.x = pos.x; }
          if(tempNormal.y === 1){ max.y = pos.y; }
          if(tempNormal.z === 1){ max.z = pos.z; }

          if(tempNormal.x === -1){ min.x = pos.x; }
          if(tempNormal.y === -1){ min.y = pos.y; }
          if(tempNormal.z === -1){ min.z = pos.z; }
      };

      Plane.prototype.updateBoundingSphereRadius = function(){
          this.boundingSphereRadius = Number.MAX_VALUE;
      };
      },{"../math/Vec3":31,"./Shape":44}],44:[function(_dereq_,module,exports){
      module.exports = Shape;

      var EventTarget = _dereq_('../utils/EventTarget');
      var Shape = _dereq_('./Shape');
      _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      _dereq_('../material/Material');

      /**
       * Base class for shapes
       * @class Shape
       * @constructor
       * @param {object} [options]
       * @param {number} [options.collisionFilterGroup=1]
       * @param {number} [options.collisionFilterMask=-1]
       * @param {number} [options.collisionResponse=true]
       * @param {number} [options.material=null]
       * @author schteppe
       */
      function Shape(options){
          options = options || {};

          EventTarget.apply(this);
          /**
           * Identifyer of the Shape.
           * @property {number} id
           */
          this.id = Shape.idCounter++;

          /**
           * The type of this shape. Must be set to an int > 0 by subclasses.
           * @property type
           * @type {Number}
           * @see Shape.types
           */
          this.type = options.type || 0;

          /**
           * The local bounding sphere radius of this shape.
           * @property {Number} boundingSphereRadius
           */
          this.boundingSphereRadius = 0;

          /**
           * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled.
           * @property {boolean} collisionResponse
           */
          this.collisionResponse = options.collisionResponse ? options.collisionResponse : true;

          /**
           * @property {Number} collisionFilterGroup
           */
          this.collisionFilterGroup = options.collisionFilterGroup !== undefined ? options.collisionFilterGroup : 1;

          /**
           * @property {Number} collisionFilterMask
           */
          this.collisionFilterMask = options.collisionFilterMask !== undefined ? options.collisionFilterMask : -1;

          /**
           * @property {Material} material
           */
          this.material = options.material ? options.material : null;

          /**
           * @property {Body} body
           */
          this.body = null;
      }
      Shape.prototype = new EventTarget();
      Shape.prototype.constructor = Shape;

      /**
       * Computes the bounding sphere radius. The result is stored in the property .boundingSphereRadius
       * @method updateBoundingSphereRadius
       */
      Shape.prototype.updateBoundingSphereRadius = function(){
          throw "computeBoundingSphereRadius() not implemented for shape type "+this.type;
      };

      /**
       * Get the volume of this shape
       * @method volume
       * @return {Number}
       */
      Shape.prototype.volume = function(){
          throw "volume() not implemented for shape type "+this.type;
      };

      /**
       * Calculates the inertia in the local frame for this shape.
       * @method calculateLocalInertia
       * @param {Number} mass
       * @param {Vec3} target
       * @see http://en.wikipedia.org/wiki/List_of_moments_of_inertia
       */
      Shape.prototype.calculateLocalInertia = function(mass,target){
          throw "calculateLocalInertia() not implemented for shape type "+this.type;
      };

      Shape.idCounter = 0;

      /**
       * The available shape types.
       * @static
       * @property types
       * @type {Object}
       */
      Shape.types = {
          SPHERE:1,
          PLANE:2,
          BOX:4,
          COMPOUND:8,
          CONVEXPOLYHEDRON:16,
          HEIGHTFIELD:32,
          PARTICLE:64,
          CYLINDER:128,
          TRIMESH:256
      };


      },{"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"../utils/EventTarget":50,"./Shape":44}],45:[function(_dereq_,module,exports){
      module.exports = Sphere;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');

      /**
       * Spherical shape
       * @class Sphere
       * @constructor
       * @extends Shape
       * @param {Number} radius The radius of the sphere, a non-negative number.
       * @author schteppe / http://github.com/schteppe
       */
      function Sphere(radius){
          Shape.call(this, {
              type: Shape.types.SPHERE
          });

          /**
           * @property {Number} radius
           */
          this.radius = radius !== undefined ? radius : 1.0;

          if(this.radius < 0){
              throw new Error('The sphere radius cannot be negative.');
          }

          this.updateBoundingSphereRadius();
      }
      Sphere.prototype = new Shape();
      Sphere.prototype.constructor = Sphere;

      Sphere.prototype.calculateLocalInertia = function(mass,target){
          target = target || new Vec3();
          var I = 2.0*mass*this.radius*this.radius/5.0;
          target.x = I;
          target.y = I;
          target.z = I;
          return target;
      };

      Sphere.prototype.volume = function(){
          return 4.0 * Math.PI * this.radius / 3.0;
      };

      Sphere.prototype.updateBoundingSphereRadius = function(){
          this.boundingSphereRadius = this.radius;
      };

      Sphere.prototype.calculateWorldAABB = function(pos,quat,min,max){
          var r = this.radius;
          var axes = ['x','y','z'];
          for(var i=0; i<axes.length; i++){
              var ax = axes[i];
              min[ax] = pos[ax] - r;
              max[ax] = pos[ax] + r;
          }
      };

      },{"../math/Vec3":31,"./Shape":44}],46:[function(_dereq_,module,exports){
      module.exports = Trimesh;

      var Shape = _dereq_('./Shape');
      var Vec3 = _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      var Transform = _dereq_('../math/Transform');
      var AABB = _dereq_('../collision/AABB');
      var Octree = _dereq_('../utils/Octree');

      /**
       * @class Trimesh
       * @constructor
       * @param {array} vertices
       * @param {array} indices
       * @extends Shape
       * @example
       *     // How to make a mesh with a single triangle
       *     var vertices = [
       *         0, 0, 0, // vertex 0
       *         1, 0, 0, // vertex 1
       *         0, 1, 0  // vertex 2
       *     ];
       *     var indices = [
       *         0, 1, 2  // triangle 0
       *     ];
       *     var trimeshShape = new Trimesh(vertices, indices);
       */
      function Trimesh(vertices, indices) {
          Shape.call(this, {
              type: Shape.types.TRIMESH
          });

          /**
           * @property vertices
           * @type {Array}
           */
          this.vertices = new Float32Array(vertices);

          /**
           * Array of integers, indicating which vertices each triangle consists of. The length of this array is thus 3 times the number of triangles.
           * @property indices
           * @type {Array}
           */
          this.indices = new Int16Array(indices);

          /**
           * The normals data.
           * @property normals
           * @type {Array}
           */
          this.normals = new Float32Array(indices.length);

          /**
           * The local AABB of the mesh.
           * @property aabb
           * @type {Array}
           */
          this.aabb = new AABB();

          /**
           * References to vertex pairs, making up all unique edges in the trimesh.
           * @property {array} edges
           */
          this.edges = null;

          /**
           * Local scaling of the mesh. Use .setScale() to set it.
           * @property {Vec3} scale
           */
          this.scale = new Vec3(1, 1, 1);

          /**
           * The indexed triangles. Use .updateTree() to update it.
           * @property {Octree} tree
           */
          this.tree = new Octree();

          this.updateEdges();
          this.updateNormals();
          this.updateAABB();
          this.updateBoundingSphereRadius();
          this.updateTree();
      }
      Trimesh.prototype = new Shape();
      Trimesh.prototype.constructor = Trimesh;

      var computeNormals_n = new Vec3();

      /**
       * @method updateTree
       */
      Trimesh.prototype.updateTree = function(){
          var tree = this.tree;

          tree.reset();
          tree.aabb.copy(this.aabb);
          var scale = this.scale; // The local mesh AABB is scaled, but the octree AABB should be unscaled
          tree.aabb.lowerBound.x *= 1 / scale.x;
          tree.aabb.lowerBound.y *= 1 / scale.y;
          tree.aabb.lowerBound.z *= 1 / scale.z;
          tree.aabb.upperBound.x *= 1 / scale.x;
          tree.aabb.upperBound.y *= 1 / scale.y;
          tree.aabb.upperBound.z *= 1 / scale.z;

          // Insert all triangles
          var triangleAABB = new AABB();
          var a = new Vec3();
          var b = new Vec3();
          var c = new Vec3();
          var points = [a, b, c];
          for (var i = 0; i < this.indices.length / 3; i++) {
              //this.getTriangleVertices(i, a, b, c);

              // Get unscaled triangle verts
              var i3 = i * 3;
              this._getUnscaledVertex(this.indices[i3], a);
              this._getUnscaledVertex(this.indices[i3 + 1], b);
              this._getUnscaledVertex(this.indices[i3 + 2], c);

              triangleAABB.setFromPoints(points);
              tree.insert(triangleAABB, i);
          }
          tree.removeEmptyNodes();
      };

      var unscaledAABB = new AABB();

      /**
       * Get triangles in a local AABB from the trimesh.
       * @method getTrianglesInAABB
       * @param  {AABB} aabb
       * @param  {array} result An array of integers, referencing the queried triangles.
       */
      Trimesh.prototype.getTrianglesInAABB = function(aabb, result){
          unscaledAABB.copy(aabb);

          // Scale it to local
          var scale = this.scale;
          var isx = scale.x;
          var isy = scale.y;
          var isz = scale.z;
          var l = unscaledAABB.lowerBound;
          var u = unscaledAABB.upperBound;
          l.x /= isx;
          l.y /= isy;
          l.z /= isz;
          u.x /= isx;
          u.y /= isy;
          u.z /= isz;

          return this.tree.aabbQuery(unscaledAABB, result);
      };

      /**
       * @method setScale
       * @param {Vec3} scale
       */
      Trimesh.prototype.setScale = function(scale){
          var wasUniform = this.scale.x === this.scale.y === this.scale.z;
          var isUniform = scale.x === scale.y === scale.z;

          if(!(wasUniform && isUniform)){
              // Non-uniform scaling. Need to update normals.
              this.updateNormals();
          }
          this.scale.copy(scale);
          this.updateAABB();
          this.updateBoundingSphereRadius();
      };

      /**
       * Compute the normals of the faces. Will save in the .normals array.
       * @method updateNormals
       */
      Trimesh.prototype.updateNormals = function(){
          var n = computeNormals_n;

          // Generate normals
          var normals = this.normals;
          for(var i=0; i < this.indices.length / 3; i++){
              var i3 = i * 3;

              var a = this.indices[i3],
                  b = this.indices[i3 + 1],
                  c = this.indices[i3 + 2];

              this.getVertex(a, va);
              this.getVertex(b, vb);
              this.getVertex(c, vc);

              Trimesh.computeNormal(vb, va, vc, n);

              normals[i3] = n.x;
              normals[i3 + 1] = n.y;
              normals[i3 + 2] = n.z;
          }
      };

      /**
       * Update the .edges property
       * @method updateEdges
       */
      Trimesh.prototype.updateEdges = function(){
          var edges = {};
          var add = function(indexA, indexB){
              var key = a < b ? a + '_' + b : b + '_' + a;
              edges[key] = true;
          };
          for(var i=0; i < this.indices.length / 3; i++){
              var i3 = i * 3;
              var a = this.indices[i3],
                  b = this.indices[i3 + 1];
                  this.indices[i3 + 2];
              add();
              add();
              add();
          }
          var keys = Object.keys(edges);
          this.edges = new Int16Array(keys.length * 2);
          for (var i = 0; i < keys.length; i++) {
              var indices = keys[i].split('_');
              this.edges[2 * i] = parseInt(indices[0], 10);
              this.edges[2 * i + 1] = parseInt(indices[1], 10);
          }
      };

      /**
       * Get an edge vertex
       * @method getEdgeVertex
       * @param  {number} edgeIndex
       * @param  {number} firstOrSecond 0 or 1, depending on which one of the vertices you need.
       * @param  {Vec3} vertexStore Where to store the result
       */
      Trimesh.prototype.getEdgeVertex = function(edgeIndex, firstOrSecond, vertexStore){
          var vertexIndex = this.edges[edgeIndex * 2 + (firstOrSecond ? 1 : 0)];
          this.getVertex(vertexIndex, vertexStore);
      };

      var getEdgeVector_va = new Vec3();
      var getEdgeVector_vb = new Vec3();

      /**
       * Get a vector along an edge.
       * @method getEdgeVector
       * @param  {number} edgeIndex
       * @param  {Vec3} vectorStore
       */
      Trimesh.prototype.getEdgeVector = function(edgeIndex, vectorStore){
          var va = getEdgeVector_va;
          var vb = getEdgeVector_vb;
          this.getEdgeVertex(edgeIndex, 0, va);
          this.getEdgeVertex(edgeIndex, 1, vb);
          vb.vsub(va, vectorStore);
      };

      /**
       * Get face normal given 3 vertices
       * @static
       * @method computeNormal
       * @param {Vec3} va
       * @param {Vec3} vb
       * @param {Vec3} vc
       * @param {Vec3} target
       */
      var cb = new Vec3();
      var ab = new Vec3();
      Trimesh.computeNormal = function ( va, vb, vc, target ) {
          vb.vsub(va,ab);
          vc.vsub(vb,cb);
          cb.cross(ab,target);
          if ( !target.isZero() ) {
              target.normalize();
          }
      };

      var va = new Vec3();
      var vb = new Vec3();
      var vc = new Vec3();

      /**
       * Get vertex i.
       * @method getVertex
       * @param  {number} i
       * @param  {Vec3} out
       * @return {Vec3} The "out" vector object
       */
      Trimesh.prototype.getVertex = function(i, out){
          var scale = this.scale;
          this._getUnscaledVertex(i, out);
          out.x *= scale.x;
          out.y *= scale.y;
          out.z *= scale.z;
          return out;
      };

      /**
       * Get raw vertex i
       * @private
       * @method _getUnscaledVertex
       * @param  {number} i
       * @param  {Vec3} out
       * @return {Vec3} The "out" vector object
       */
      Trimesh.prototype._getUnscaledVertex = function(i, out){
          var i3 = i * 3;
          var vertices = this.vertices;
          return out.set(
              vertices[i3],
              vertices[i3 + 1],
              vertices[i3 + 2]
          );
      };

      /**
       * Get a vertex from the trimesh,transformed by the given position and quaternion.
       * @method getWorldVertex
       * @param  {number} i
       * @param  {Vec3} pos
       * @param  {Quaternion} quat
       * @param  {Vec3} out
       * @return {Vec3} The "out" vector object
       */
      Trimesh.prototype.getWorldVertex = function(i, pos, quat, out){
          this.getVertex(i, out);
          Transform.pointToWorldFrame(pos, quat, out, out);
          return out;
      };

      /**
       * Get the three vertices for triangle i.
       * @method getTriangleVertices
       * @param  {number} i
       * @param  {Vec3} a
       * @param  {Vec3} b
       * @param  {Vec3} c
       */
      Trimesh.prototype.getTriangleVertices = function(i, a, b, c){
          var i3 = i * 3;
          this.getVertex(this.indices[i3], a);
          this.getVertex(this.indices[i3 + 1], b);
          this.getVertex(this.indices[i3 + 2], c);
      };

      /**
       * Compute the normal of triangle i.
       * @method getNormal
       * @param  {Number} i
       * @param  {Vec3} target
       * @return {Vec3} The "target" vector object
       */
      Trimesh.prototype.getNormal = function(i, target){
          var i3 = i * 3;
          return target.set(
              this.normals[i3],
              this.normals[i3 + 1],
              this.normals[i3 + 2]
          );
      };

      var cli_aabb = new AABB();

      /**
       * @method calculateLocalInertia
       * @param  {Number} mass
       * @param  {Vec3} target
       * @return {Vec3} The "target" vector object
       */
      Trimesh.prototype.calculateLocalInertia = function(mass,target){
          // Approximate with box inertia
          // Exact inertia calculation is overkill, but see http://geometrictools.com/Documentation/PolyhedralMassProperties.pdf for the correct way to do it
          this.computeLocalAABB(cli_aabb);
          var x = cli_aabb.upperBound.x - cli_aabb.lowerBound.x,
              y = cli_aabb.upperBound.y - cli_aabb.lowerBound.y,
              z = cli_aabb.upperBound.z - cli_aabb.lowerBound.z;
          return target.set(
              1.0 / 12.0 * mass * ( 2*y*2*y + 2*z*2*z ),
              1.0 / 12.0 * mass * ( 2*x*2*x + 2*z*2*z ),
              1.0 / 12.0 * mass * ( 2*y*2*y + 2*x*2*x )
          );
      };

      var computeLocalAABB_worldVert = new Vec3();

      /**
       * Compute the local AABB for the trimesh
       * @method computeLocalAABB
       * @param  {AABB} aabb
       */
      Trimesh.prototype.computeLocalAABB = function(aabb){
          var l = aabb.lowerBound,
              u = aabb.upperBound,
              n = this.vertices.length/3,
              v = computeLocalAABB_worldVert;
          if (n===0) return;
          this.getVertex(0, v);
          l.copy(v);
          u.copy(v);

          for(var i=0; i !== n; i++){
              this.getVertex(i, v);

              if(v.x < l.x){
                  l.x = v.x;
              } else if(v.x > u.x){
                  u.x = v.x;
              }

              if(v.y < l.y){
                  l.y = v.y;
              } else if(v.y > u.y){
                  u.y = v.y;
              }

              if(v.z < l.z){
                  l.z = v.z;
              } else if(v.z > u.z){
                  u.z = v.z;
              }
          }
      };


      /**
       * Update the .aabb property
       * @method updateAABB
       */
      Trimesh.prototype.updateAABB = function(){
          this.computeLocalAABB(this.aabb);
      };

      /**
       * Will update the .boundingSphereRadius property
       * @method updateBoundingSphereRadius
       */
      Trimesh.prototype.updateBoundingSphereRadius = function(){
          // Assume points are distributed with local (0,0,0) as center
          var max2 = 0;
          var vertices = this.vertices;
          var v = new Vec3();
          for(var i=0, N=vertices.length / 3; i !== N; i++) {
              this.getVertex(i, v);
              var norm2 = v.norm2();
              if(norm2 > max2){
                  max2 = norm2;
              }
          }
          this.boundingSphereRadius = Math.sqrt(max2);
      };

      new Vec3();
      var calculateWorldAABB_frame = new Transform();
      var calculateWorldAABB_aabb = new AABB();

      /**
       * @method calculateWorldAABB
       * @param {Vec3}        pos
       * @param {Quaternion}  quat
       * @param {Vec3}        min
       * @param {Vec3}        max
       */
      Trimesh.prototype.calculateWorldAABB = function(pos,quat,min,max){
          /*
          var n = this.vertices.length / 3,
              verts = this.vertices;
          var minx,miny,minz,maxx,maxy,maxz;

          var v = tempWorldVertex;
          for(var i=0; i<n; i++){
              this.getVertex(i, v);
              quat.vmult(v, v);
              pos.vadd(v, v);
              if (v.x < minx || minx===undefined){
                  minx = v.x;
              } else if(v.x > maxx || maxx===undefined){
                  maxx = v.x;
              }

              if (v.y < miny || miny===undefined){
                  miny = v.y;
              } else if(v.y > maxy || maxy===undefined){
                  maxy = v.y;
              }

              if (v.z < minz || minz===undefined){
                  minz = v.z;
              } else if(v.z > maxz || maxz===undefined){
                  maxz = v.z;
              }
          }
          min.set(minx,miny,minz);
          max.set(maxx,maxy,maxz);
          */

          // Faster approximation using local AABB
          var frame = calculateWorldAABB_frame;
          var result = calculateWorldAABB_aabb;
          frame.position = pos;
          frame.quaternion = quat;
          this.aabb.toWorldFrame(frame, result);
          min.copy(result.lowerBound);
          max.copy(result.upperBound);
      };

      /**
       * Get approximate volume
       * @method volume
       * @return {Number}
       */
      Trimesh.prototype.volume = function(){
          return 4.0 * Math.PI * this.boundingSphereRadius / 3.0;
      };

      /**
       * Create a Trimesh instance, shaped as a torus.
       * @static
       * @method createTorus
       * @param  {number} [radius=1]
       * @param  {number} [tube=0.5]
       * @param  {number} [radialSegments=8]
       * @param  {number} [tubularSegments=6]
       * @param  {number} [arc=6.283185307179586]
       * @return {Trimesh} A torus
       */
      Trimesh.createTorus = function (radius, tube, radialSegments, tubularSegments, arc) {
          radius = radius || 1;
          tube = tube || 0.5;
          radialSegments = radialSegments || 8;
          tubularSegments = tubularSegments || 6;
          arc = arc || Math.PI * 2;

          var vertices = [];
          var indices = [];

          for ( var j = 0; j <= radialSegments; j ++ ) {
              for ( var i = 0; i <= tubularSegments; i ++ ) {
                  var u = i / tubularSegments * arc;
                  var v = j / radialSegments * Math.PI * 2;

                  var x = ( radius + tube * Math.cos( v ) ) * Math.cos( u );
                  var y = ( radius + tube * Math.cos( v ) ) * Math.sin( u );
                  var z = tube * Math.sin( v );

                  vertices.push( x, y, z );
              }
          }

          for ( var j = 1; j <= radialSegments; j ++ ) {
              for ( var i = 1; i <= tubularSegments; i ++ ) {
                  var a = ( tubularSegments + 1 ) * j + i - 1;
                  var b = ( tubularSegments + 1 ) * ( j - 1 ) + i - 1;
                  var c = ( tubularSegments + 1 ) * ( j - 1 ) + i;
                  var d = ( tubularSegments + 1 ) * j + i;

                  indices.push(a, b, d);
                  indices.push(b, c, d);
              }
          }

          return new Trimesh(vertices, indices);
      };

      },{"../collision/AABB":3,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../utils/Octree":51,"./Shape":44}],47:[function(_dereq_,module,exports){
      module.exports = GSSolver;

      _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      var Solver = _dereq_('./Solver');

      /**
       * Constraint equation Gauss-Seidel solver.
       * @class GSSolver
       * @constructor
       * @todo The spook parameters should be specified for each constraint, not globally.
       * @author schteppe / https://github.com/schteppe
       * @see https://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf
       * @extends Solver
       */
      function GSSolver(){
          Solver.call(this);

          /**
           * The number of solver iterations determines quality of the constraints in the world. The more iterations, the more correct simulation. More iterations need more computations though. If you have a large gravity force in your world, you will need more iterations.
           * @property iterations
           * @type {Number}
           * @todo write more about solver and iterations in the wiki
           */
          this.iterations = 10;

          /**
           * When tolerance is reached, the system is assumed to be converged.
           * @property tolerance
           * @type {Number}
           */
          this.tolerance = 1e-7;
      }
      GSSolver.prototype = new Solver();

      var GSSolver_solve_lambda = []; // Just temporary number holders that we want to reuse each solve.
      var GSSolver_solve_invCs = [];
      var GSSolver_solve_Bs = [];
      GSSolver.prototype.solve = function(dt,world){
          var iter = 0,
              maxIter = this.iterations,
              tolSquared = this.tolerance*this.tolerance,
              equations = this.equations,
              Neq = equations.length,
              bodies = world.bodies,
              Nbodies = bodies.length,
              h = dt,
              B, invC, deltalambda, deltalambdaTot, GWlambda, lambdaj;

          // Update solve mass
          if(Neq !== 0){
              for(var i=0; i!==Nbodies; i++){
                  bodies[i].updateSolveMassProperties();
              }
          }

          // Things that does not change during iteration can be computed once
          var invCs = GSSolver_solve_invCs,
              Bs = GSSolver_solve_Bs,
              lambda = GSSolver_solve_lambda;
          invCs.length = Neq;
          Bs.length = Neq;
          lambda.length = Neq;
          for(var i=0; i!==Neq; i++){
              var c = equations[i];
              lambda[i] = 0.0;
              Bs[i] = c.computeB(h);
              invCs[i] = 1.0 / c.computeC();
          }

          if(Neq !== 0){

              // Reset vlambda
              for(var i=0; i!==Nbodies; i++){
                  var b=bodies[i],
                      vlambda=b.vlambda,
                      wlambda=b.wlambda;
                  vlambda.set(0,0,0);
                  wlambda.set(0,0,0);
              }

              // Iterate over equations
              for(iter=0; iter!==maxIter; iter++){

                  // Accumulate the total error for each iteration.
                  deltalambdaTot = 0.0;

                  for(var j=0; j!==Neq; j++){

                      var c = equations[j];

                      // Compute iteration
                      B = Bs[j];
                      invC = invCs[j];
                      lambdaj = lambda[j];
                      GWlambda = c.computeGWlambda();
                      deltalambda = invC * ( B - GWlambda - c.eps * lambdaj );

                      // Clamp if we are not within the min/max interval
                      if(lambdaj + deltalambda < c.minForce){
                          deltalambda = c.minForce - lambdaj;
                      } else if(lambdaj + deltalambda > c.maxForce){
                          deltalambda = c.maxForce - lambdaj;
                      }
                      lambda[j] += deltalambda;

                      deltalambdaTot += deltalambda > 0.0 ? deltalambda : -deltalambda; // abs(deltalambda)

                      c.addToWlambda(deltalambda);
                  }

                  // If the total error is small enough - stop iterate
                  if(deltalambdaTot*deltalambdaTot < tolSquared){
                      break;
                  }
              }

              // Add result to velocity
              for(var i=0; i!==Nbodies; i++){
                  var b=bodies[i],
                      v=b.velocity,
                      w=b.angularVelocity;

                  b.vlambda.vmul(b.linearFactor, b.vlambda);
                  v.vadd(b.vlambda, v);

                  b.wlambda.vmul(b.angularFactor, b.wlambda);
                  w.vadd(b.wlambda, w);
              }

              // Set the .multiplier property of each equation
              var l = equations.length;
              var invDt = 1 / h;
              while(l--){
                  equations[l].multiplier = lambda[l] * invDt;
              }
          }

          return iter;
      };

      },{"../math/Quaternion":29,"../math/Vec3":31,"./Solver":48}],48:[function(_dereq_,module,exports){
      module.exports = Solver;

      /**
       * Constraint equation solver base class.
       * @class Solver
       * @constructor
       * @author schteppe / https://github.com/schteppe
       */
      function Solver(){
          /**
           * All equations to be solved
           * @property {Array} equations
           */
          this.equations = [];
      }

      /**
       * Should be implemented in subclasses!
       * @method solve
       * @param  {Number} dt
       * @param  {World} world
       */
      Solver.prototype.solve = function(dt,world){
          // Should return the number of iterations done!
          return 0;
      };

      /**
       * Add an equation
       * @method addEquation
       * @param {Equation} eq
       */
      Solver.prototype.addEquation = function(eq){
          if (eq.enabled) {
              this.equations.push(eq);
          }
      };

      /**
       * Remove an equation
       * @method removeEquation
       * @param {Equation} eq
       */
      Solver.prototype.removeEquation = function(eq){
          var eqs = this.equations;
          var i = eqs.indexOf(eq);
          if(i !== -1){
              eqs.splice(i,1);
          }
      };

      /**
       * Add all equations
       * @method removeAllEquations
       */
      Solver.prototype.removeAllEquations = function(){
          this.equations.length = 0;
      };


      },{}],49:[function(_dereq_,module,exports){
      module.exports = SplitSolver;

      _dereq_('../math/Vec3');
      _dereq_('../math/Quaternion');
      var Solver = _dereq_('./Solver');
      var Body = _dereq_('../objects/Body');

      /**
       * Splits the equations into islands and solves them independently. Can improve performance.
       * @class SplitSolver
       * @constructor
       * @extends Solver
       * @param {Solver} subsolver
       */
      function SplitSolver(subsolver){
          Solver.call(this);
          this.iterations = 10;
          this.tolerance = 1e-7;
          this.subsolver = subsolver;
          this.nodes = [];
          this.nodePool = [];

          // Create needed nodes, reuse if possible
          while(this.nodePool.length < 128){
              this.nodePool.push(this.createNode());
          }
      }
      SplitSolver.prototype = new Solver();

      // Returns the number of subsystems
      var SplitSolver_solve_nodes = []; // All allocated node objects
      var SplitSolver_solve_eqs = [];   // Temp array
      var SplitSolver_solve_dummyWorld = {bodies:[]}; // Temp object

      var STATIC = Body.STATIC;
      function getUnvisitedNode(nodes){
          var Nnodes = nodes.length;
          for(var i=0; i!==Nnodes; i++){
              var node = nodes[i];
              if(!node.visited && !(node.body.type & STATIC)){
                  return node;
              }
          }
          return false;
      }

      var queue = [];
      function bfs(root,visitFunc,bds,eqs){
          queue.push(root);
          root.visited = true;
          visitFunc(root,bds,eqs);
          while(queue.length) {
              var node = queue.pop();
              // Loop over unvisited child nodes
              var child;
              while((child = getUnvisitedNode(node.children))) {
                  child.visited = true;
                  visitFunc(child,bds,eqs);
                  queue.push(child);
              }
          }
      }

      function visitFunc(node,bds,eqs){
          bds.push(node.body);
          var Neqs = node.eqs.length;
          for(var i=0; i!==Neqs; i++){
              var eq = node.eqs[i];
              if(eqs.indexOf(eq) === -1){
                  eqs.push(eq);
              }
          }
      }

      SplitSolver.prototype.createNode = function(){
          return { body:null, children:[], eqs:[], visited:false };
      };

      /**
       * Solve the subsystems
       * @method solve
       * @param  {Number} dt
       * @param  {World} world
       */
      SplitSolver.prototype.solve = function(dt,world){
          var nodes=SplitSolver_solve_nodes,
              nodePool=this.nodePool,
              bodies=world.bodies,
              equations=this.equations,
              Neq=equations.length,
              Nbodies=bodies.length,
              subsolver=this.subsolver;

          // Create needed nodes, reuse if possible
          while(nodePool.length < Nbodies){
              nodePool.push(this.createNode());
          }
          nodes.length = Nbodies;
          for (var i = 0; i < Nbodies; i++) {
              nodes[i] = nodePool[i];
          }

          // Reset node values
          for(var i=0; i!==Nbodies; i++){
              var node = nodes[i];
              node.body = bodies[i];
              node.children.length = 0;
              node.eqs.length = 0;
              node.visited = false;
          }
          for(var k=0; k!==Neq; k++){
              var eq=equations[k],
                  i=bodies.indexOf(eq.bi),
                  j=bodies.indexOf(eq.bj),
                  ni=nodes[i],
                  nj=nodes[j];
              ni.children.push(nj);
              ni.eqs.push(eq);
              nj.children.push(ni);
              nj.eqs.push(eq);
          }

          var child, n=0, eqs=SplitSolver_solve_eqs;

          subsolver.tolerance = this.tolerance;
          subsolver.iterations = this.iterations;

          var dummyWorld = SplitSolver_solve_dummyWorld;
          while((child = getUnvisitedNode(nodes))){
              eqs.length = 0;
              dummyWorld.bodies.length = 0;
              bfs(child, visitFunc, dummyWorld.bodies, eqs);

              var Neqs = eqs.length;

              eqs = eqs.sort(sortById);

              for(var i=0; i!==Neqs; i++){
                  subsolver.addEquation(eqs[i]);
              }

              subsolver.solve(dt,dummyWorld);
              subsolver.removeAllEquations();
              n++;
          }

          return n;
      };

      function sortById(a, b){
          return b.id - a.id;
      }
      },{"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"./Solver":48}],50:[function(_dereq_,module,exports){
      /**
       * Base class for objects that dispatches events.
       * @class EventTarget
       * @constructor
       */
      var EventTarget = function () {

      };

      module.exports = EventTarget;

      EventTarget.prototype = {
          constructor: EventTarget,

          /**
           * Add an event listener
           * @method addEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {EventTarget} The self object, for chainability.
           */
          addEventListener: function ( type, listener ) {
              if ( this._listeners === undefined ){ this._listeners = {}; }
              var listeners = this._listeners;
              if ( listeners[ type ] === undefined ) {
                  listeners[ type ] = [];
              }
              if ( listeners[ type ].indexOf( listener ) === - 1 ) {
                  listeners[ type ].push( listener );
              }
              return this;
          },

          /**
           * Check if an event listener is added
           * @method hasEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {Boolean}
           */
          hasEventListener: function ( type, listener ) {
              if ( this._listeners === undefined ){ return false; }
              var listeners = this._listeners;
              if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {
                  return true;
              }
              return false;
          },

          /**
           * Check if any event listener of the given type is added
           * @method hasAnyEventListener
           * @param  {String} type
           * @return {Boolean}
           */
          hasAnyEventListener: function ( type ) {
              if ( this._listeners === undefined ){ return false; }
              var listeners = this._listeners;
              return ( listeners[ type ] !== undefined );
          },

          /**
           * Remove an event listener
           * @method removeEventListener
           * @param  {String} type
           * @param  {Function} listener
           * @return {EventTarget} The self object, for chainability.
           */
          removeEventListener: function ( type, listener ) {
              if ( this._listeners === undefined ){ return this; }
              var listeners = this._listeners;
              if ( listeners[type] === undefined ){ return this; }
              var index = listeners[ type ].indexOf( listener );
              if ( index !== - 1 ) {
                  listeners[ type ].splice( index, 1 );
              }
              return this;
          },

          /**
           * Emit an event.
           * @method dispatchEvent
           * @param  {Object} event
           * @param  {String} event.type
           * @return {EventTarget} The self object, for chainability.
           */
          dispatchEvent: function ( event ) {
              if ( this._listeners === undefined ){ return this; }
              var listeners = this._listeners;
              var listenerArray = listeners[ event.type ];
              if ( listenerArray !== undefined ) {
                  event.target = this;
                  for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {
                      listenerArray[ i ].call( this, event );
                  }
              }
              return this;
          }
      };

      },{}],51:[function(_dereq_,module,exports){
      var AABB = _dereq_('../collision/AABB');
      var Vec3 = _dereq_('../math/Vec3');

      module.exports = Octree;

      /**
       * @class OctreeNode
       * @param {object} [options]
       * @param {Octree} [options.root]
       * @param {AABB} [options.aabb]
       */
      function OctreeNode(options){
          options = options || {};

          /**
           * The root node
           * @property {OctreeNode} root
           */
          this.root = options.root || null;

          /**
           * Boundary of this node
           * @property {AABB} aabb
           */
          this.aabb = options.aabb ? options.aabb.clone() : new AABB();

          /**
           * Contained data at the current node level.
           * @property {Array} data
           */
          this.data = [];

          /**
           * Children to this node
           * @property {Array} children
           */
          this.children = [];
      }

      /**
       * @class Octree
       * @param {AABB} aabb The total AABB of the tree
       * @param {object} [options]
       * @param {number} [options.maxDepth=8]
       * @extends OctreeNode
       */
      function Octree(aabb, options){
          options = options || {};
          options.root = null;
          options.aabb = aabb;
          OctreeNode.call(this, options);

          /**
           * Maximum subdivision depth
           * @property {number} maxDepth
           */
          this.maxDepth = typeof(options.maxDepth) !== 'undefined' ? options.maxDepth : 8;
      }
      Octree.prototype = new OctreeNode();

      OctreeNode.prototype.reset = function(aabb, options){
          this.children.length = this.data.length = 0;
      };

      /**
       * Insert data into this node
       * @method insert
       * @param  {AABB} aabb
       * @param  {object} elementData
       * @return {boolean} True if successful, otherwise false
       */
      OctreeNode.prototype.insert = function(aabb, elementData, level){
          var nodeData = this.data;
          level = level || 0;

          // Ignore objects that do not belong in this node
          if (!this.aabb.contains(aabb)){
              return false; // object cannot be added
          }

          var children = this.children;

          if(level < (this.maxDepth || this.root.maxDepth)){
              // Subdivide if there are no children yet
              var subdivided = false;
              if (!children.length){
                  this.subdivide();
                  subdivided = true;
              }

              // add to whichever node will accept it
              for (var i = 0; i !== 8; i++) {
                  if (children[i].insert(aabb, elementData, level + 1)){
                      return true;
                  }
              }

              if(subdivided){
                  // No children accepted! Might as well just remove em since they contain none
                  children.length = 0;
              }
          }

          // Too deep, or children didnt want it. add it in current node
          nodeData.push(elementData);

          return true;
      };

      var halfDiagonal = new Vec3();

      /**
       * Create 8 equally sized children nodes and put them in the .children array.
       * @method subdivide
       */
      OctreeNode.prototype.subdivide = function() {
          var aabb = this.aabb;
          var l = aabb.lowerBound;
          var u = aabb.upperBound;

          var children = this.children;

          children.push(
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,0) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,0) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,0) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,1,1) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,1) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,0,1) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(1,0,1) }) }),
              new OctreeNode({ aabb: new AABB({ lowerBound: new Vec3(0,1,0) }) })
          );

          u.vsub(l, halfDiagonal);
          halfDiagonal.scale(0.5, halfDiagonal);

          var root = this.root || this;

          for (var i = 0; i !== 8; i++) {
              var child = children[i];

              // Set current node as root
              child.root = root;

              // Compute bounds
              var lowerBound = child.aabb.lowerBound;
              lowerBound.x *= halfDiagonal.x;
              lowerBound.y *= halfDiagonal.y;
              lowerBound.z *= halfDiagonal.z;

              lowerBound.vadd(l, lowerBound);

              // Upper bound is always lower bound + halfDiagonal
              lowerBound.vadd(halfDiagonal, child.aabb.upperBound);
          }
      };

      /**
       * Get all data, potentially within an AABB
       * @method aabbQuery
       * @param  {AABB} aabb
       * @param  {array} result
       * @return {array} The "result" object
       */
      OctreeNode.prototype.aabbQuery = function(aabb, result) {

          this.data;

          // abort if the range does not intersect this node
          // if (!this.aabb.overlaps(aabb)){
          //     return result;
          // }

          // Add objects at this level
          // Array.prototype.push.apply(result, nodeData);

          // Add child data
          // @todo unwrap recursion into a queue / loop, that's faster in JS
          this.children;


          // for (var i = 0, N = this.children.length; i !== N; i++) {
          //     children[i].aabbQuery(aabb, result);
          // }

          var queue = [this];
          while (queue.length) {
              var node = queue.pop();
              if (node.aabb.overlaps(aabb)){
                  Array.prototype.push.apply(result, node.data);
              }
              Array.prototype.push.apply(queue, node.children);
          }

          return result;
      };

      var tmpAABB = new AABB();

      /**
       * Get all data, potentially intersected by a ray.
       * @method rayQuery
       * @param  {Ray} ray
       * @param  {Transform} treeTransform
       * @param  {array} result
       * @return {array} The "result" object
       */
      OctreeNode.prototype.rayQuery = function(ray, treeTransform, result) {

          // Use aabb query for now.
          // @todo implement real ray query which needs less lookups
          ray.getAABB(tmpAABB);
          tmpAABB.toLocalFrame(treeTransform, tmpAABB);
          this.aabbQuery(tmpAABB, result);

          return result;
      };

      /**
       * @method removeEmptyNodes
       */
      OctreeNode.prototype.removeEmptyNodes = function() {
          for (var i = this.children.length - 1; i >= 0; i--) {
              this.children[i].removeEmptyNodes();
              if(!this.children[i].children.length && !this.children[i].data.length){
                  this.children.splice(i, 1);
              }
          }
      };

      },{"../collision/AABB":3,"../math/Vec3":31}],52:[function(_dereq_,module,exports){
      module.exports = Pool;

      /**
       * For pooling objects that can be reused.
       * @class Pool
       * @constructor
       */
      function Pool(){
          /**
           * The pooled objects
           * @property {Array} objects
           */
          this.objects = [];

          /**
           * Constructor of the objects
           * @property {mixed} type
           */
          this.type = Object;
      }

      /**
       * Release an object after use
       * @method release
       * @param {Object} obj
       */
      Pool.prototype.release = function(){
          var Nargs = arguments.length;
          for(var i=0; i!==Nargs; i++){
              this.objects.push(arguments[i]);
          }
          return this;
      };

      /**
       * Get an object
       * @method get
       * @return {mixed}
       */
      Pool.prototype.get = function(){
          if(this.objects.length===0){
              return this.constructObject();
          } else {
              return this.objects.pop();
          }
      };

      /**
       * Construct an object. Should be implmented in each subclass.
       * @method constructObject
       * @return {mixed}
       */
      Pool.prototype.constructObject = function(){
          throw new Error("constructObject() not implemented in this Pool subclass yet!");
      };

      /**
       * @method resize
       * @param {number} size
       * @return {Pool} Self, for chaining
       */
      Pool.prototype.resize = function (size) {
          var objects = this.objects;

          while (objects.length > size) {
              objects.pop();
          }

          while (objects.length < size) {
              objects.push(this.constructObject());
          }

          return this;
      };


      },{}],53:[function(_dereq_,module,exports){
      module.exports = TupleDictionary;

      /**
       * @class TupleDictionary
       * @constructor
       */
      function TupleDictionary() {

          /**
           * The data storage
           * @property data
           * @type {Object}
           */
          this.data = { keys:[] };
      }

      /**
       * @method get
       * @param  {Number} i
       * @param  {Number} j
       * @return {Object}
       */
      TupleDictionary.prototype.get = function(i, j) {
          if (i > j) {
              // swap
              var temp = j;
              j = i;
              i = temp;
          }
          return this.data[i+'-'+j];
      };

      /**
       * @method set
       * @param  {Number} i
       * @param  {Number} j
       * @param {Object} value
       */
      TupleDictionary.prototype.set = function(i, j, value) {
          if (i > j) {
              var temp = j;
              j = i;
              i = temp;
          }
          var key = i+'-'+j;

          // Check if key already exists
          if(!this.get(i,j)){
              this.data.keys.push(key);
          }

          this.data[key] = value;
          return this.data[key];
      };

      /**
       * @method del
       * @param  {Number} i
       * @param  {Number} j
       * @returns {Boolean} is remove
       */
      TupleDictionary.prototype.del = function(i, j) {
          if (i > j) {
              var temp = j;
              j = i;
              i = temp;
          }
          var key = i+'-'+j;
          var index = this.data.keys.indexOf(key);
          if (index >= 0) {
              this.data.keys.splice(index, 1);
              delete this.data[key];
              return true;
          }
          return false;
      };

      /**
       * @method reset
       */
      TupleDictionary.prototype.reset = function() {
          this.data = { keys:[] };
      };

      /**
       * @method getLength
       */
      TupleDictionary.prototype.getLength = function() {
          return  this.data.keys.length;
      };

      /**
       * @method getKeyByIndex
       * @param {Number} index
       */
      TupleDictionary.prototype.getKeyByIndex = function(index) {
          return  this.data.keys[index];
      };

      /**
       * @method getDataByKey
       * @param {Number} Key
       */
      TupleDictionary.prototype.getDataByKey = function(Key) {
          return  this.data[Key];
      };
      },{}],54:[function(_dereq_,module,exports){
      function Utils(){}

      module.exports = Utils;

      /**
       * Extend an options object with default values.
       * @static
       * @method defaults
       * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.
       * @param  {object} defaults An object containing default values.
       * @return {object} The modified options object.
       */
      Utils.defaults = function(options, defaults){
          options = options || {};

          for(var key in defaults){
              if(!(key in options)){
                  options[key] = defaults[key];
              }
          }

          return options;
      };

      },{}],55:[function(_dereq_,module,exports){
      module.exports = Vec3Pool;

      var Vec3 = _dereq_('../math/Vec3');
      var Pool = _dereq_('./Pool');

      /**
       * @class Vec3Pool
       * @constructor
       * @extends Pool
       */
      function Vec3Pool(){
          Pool.call(this);
          this.type = Vec3;
      }
      Vec3Pool.prototype = new Pool();

      /**
       * Construct a vector
       * @method constructObject
       * @return {Vec3}
       */
      Vec3Pool.prototype.constructObject = function(){
          return new Vec3();
      };

      },{"../math/Vec3":31,"./Pool":52}],56:[function(_dereq_,module,exports){
      module.exports = Narrowphase;

      var AABB = _dereq_('../collision/AABB');
      _dereq_('../objects/Body');
      var Shape = _dereq_('../shapes/Shape');
      var Ray = _dereq_('../collision/Ray');
      var Vec3 = _dereq_('../math/Vec3');
      var Transform = _dereq_('../math/Transform');
      _dereq_('../shapes/ConvexPolyhedron');
      var Quaternion = _dereq_('../math/Quaternion');
      _dereq_('../solver/Solver');
      var Vec3Pool = _dereq_('../utils/Vec3Pool');
      var ContactEquation = _dereq_('../equations/ContactEquation');
      var FrictionEquation = _dereq_('../equations/FrictionEquation');

      /**
       * Helper class for the World. Generates ContactEquations.
       * @class Narrowphase
       * @constructor
       * @todo Sphere-ConvexPolyhedron contacts
       * @todo Contact reduction
       * @todo  should move methods to prototype
       */
      function Narrowphase(world){

          /**
           * Internal storage of pooled contact points.
           * @property {Array} contactPointPool
           */
          this.contactPointPool = [];

          this.frictionEquationPool = [];

          this.result = [];
          this.frictionResult = [];

          /**
           * Pooled vectors.
           * @property {Vec3Pool} v3pool
           */
          this.v3pool = new Vec3Pool();

          this.world = world;
          this.currentContactMaterial = null;

          /**
           * @property {Boolean} enableFrictionReduction
           */
          this.enableFrictionReduction = false;
      }

      /**
       * Make a contact object, by using the internal pool or creating a new one.
       * @method createContactEquation
       * @param {Body} bi
       * @param {Body} bj
       * @param {Shape} si
       * @param {Shape} sj
       * @param {Shape} overrideShapeA
       * @param {Shape} overrideShapeB
       * @return {ContactEquation}
       */
      Narrowphase.prototype.createContactEquation = function(bi, bj, si, sj, overrideShapeA, overrideShapeB){
          var c;
          if(this.contactPointPool.length){
              c = this.contactPointPool.pop();
              c.bi = bi;
              c.bj = bj;
          } else {
              c = new ContactEquation(bi, bj);
          }

          c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

          var cm = this.currentContactMaterial;
          var relaxation = cm.contactEquationRelaxation;
          c.restitution = cm.restitution;

          var matA = si.material || bi.material;
          var matB = sj.material || bj.material;
          if(matA && matB){
              if(matA.restitution >= 0 && matB.restitution >= 0) {
                  c.restitution = matA.restitution * matB.restitution;
              }
              var oR = matA.correctInelastic || matB.correctInelastic;
              if (oR) relaxation *= oR;
          }

          c.setSpookParams(
              cm.contactEquationStiffness,
              relaxation,
              this.world.dt
          );

          c.si = overrideShapeA || si;
          c.sj = overrideShapeB || sj;

          return c;
      };

      Narrowphase.prototype.createFrictionEquationsFromContact = function(contactEquation, outArray){
          var bodyA = contactEquation.bi;
          var bodyB = contactEquation.bj;
          var shapeA = contactEquation.si;
          var shapeB = contactEquation.sj;

          var world = this.world;
          var cm = this.currentContactMaterial;

          // If friction or restitution were specified in the material, use them
          var friction = cm.friction;
          var matA = shapeA.material || bodyA.material;
          var matB = shapeB.material || bodyB.material;
          if(matA && matB && matA.friction >= 0 && matB.friction >= 0){
              friction = matA.friction * matB.friction;
          }

          if(friction > 0){

              // Create 2 tangent equations
              var mug = friction * world.gravity.length();
              var reducedMass = (bodyA.invMass + bodyB.invMass);
              if(reducedMass > 0){
                  reducedMass = 1/reducedMass;
              }
              var pool = this.frictionEquationPool;
              var c1 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);
              var c2 = pool.length ? pool.pop() : new FrictionEquation(bodyA,bodyB,mug*reducedMass);

              c1.bi = c2.bi = bodyA;
              c1.bj = c2.bj = bodyB;
              c1.minForce = c2.minForce = -mug*reducedMass;
              c1.maxForce = c2.maxForce = mug*reducedMass;

              // Copy over the relative vectors
              c1.ri.copy(contactEquation.ri);
              c1.rj.copy(contactEquation.rj);
              c2.ri.copy(contactEquation.ri);
              c2.rj.copy(contactEquation.rj);

              // Construct tangents
              contactEquation.ni.tangents(c1.t, c2.t);

              // Set spook params
              c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);
              c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, world.dt);

              c1.enabled = c2.enabled = contactEquation.enabled;

              outArray.push(c1, c2);

              return true;
          }

          return false;
      };

      var averageNormal = new Vec3();
      var averageContactPointA = new Vec3();
      var averageContactPointB = new Vec3();

      // Take the average N latest contact point on the plane.
      Narrowphase.prototype.createFrictionFromAverage = function(numContacts){
          // The last contactEquation
          var c = this.result[this.result.length - 1];

          // Create the result: two "average" friction equations
          if (!this.createFrictionEquationsFromContact(c, this.frictionResult) || numContacts === 1) {
              return;
          }

          var f1 = this.frictionResult[this.frictionResult.length - 2];
          var f2 = this.frictionResult[this.frictionResult.length - 1];

          averageNormal.setZero();
          averageContactPointA.setZero();
          averageContactPointB.setZero();

          var bodyA = c.bi;
          c.bj;
          for(var i=0; i!==numContacts; i++){
              c = this.result[this.result.length - 1 - i];
              if(c.bodyA !== bodyA){
                  averageNormal.vadd(c.ni, averageNormal);
                  averageContactPointA.vadd(c.ri, averageContactPointA);
                  averageContactPointB.vadd(c.rj, averageContactPointB);
              } else {
                  averageNormal.vsub(c.ni, averageNormal);
                  averageContactPointA.vadd(c.rj, averageContactPointA);
                  averageContactPointB.vadd(c.ri, averageContactPointB);
              }
          }

          var invNumContacts = 1 / numContacts;
          averageContactPointA.scale(invNumContacts, f1.ri);
          averageContactPointB.scale(invNumContacts, f1.rj);
          f2.ri.copy(f1.ri); // Should be the same
          f2.rj.copy(f1.rj);
          averageNormal.normalize();
          averageNormal.tangents(f1.t, f2.t);
          // return eq;
      };


      var tmpVec1 = new Vec3();
      var tmpVec2 = new Vec3();
      var tmpQuat1 = new Quaternion();
      var tmpQuat2 = new Quaternion();

      /**
       * Generate all contacts between a list of body pairs
       * @method getContacts
       * @param {array} p1 Array of body indices
       * @param {array} p2 Array of body indices
       * @param {World} world
       * @param {array} result Array to store generated contacts
       * @param {array} oldcontacts Optional. Array of reusable contact objects
       */
      Narrowphase.prototype.getContacts = function(p1, p2, world, result, oldcontacts, frictionResult, frictionPool){
          // Save old contact objects
          this.contactPointPool = oldcontacts;
          this.frictionEquationPool = frictionPool;
          this.result = result;
          this.frictionResult = frictionResult;

          var qi = tmpQuat1;
          var qj = tmpQuat2;
          var xi = tmpVec1;
          var xj = tmpVec2;

          for(var k=0, N=p1.length; k!==N; k++){

              // Get current collision bodies
              var bi = p1[k],
                  bj = p2[k];

              // Get contact material
              var bodyContactMaterial = null;
              if(bi.material && bj.material){
                  bodyContactMaterial = world.getContactMaterial(bi.material,bj.material) || null;
              }

              // Allow get kinematic contact
              var justTest = ( bi.collisionResponse == false || bj.collisionResponse == false 
                  // || (
                  //     (bi.type & Body.KINEMATIC) && (bj.type & Body.STATIC)
                  // ) || (
                  //     (bi.type & Body.STATIC) && (bj.type & Body.KINEMATIC)
                  // ) || (
                  //     (bi.type & Body.KINEMATIC) && (bj.type & Body.KINEMATIC)
                  // )
              );

              for (var i = 0; i < bi.shapes.length; i++) {
                  bi.quaternion.mult(bi.shapeOrientations[i], qi);
                  bi.quaternion.vmult(bi.shapeOffsets[i], xi);
                  xi.vadd(bi.position, xi);
                  var si = bi.shapes[i];

                  for (var j = 0; j < bj.shapes.length; j++) {

                      // Compute world transform of shapes
                      bj.quaternion.mult(bj.shapeOrientations[j], qj);
                      bj.quaternion.vmult(bj.shapeOffsets[j], xj);
                      xj.vadd(bj.position, xj);
                      var sj = bj.shapes[j];

                      if(!((si.collisionFilterMask & sj.collisionFilterGroup) && (sj.collisionFilterMask & si.collisionFilterGroup))){
                          continue;
                      }

                      if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
                          continue;
                      }

                      // is trigger ? ,trigger test
                      justTest |= (si.collisionResponse == false) || (sj.collisionResponse == false);

                      // Get collision material
                      var shapeContactMaterial = null;
                      if(si.material && sj.material){
                          shapeContactMaterial = world.getContactMaterial(si.material,sj.material) || null;
                      }

                      this.currentContactMaterial = shapeContactMaterial || bodyContactMaterial || world.defaultContactMaterial;

                      // Get contacts
                      var resolver = this[si.type | sj.type];
                      if(resolver){
                          var retval = false;
                          if (si.type < sj.type) {
                              retval = resolver.call(this, si, sj, xi, xj, qi, qj, bi, bj, si, sj, justTest);
                          } else {
                              retval = resolver.call(this, sj, si, xj, xi, qj, qi, bj, bi, si, sj, justTest);
                          }

                          if(retval && justTest){
                              // Register overlap
                              world.shapeOverlapKeeper.set(si.id, sj.id);
                              world.bodyOverlapKeeper.set(bi.id, bj.id);
                              var data = {si:si, sj:sj};
                              world.triggerDic.set(si.id, sj.id, data);
                              world.oldTriggerDic.set(si.id, sj.id, data);
                          }
                      }
                  }
              }
          }
      };

      Narrowphase.prototype[Shape.types.BOX | Shape.types.BOX] =
      Narrowphase.prototype.boxBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          si.convexPolyhedronRepresentation.material = si.material;
          sj.convexPolyhedronRepresentation.material = sj.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          return this.convexConvex(si.convexPolyhedronRepresentation,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
      };

      Narrowphase.prototype[Shape.types.BOX | Shape.types.CONVEXPOLYHEDRON] =
      Narrowphase.prototype.boxConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          return this.convexConvex(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
      };

      Narrowphase.prototype[Shape.types.BOX | Shape.types.PARTICLE] =
      Narrowphase.prototype.boxParticle = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          return this.convexParticle(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
      };

      /**
       * @method sphereSphere
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.SPHERE] =
      Narrowphase.prototype.sphereSphere = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          if(justTest){
              return xi.distanceSquared(xj) < Math.pow(si.radius + sj.radius, 2);
          }

          // We will have only one contact in this case
          var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

          // Contact normal
          xj.vsub(xi, r.ni);
          r.ni.normalize();

          // Contact point locations
          r.ri.copy(r.ni);
          r.rj.copy(r.ni);
          r.ri.mult(si.radius, r.ri);
          r.rj.mult(-sj.radius, r.rj);

          r.ri.vadd(xi, r.ri);
          r.ri.vsub(bi.position, r.ri);

          r.rj.vadd(xj, r.rj);
          r.rj.vsub(bj.position, r.rj);

          this.result.push(r);

          this.createFrictionEquationsFromContact(r, this.frictionResult);
      };

      /**
       * @method planeTrimesh
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      var planeTrimesh_normal = new Vec3();
      var planeTrimesh_relpos = new Vec3();
      var planeTrimesh_projected = new Vec3();
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.TRIMESH] =
      Narrowphase.prototype.planeTrimesh = function(
          planeShape,
          trimeshShape,
          planePos,
          trimeshPos,
          planeQuat,
          trimeshQuat,
          planeBody,
          trimeshBody,
          rsi,
          rsj,
          justTest
      ){
          // Make contacts!
          var v = new Vec3();

          var normal = planeTrimesh_normal;
          normal.set(0,0,1);
          planeQuat.vmult(normal,normal); // Turn normal according to plane

          for(var i=0; i<trimeshShape.vertices.length / 3; i++){

              // Get world vertex from trimesh
              trimeshShape.getVertex(i, v);

              // Safe up
              var v2 = new Vec3();
              v2.copy(v);
              Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

              // Check plane side
              var relpos = planeTrimesh_relpos;
              v.vsub(planePos, relpos);
              var dot = normal.dot(relpos);

              if(dot <= 0.0){
                  if(justTest){
                      return true;
                  }

                  var r = this.createContactEquation(planeBody,trimeshBody,planeShape,trimeshShape,rsi,rsj);

                  r.ni.copy(normal); // Contact normal is the plane normal

                  // Get vertex position projected on plane
                  var projected = planeTrimesh_projected;
                  normal.scale(relpos.dot(normal), projected);
                  v.vsub(projected,projected);

                  // ri is the projected world position minus plane position
                  r.ri.copy(projected);
                  r.ri.vsub(planeBody.position, r.ri);

                  r.rj.copy(v);
                  r.rj.vsub(trimeshBody.position, r.rj);

                  // Store result
                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
          }
      };

      /**
       * @method sphereTrimesh
       * @param  {Shape}      sphereShape
       * @param  {Shape}      trimeshShape
       * @param  {Vec3}       spherePos
       * @param  {Vec3}       trimeshPos
       * @param  {Quaternion} sphereQuat
       * @param  {Quaternion} trimeshQuat
       * @param  {Body}       sphereBody
       * @param  {Body}       trimeshBody
       */
      var sphereTrimesh_normal = new Vec3();
      var sphereTrimesh_relpos = new Vec3();
      new Vec3();
      var sphereTrimesh_v = new Vec3();
      var sphereTrimesh_v2 = new Vec3();
      var sphereTrimesh_edgeVertexA = new Vec3();
      var sphereTrimesh_edgeVertexB = new Vec3();
      var sphereTrimesh_edgeVector = new Vec3();
      var sphereTrimesh_edgeVectorUnit = new Vec3();
      var sphereTrimesh_localSpherePos = new Vec3();
      var sphereTrimesh_tmp = new Vec3();
      var sphereTrimesh_va = new Vec3();
      var sphereTrimesh_vb = new Vec3();
      var sphereTrimesh_vc = new Vec3();
      var sphereTrimesh_localSphereAABB = new AABB();
      var sphereTrimesh_triangles = [];
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.TRIMESH] =
      Narrowphase.prototype.sphereTrimesh = function (
          sphereShape,
          trimeshShape,
          spherePos,
          trimeshPos,
          sphereQuat,
          trimeshQuat,
          sphereBody,
          trimeshBody,
          rsi,
          rsj,
          justTest
      ) {

          var edgeVertexA = sphereTrimesh_edgeVertexA;
          var edgeVertexB = sphereTrimesh_edgeVertexB;
          var edgeVector = sphereTrimesh_edgeVector;
          var edgeVectorUnit = sphereTrimesh_edgeVectorUnit;
          var localSpherePos = sphereTrimesh_localSpherePos;
          var tmp = sphereTrimesh_tmp;
          var localSphereAABB = sphereTrimesh_localSphereAABB;
          var v2 = sphereTrimesh_v2;
          var relpos = sphereTrimesh_relpos;
          var triangles = sphereTrimesh_triangles;

          // Convert sphere position to local in the trimesh
          Transform.pointToLocalFrame(trimeshPos, trimeshQuat, spherePos, localSpherePos);

          // Get the aabb of the sphere locally in the trimesh
          var sphereRadius = sphereShape.radius;
          localSphereAABB.lowerBound.set(
              localSpherePos.x - sphereRadius,
              localSpherePos.y - sphereRadius,
              localSpherePos.z - sphereRadius
          );
          localSphereAABB.upperBound.set(
              localSpherePos.x + sphereRadius,
              localSpherePos.y + sphereRadius,
              localSpherePos.z + sphereRadius
          );

          trimeshShape.getTrianglesInAABB(localSphereAABB, triangles);
          //for (var i = 0; i < trimeshShape.indices.length / 3; i++) triangles.push(i); // All

          // Vertices
          var v = sphereTrimesh_v;
          var radiusSquared = sphereShape.radius * sphereShape.radius;
          for(var i=0; i<triangles.length; i++){
              for (var j = 0; j < 3; j++) {

                  trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], v);

                  // Check vertex overlap in sphere
                  v.vsub(localSpherePos, relpos);

                  if(relpos.norm2() <= radiusSquared){

                      // Safe up
                      v2.copy(v);
                      Transform.pointToWorldFrame(trimeshPos, trimeshQuat, v2, v);

                      v.vsub(spherePos, relpos);

                      if(justTest){
                          return true;
                      }

                      var r = this.createContactEquation(sphereBody,trimeshBody,sphereShape,trimeshShape,rsi,rsj);
                      r.ni.copy(relpos);
                      r.ni.normalize();

                      // ri is the vector from sphere center to the sphere surface
                      r.ri.copy(r.ni);
                      r.ri.scale(sphereShape.radius, r.ri);
                      r.ri.vadd(spherePos, r.ri);
                      r.ri.vsub(sphereBody.position, r.ri);

                      r.rj.copy(v);
                      r.rj.vsub(trimeshBody.position, r.rj);

                      // Store result
                      this.result.push(r);
                      this.createFrictionEquationsFromContact(r, this.frictionResult);
                  }
              }
          }

          // Check all edges
          for(var i=0; i<triangles.length; i++){
              for (var j = 0; j < 3; j++) {

                  trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + j], edgeVertexA);
                  trimeshShape.getVertex(trimeshShape.indices[triangles[i] * 3 + ((j+1)%3)], edgeVertexB);
                  edgeVertexB.vsub(edgeVertexA, edgeVector);

                  // Project sphere position to the edge
                  localSpherePos.vsub(edgeVertexB, tmp);
                  var positionAlongEdgeB = tmp.dot(edgeVector);

                  localSpherePos.vsub(edgeVertexA, tmp);
                  var positionAlongEdgeA = tmp.dot(edgeVector);

                  if(positionAlongEdgeA > 0 && positionAlongEdgeB < 0){

                      // Now check the orthogonal distance from edge to sphere center
                      localSpherePos.vsub(edgeVertexA, tmp);

                      edgeVectorUnit.copy(edgeVector);
                      edgeVectorUnit.normalize();
                      positionAlongEdgeA = tmp.dot(edgeVectorUnit);

                      edgeVectorUnit.scale(positionAlongEdgeA, tmp);
                      tmp.vadd(edgeVertexA, tmp);

                      // tmp is now the sphere center position projected to the edge, defined locally in the trimesh frame
                      var dist = tmp.distanceTo(localSpherePos);
                      if(dist < sphereShape.radius){

                          if(justTest){
                              return true;
                          }

                          var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

                          tmp.vsub(localSpherePos, r.ni);
                          r.ni.normalize();
                          r.ni.scale(sphereShape.radius, r.ri);

                          Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                          tmp.vsub(trimeshBody.position, r.rj);

                          Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                          Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                          this.result.push(r);
                          this.createFrictionEquationsFromContact(r, this.frictionResult);
                      }
                  }
              }
          }

          // Triangle faces
          var va = sphereTrimesh_va;
          var vb = sphereTrimesh_vb;
          var vc = sphereTrimesh_vc;
          var normal = sphereTrimesh_normal;
          for(var i=0, N = triangles.length; i !== N; i++){
              trimeshShape.getTriangleVertices(triangles[i], va, vb, vc);
              trimeshShape.getNormal(triangles[i], normal);
              localSpherePos.vsub(va, tmp);
              var dist = tmp.dot(normal);
              normal.scale(dist, tmp);
              localSpherePos.vsub(tmp, tmp);

              // tmp is now the sphere position projected to the triangle plane
              dist = tmp.distanceTo(localSpherePos);
              if(Ray.pointInTriangle(tmp, va, vb, vc) && dist < sphereShape.radius){
                  if(justTest){
                      return true;
                  }
                  var r = this.createContactEquation(sphereBody, trimeshBody, sphereShape, trimeshShape,rsi,rsj);

                  tmp.vsub(localSpherePos, r.ni);
                  r.ni.normalize();
                  r.ni.scale(sphereShape.radius, r.ri);

                  Transform.pointToWorldFrame(trimeshPos, trimeshQuat, tmp, tmp);
                  tmp.vsub(trimeshBody.position, r.rj);

                  Transform.vectorToWorldFrame(trimeshQuat, r.ni, r.ni);
                  Transform.vectorToWorldFrame(trimeshQuat, r.ri, r.ri);

                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
              }
          }

          triangles.length = 0;
      };

      var point_on_plane_to_sphere = new Vec3();
      var plane_to_sphere_ortho = new Vec3();
      var p_s_ni = new Vec3(); 
      var p_s_ri = new Vec3();
      var p_s_rj = new Vec3(); 
      /**
       * @method spherePlane
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.PLANE] =
      Narrowphase.prototype.spherePlane = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          // Contact normal
          p_s_ni.set(0,0,1);
          qj.vmult(p_s_ni, p_s_ni);
          p_s_ni.negate(p_s_ni); // body i is the sphere, flip normal
          p_s_ni.normalize(); // Needed?

          // Vector from sphere center to contact point
          p_s_ni.mult(si.radius, p_s_ri);

          // Project down sphere on plane
          xi.vsub(xj, point_on_plane_to_sphere);
          p_s_ni.mult(p_s_ni.dot(point_on_plane_to_sphere), plane_to_sphere_ortho);
          point_on_plane_to_sphere.vsub(plane_to_sphere_ortho, p_s_rj); // The sphere position projected to plane

          if(-point_on_plane_to_sphere.dot(p_s_ni) <= si.radius){

              if(justTest){
                  return true;
              }

              // We will have one contact in this case
              var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
              // Make it relative to the body
              r.ni.copy(p_s_ni);r.ri.copy(p_s_ri);r.rj.copy(p_s_rj);
              var ri = r.ri;
              var rj = r.rj;
              ri.vadd(xi, ri);
              ri.vsub(bi.position, ri);
              rj.vadd(xj, rj);
              rj.vsub(bj.position, rj);

              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
          return false;
      };

      // See http://bulletphysics.com/Bullet/BulletFull/SphereTriangleDetector_8cpp_source.html
      var pointInPolygon_edge = new Vec3();
      var pointInPolygon_edge_x_normal = new Vec3();
      var pointInPolygon_vtp = new Vec3();
      function pointInPolygon(verts, normal, p){
          var positiveResult = null;
          var N = verts.length;
          for(var i=0; i!==N; i++){
              var v = verts[i];

              // Get edge to the next vertex
              var edge = pointInPolygon_edge;
              verts[(i+1) % (N)].vsub(v,edge);

              // Get cross product between polygon normal and the edge
              var edge_x_normal = pointInPolygon_edge_x_normal;
              //var edge_x_normal = new Vec3();
              edge.cross(normal,edge_x_normal);

              // Get vector between point and current vertex
              var vertex_to_p = pointInPolygon_vtp;
              p.vsub(v,vertex_to_p);

              // This dot product determines which side of the edge the point is
              var r = edge_x_normal.dot(vertex_to_p);

              // If all such dot products have same sign, we are inside the polygon.
              if(positiveResult===null || (r>0 && positiveResult===true) || (r<=0 && positiveResult===false)){
                  if(positiveResult===null){
                      positiveResult = r>0;
                  }
                  continue;
              } else {
                  return false; // Encountered some other sign. Exit.
              }
          }

          // If we got here, all dot products were of the same sign.
          return true;
      }

      var box_to_sphere = new Vec3();
      var sphereBox_ns = new Vec3();
      var sphereBox_ns1 = new Vec3();
      var sphereBox_ns2 = new Vec3();
      var sphereBox_sides = [new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3(),new Vec3()];
      var sphereBox_sphere_to_corner = new Vec3();
      var sphereBox_side_ns = new Vec3();
      var sphereBox_side_ns1 = new Vec3();
      var sphereBox_side_ns2 = new Vec3();

      /**
       * @method sphereBox
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.BOX] =
      Narrowphase.prototype.sphereBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          var v3pool = this.v3pool;

          // we refer to the box as body j
          var sides = sphereBox_sides;
          xi.vsub(xj,box_to_sphere);
          sj.getSideNormals(sides,qj);
          var R =     si.radius;

          // Check side (plane) intersections
          var found = false;

          // Store the resulting side penetration info
          var side_ns = sphereBox_side_ns;
          var side_ns1 = sphereBox_side_ns1;
          var side_ns2 = sphereBox_side_ns2;
          var side_h = null;
          var side_penetrations = 0;
          var side_dot1 = 0;
          var side_dot2 = 0;
          var side_distance = null;
          for(var idx=0,nsides=sides.length; idx!==nsides && found===false; idx++){
              // Get the plane side normal (ns)
              var ns = sphereBox_ns;
              ns.copy(sides[idx]);

              var h = ns.norm();
              ns.normalize();

              // The normal/distance dot product tells which side of the plane we are
              var dot = box_to_sphere.dot(ns);

              if(dot<h+R && dot>0){
                  // Intersects plane. Now check the other two dimensions
                  var ns1 = sphereBox_ns1;
                  var ns2 = sphereBox_ns2;
                  ns1.copy(sides[(idx+1)%3]);
                  ns2.copy(sides[(idx+2)%3]);
                  var h1 = ns1.norm();
                  var h2 = ns2.norm();
                  ns1.normalize();
                  ns2.normalize();
                  var dot1 = box_to_sphere.dot(ns1);
                  var dot2 = box_to_sphere.dot(ns2);
                  if(dot1<h1 && dot1>-h1 && dot2<h2 && dot2>-h2){
                      var dist = Math.abs(dot-h-R);
                      if(side_distance===null || dist < side_distance){
                          side_distance = dist;
                          side_dot1 = dot1;
                          side_dot2 = dot2;
                          side_h = h;
                          side_ns.copy(ns);
                          side_ns1.copy(ns1);
                          side_ns2.copy(ns2);
                          side_penetrations++;

                          if(justTest){
                              return true;
                          }
                      }
                  }
              }
          }
          if(side_penetrations){
              found = true;
              var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
              side_ns.mult(-R,r.ri); // Sphere r
              r.ni.copy(side_ns);
              r.ni.negate(r.ni); // Normal should be out of sphere
              side_ns.mult(side_h,side_ns);
              side_ns1.mult(side_dot1,side_ns1);
              side_ns.vadd(side_ns1,side_ns);
              side_ns2.mult(side_dot2,side_ns2);
              side_ns.vadd(side_ns2,r.rj);

              // Make relative to bodies
              r.ri.vadd(xi, r.ri);
              r.ri.vsub(bi.position, r.ri);
              r.rj.vadd(xj, r.rj);
              r.rj.vsub(bj.position, r.rj);

              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
          }

          // Check corners
          var rj = v3pool.get();
          var sphere_to_corner = sphereBox_sphere_to_corner;
          for(var j=0; j!==2 && !found; j++){
              for(var k=0; k!==2 && !found; k++){
                  for(var l=0; l!==2 && !found; l++){
                      rj.set(0,0,0);
                      if(j){
                          rj.vadd(sides[0],rj);
                      } else {
                          rj.vsub(sides[0],rj);
                      }
                      if(k){
                          rj.vadd(sides[1],rj);
                      } else {
                          rj.vsub(sides[1],rj);
                      }
                      if(l){
                          rj.vadd(sides[2],rj);
                      } else {
                          rj.vsub(sides[2],rj);
                      }

                      // World position of corner
                      xj.vadd(rj,sphere_to_corner);
                      sphere_to_corner.vsub(xi,sphere_to_corner);

                      if(sphere_to_corner.norm2() < R*R){
                          if(justTest){
                              return true;
                          }
                          found = true;
                          var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                          r.ri.copy(sphere_to_corner);
                          r.ri.normalize();
                          r.ni.copy(r.ri);
                          r.ri.mult(R,r.ri);
                          r.rj.copy(rj);

                          // Make relative to bodies
                          r.ri.vadd(xi, r.ri);
                          r.ri.vsub(bi.position, r.ri);
                          r.rj.vadd(xj, r.rj);
                          r.rj.vsub(bj.position, r.rj);

                          this.result.push(r);
                          this.createFrictionEquationsFromContact(r, this.frictionResult);
                      }
                  }
              }
          }
          v3pool.release(rj);
          rj = null;

          // Check edges
          var edgeTangent = v3pool.get();
          var edgeCenter = v3pool.get();
          var r = v3pool.get(); // r = edge center to sphere center
          var orthogonal = v3pool.get();
          var dist = v3pool.get();
          var Nsides = sides.length;
          for(var j=0; j!==Nsides && !found; j++){
              for(var k=0; k!==Nsides && !found; k++){
                  if(j%3 !== k%3){
                      // Get edge tangent
                      sides[k].cross(sides[j],edgeTangent);
                      edgeTangent.normalize();
                      sides[j].vadd(sides[k], edgeCenter);
                      r.copy(xi);
                      r.vsub(edgeCenter,r);
                      r.vsub(xj,r);
                      var orthonorm = r.dot(edgeTangent); // distance from edge center to sphere center in the tangent direction
                      edgeTangent.mult(orthonorm,orthogonal); // Vector from edge center to sphere center in the tangent direction

                      // Find the third side orthogonal to this one
                      var l = 0;
                      while(l===j%3 || l===k%3){
                          l++;
                      }

                      // vec from edge center to sphere projected to the plane orthogonal to the edge tangent
                      dist.copy(xi);
                      dist.vsub(orthogonal,dist);
                      dist.vsub(edgeCenter,dist);
                      dist.vsub(xj,dist);

                      // Distances in tangent direction and distance in the plane orthogonal to it
                      var tdist = Math.abs(orthonorm);
                      var ndist = dist.norm();

                      if(tdist < sides[l].norm() && ndist<R){
                          if(justTest){
                              return true;
                          }
                          found = true;
                          var res = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                          edgeCenter.vadd(orthogonal,res.rj); // box rj
                          res.rj.copy(res.rj);
                          dist.negate(res.ni);
                          res.ni.normalize();

                          res.ri.copy(res.rj);
                          res.ri.vadd(xj,res.ri);
                          res.ri.vsub(xi,res.ri);
                          res.ri.normalize();
                          res.ri.mult(R,res.ri);

                          // Make relative to bodies
                          res.ri.vadd(xi, res.ri);
                          res.ri.vsub(bi.position, res.ri);
                          res.rj.vadd(xj, res.rj);
                          res.rj.vsub(bj.position, res.rj);

                          this.result.push(res);
                          this.createFrictionEquationsFromContact(res, this.frictionResult);
                      }
                  }
              }
          }
          v3pool.release(edgeTangent,edgeCenter,r,orthogonal,dist);
      };

      var convex_to_sphere = new Vec3();
      var sphereConvex_edge = new Vec3();
      var sphereConvex_edgeUnit = new Vec3();
      var sphereConvex_sphereToCorner = new Vec3();
      var sphereConvex_worldCorner = new Vec3();
      var sphereConvex_worldNormal = new Vec3();
      var sphereConvex_worldPoint = new Vec3();
      var sphereConvex_worldSpherePointClosestToPlane = new Vec3();
      var sphereConvex_penetrationVec = new Vec3();
      var sphereConvex_sphereToWorldPoint = new Vec3();

      /**
       * @method sphereConvex
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.CONVEXPOLYHEDRON] =
      Narrowphase.prototype.sphereConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          var v3pool = this.v3pool;
          xi.vsub(xj,convex_to_sphere);
          var normals = sj.faceNormals;
          var faces = sj.faces;
          var verts = sj.vertices;
          var R =     si.radius;

          // if(convex_to_sphere.norm2() > si.boundingSphereRadius + sj.boundingSphereRadius){
          //     return;
          // }

          // Check corners
          for(var i=0; i!==verts.length; i++){
              var v = verts[i];

              // World position of corner
              var worldCorner = sphereConvex_worldCorner;
              qj.vmult(v,worldCorner);
              xj.vadd(worldCorner,worldCorner);
              var sphere_to_corner = sphereConvex_sphereToCorner;
              worldCorner.vsub(xi, sphere_to_corner);
              if(sphere_to_corner.norm2() < R * R){
                  if(justTest){
                      return true;
                  }
                  found = true;
                  var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                  r.ri.copy(sphere_to_corner);
                  r.ri.normalize();
                  r.ni.copy(r.ri);
                  r.ri.mult(R,r.ri);
                  worldCorner.vsub(xj,r.rj);

                  // Should be relative to the body.
                  r.ri.vadd(xi, r.ri);
                  r.ri.vsub(bi.position, r.ri);

                  // Should be relative to the body.
                  r.rj.vadd(xj, r.rj);
                  r.rj.vsub(bj.position, r.rj);

                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
                  return;
              }
          }

          // Check side (plane) intersections
          var found = false;
          for(var i=0, nfaces=faces.length; i!==nfaces && found===false; i++){
              var normal = normals[i];
              var face = faces[i];

              // Get world-transformed normal of the face
              var worldNormal = sphereConvex_worldNormal;
              qj.vmult(normal,worldNormal);

              // Get a world vertex from the face
              var worldPoint = sphereConvex_worldPoint;
              qj.vmult(verts[face[0]],worldPoint);
              worldPoint.vadd(xj,worldPoint);

              // Get a point on the sphere, closest to the face normal
              var worldSpherePointClosestToPlane = sphereConvex_worldSpherePointClosestToPlane;
              worldNormal.mult(-R, worldSpherePointClosestToPlane);
              xi.vadd(worldSpherePointClosestToPlane, worldSpherePointClosestToPlane);

              // Vector from a face point to the closest point on the sphere
              var penetrationVec = sphereConvex_penetrationVec;
              worldSpherePointClosestToPlane.vsub(worldPoint,penetrationVec);

              // The penetration. Negative value means overlap.
              var penetration = penetrationVec.dot(worldNormal);

              var worldPointToSphere = sphereConvex_sphereToWorldPoint;
              xi.vsub(worldPoint, worldPointToSphere);

              if(penetration < 0 && worldPointToSphere.dot(worldNormal)>0){
                  // Intersects plane. Now check if the sphere is inside the face polygon
                  var faceVerts = []; // Face vertices, in world coords
                  for(var j=0, Nverts=face.length; j!==Nverts; j++){
                      var worldVertex = v3pool.get();
                      qj.vmult(verts[face[j]], worldVertex);
                      xj.vadd(worldVertex,worldVertex);
                      faceVerts.push(worldVertex);
                  }

                  if(pointInPolygon(faceVerts,worldNormal,xi)){ // Is the sphere center in the face polygon?
                      if(justTest){
                          return true;
                      }
                      found = true;
                      var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);

                      worldNormal.mult(-R, r.ri); // Contact offset, from sphere center to contact
                      worldNormal.negate(r.ni); // Normal pointing out of sphere

                      var penetrationVec2 = v3pool.get();
                      worldNormal.mult(-penetration, penetrationVec2);
                      var penetrationSpherePoint = v3pool.get();
                      worldNormal.mult(-R, penetrationSpherePoint);

                      //xi.vsub(xj).vadd(penetrationSpherePoint).vadd(penetrationVec2 , r.rj);
                      xi.vsub(xj,r.rj);
                      r.rj.vadd(penetrationSpherePoint,r.rj);
                      r.rj.vadd(penetrationVec2 , r.rj);

                      // Should be relative to the body.
                      r.rj.vadd(xj, r.rj);
                      r.rj.vsub(bj.position, r.rj);

                      // Should be relative to the body.
                      r.ri.vadd(xi, r.ri);
                      r.ri.vsub(bi.position, r.ri);

                      v3pool.release(penetrationVec2);
                      v3pool.release(penetrationSpherePoint);

                      this.result.push(r);
                      this.createFrictionEquationsFromContact(r, this.frictionResult);

                      // Release world vertices
                      for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                          v3pool.release(faceVerts[j]);
                      }

                      return; // We only expect *one* face contact
                  } else {
                      // Edge?
                      for(var j=0; j!==face.length; j++){

                          // Get two world transformed vertices
                          var v1 = v3pool.get();
                          var v2 = v3pool.get();
                          qj.vmult(verts[face[(j+1)%face.length]], v1);
                          qj.vmult(verts[face[(j+2)%face.length]], v2);
                          xj.vadd(v1, v1);
                          xj.vadd(v2, v2);

                          // Construct edge vector
                          var edge = sphereConvex_edge;
                          v2.vsub(v1,edge);

                          // Construct the same vector, but normalized
                          var edgeUnit = sphereConvex_edgeUnit;
                          edge.unit(edgeUnit);

                          // p is xi projected onto the edge
                          var p = v3pool.get();
                          var v1_to_xi = v3pool.get();
                          xi.vsub(v1, v1_to_xi);
                          var dot = v1_to_xi.dot(edgeUnit);
                          edgeUnit.mult(dot, p);
                          p.vadd(v1, p);

                          // Compute a vector from p to the center of the sphere
                          var xi_to_p = v3pool.get();
                          p.vsub(xi, xi_to_p);

                          // Collision if the edge-sphere distance is less than the radius
                          // AND if p is in between v1 and v2
                          if(dot > 0 && dot*dot<edge.norm2() && xi_to_p.norm2() < R*R){ // Collision if the edge-sphere distance is less than the radius
                              // Edge contact!
                              if(justTest){
                                  return true;
                              }
                              var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                              p.vsub(xj,r.rj);

                              p.vsub(xi,r.ni);
                              r.ni.normalize();

                              r.ni.mult(R,r.ri);

                              // Should be relative to the body.
                              r.rj.vadd(xj, r.rj);
                              r.rj.vsub(bj.position, r.rj);

                              // Should be relative to the body.
                              r.ri.vadd(xi, r.ri);
                              r.ri.vsub(bi.position, r.ri);

                              this.result.push(r);
                              this.createFrictionEquationsFromContact(r, this.frictionResult);

                              // Release world vertices
                              for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                                  v3pool.release(faceVerts[j]);
                              }

                              v3pool.release(v1);
                              v3pool.release(v2);
                              v3pool.release(p);
                              v3pool.release(xi_to_p);
                              v3pool.release(v1_to_xi);

                              return;
                          }

                          v3pool.release(v1);
                          v3pool.release(v2);
                          v3pool.release(p);
                          v3pool.release(xi_to_p);
                          v3pool.release(v1_to_xi);
                      }
                  }

                  // Release world vertices
                  for(var j=0, Nfaceverts=faceVerts.length; j!==Nfaceverts; j++){
                      v3pool.release(faceVerts[j]);
                  }
              }
          }
      };

      new Vec3();
      new Vec3();

      /**
       * @method planeBox
       * @param  {Array}      result
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.BOX] =
      Narrowphase.prototype.planeBox = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          sj.convexPolyhedronRepresentation.material = sj.material;
          sj.convexPolyhedronRepresentation.collisionResponse = sj.collisionResponse;
          sj.convexPolyhedronRepresentation.id = sj.id;
          return this.planeConvex(si,sj.convexPolyhedronRepresentation,xi,xj,qi,qj,bi,bj,si,sj,justTest);
      };

      var planeConvex_v = new Vec3();
      var planeConvex_normal = new Vec3();
      var planeConvex_relpos = new Vec3();
      var planeConvex_projected = new Vec3();

      /**
       * @method planeConvex
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.CONVEXPOLYHEDRON] =
      Narrowphase.prototype.planeConvex = function(
          planeShape,
          convexShape,
          planePosition,
          convexPosition,
          planeQuat,
          convexQuat,
          planeBody,
          convexBody,
          si,
          sj,
          justTest
      ){
          // Simply return the points behind the plane.
          var worldVertex = planeConvex_v,
              worldNormal = planeConvex_normal;
          worldNormal.set(0,0,1);
          planeQuat.vmult(worldNormal,worldNormal); // Turn normal according to plane orientation

          var numContacts = 0;
          var relpos = planeConvex_relpos;
          for(var i = 0; i !== convexShape.vertices.length; i++){

              // Get world convex vertex
              worldVertex.copy(convexShape.vertices[i]);
              convexQuat.vmult(worldVertex, worldVertex);
              convexPosition.vadd(worldVertex, worldVertex);
              worldVertex.vsub(planePosition, relpos);

              var dot = worldNormal.dot(relpos);
              if(dot <= 0.0){
                  if(justTest){
                      return true;
                  }

                  var r = this.createContactEquation(planeBody, convexBody, planeShape, convexShape, si, sj);

                  // Get vertex position projected on plane
                  var projected = planeConvex_projected;
                  worldNormal.mult(worldNormal.dot(relpos),projected);
                  worldVertex.vsub(projected, projected);
                  projected.vsub(planePosition, r.ri); // From plane to vertex projected on plane

                  r.ni.copy(worldNormal); // Contact normal is the plane normal out from plane

                  // rj is now just the vector from the convex center to the vertex
                  worldVertex.vsub(convexPosition, r.rj);

                  // Make it relative to the body
                  r.ri.vadd(planePosition, r.ri);
                  r.ri.vsub(planeBody.position, r.ri);
                  r.rj.vadd(convexPosition, r.rj);
                  r.rj.vsub(convexBody.position, r.rj);

                  this.result.push(r);
                  numContacts++;
                  if(!this.enableFrictionReduction){
                      this.createFrictionEquationsFromContact(r, this.frictionResult);
                  }
              }
          }

          if(this.enableFrictionReduction && numContacts){
              this.createFrictionFromAverage(numContacts);
          }
      };

      var convexConvex_sepAxis = new Vec3();
      var convexConvex_q = new Vec3();

      /**
       * @method convexConvex
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON] =
      Narrowphase.prototype.convexConvex = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest,faceListA,faceListB){
          var sepAxis = convexConvex_sepAxis;

          if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
              return;
          }

          if(si.findSeparatingAxis(sj,xi,qi,xj,qj,sepAxis,faceListA,faceListB)){
              var res = [];
              var q = convexConvex_q;
              si.clipAgainstHull(xi,qi,sj,xj,qj,sepAxis,-100,100,res);
              var numContacts = 0;
              for(var j = 0; j !== res.length; j++){
                  if(justTest){
                      return true;
                  }
                  var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
                      ri = r.ri,
                      rj = r.rj;
                  sepAxis.negate(r.ni);
                  res[j].normal.negate(q);
                  q.mult(res[j].depth, q);
                  res[j].point.vadd(q, ri);
                  rj.copy(res[j].point);

                  // Contact points are in world coordinates. Transform back to relative
                  ri.vsub(xi,ri);
                  rj.vsub(xj,rj);

                  // Make relative to bodies
                  ri.vadd(xi, ri);
                  ri.vsub(bi.position, ri);
                  rj.vadd(xj, rj);
                  rj.vsub(bj.position, rj);

                  this.result.push(r);
                  numContacts++;
                  if(!this.enableFrictionReduction){
                      this.createFrictionEquationsFromContact(r, this.frictionResult);
                  }
              }
              if(this.enableFrictionReduction && numContacts){
                  this.createFrictionFromAverage(numContacts);
              }
          }
      };


      /**
       * @method convexTrimesh
       * @param  {Array}      result
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      // Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.TRIMESH] =
      // Narrowphase.prototype.convexTrimesh = function(si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest,faceListA,faceListB){
      //     var sepAxis = convexConvex_sepAxis;

      //     if(xi.distanceTo(xj) > si.boundingSphereRadius + sj.boundingSphereRadius){
      //         return;
      //     }

      //     // Construct a temp hull for each triangle
      //     var hullB = new ConvexPolyhedron();

      //     hullB.faces = [[0,1,2]];
      //     var va = new Vec3();
      //     var vb = new Vec3();
      //     var vc = new Vec3();
      //     hullB.vertices = [
      //         va,
      //         vb,
      //         vc
      //     ];

      //     for (var i = 0; i < sj.indices.length / 3; i++) {

      //         var triangleNormal = new Vec3();
      //         sj.getNormal(i, triangleNormal);
      //         hullB.faceNormals = [triangleNormal];

      //         sj.getTriangleVertices(i, va, vb, vc);

      //         var d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);
      //         if(!d){
      //             triangleNormal.scale(-1, triangleNormal);
      //             d = si.testSepAxis(triangleNormal, hullB, xi, qi, xj, qj);

      //             if(!d){
      //                 continue;
      //             }
      //         }

      //         var res = [];
      //         var q = convexConvex_q;
      //         si.clipAgainstHull(xi,qi,hullB,xj,qj,triangleNormal,-100,100,res);
      //         if(res.length == 0) return false;
      //         if(justTest) return true;
      //         for(var j = 0; j !== res.length; j++){
      //             var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj),
      //                 ri = r.ri,
      //                 rj = r.rj;
      //             r.ni.copy(triangleNormal);
      //             r.ni.negate(r.ni);
      //             res[j].normal.negate(q);
      //             q.mult(res[j].depth, q);
      //             res[j].point.vadd(q, ri);
      //             rj.copy(res[j].point);

      //             // Contact points are in world coordinates. Transform back to relative
      //             ri.vsub(xi,ri);
      //             rj.vsub(xj,rj);

      //             // Make relative to bodies
      //             ri.vadd(xi, ri);
      //             ri.vsub(bi.position, ri);
      //             rj.vadd(xj, rj);
      //             rj.vsub(bj.position, rj);

      //             result.push(r);
      //         }
      //     }
      // };

      var particlePlane_normal = new Vec3();
      var particlePlane_relpos = new Vec3();
      var particlePlane_projected = new Vec3();

      /**
       * @method particlePlane
       * @param  {Array}      result
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.PLANE | Shape.types.PARTICLE] =
      Narrowphase.prototype.planeParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
          var normal = particlePlane_normal;
          normal.set(0,0,1);
          bj.quaternion.vmult(normal,normal); // Turn normal according to plane orientation
          var relpos = particlePlane_relpos;
          xi.vsub(bj.position,relpos);
          var dot = normal.dot(relpos);
          if(dot <= 0.0){

              if(justTest){
                  return true;
              }

              var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
              r.ni.copy(normal); // Contact normal is the plane normal
              r.ni.negate(r.ni);
              r.ri.set(0,0,0); // Center of particle

              // Get particle position projected on plane
              var projected = particlePlane_projected;
              normal.mult(normal.dot(xi),projected);
              xi.vsub(projected,projected);
              //projected.vadd(bj.position,projected);

              // rj is now the projected world position minus plane position
              r.rj.copy(projected);
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
      };

      var particleSphere_normal = new Vec3();

      /**
       * @method particleSphere
       * @param  {Array}      result
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.SPHERE] =
      Narrowphase.prototype.sphereParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
          // The normal is the unit vector from sphere center to particle center
          var normal = particleSphere_normal;
          normal.set(0,0,1);
          xi.vsub(xj,normal);
          var lengthSquared = normal.norm2();

          if(lengthSquared <= sj.radius * sj.radius){
              if(justTest){
                  return true;
              }
              var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
              normal.normalize();
              r.rj.copy(normal);
              r.rj.mult(sj.radius,r.rj);
              r.ni.copy(normal); // Contact normal
              r.ni.negate(r.ni);
              r.ri.set(0,0,0); // Center of particle
              this.result.push(r);
              this.createFrictionEquationsFromContact(r, this.frictionResult);
          }
      };

      // WIP
      var cqj = new Quaternion();
      var convexParticle_local = new Vec3();
      new Vec3();
      var convexParticle_penetratedFaceNormal = new Vec3();
      var convexParticle_vertexToParticle = new Vec3();
      var convexParticle_worldPenetrationVec = new Vec3();

      /**
       * @method convexParticle
       * @param  {Array}      result
       * @param  {Shape}      si
       * @param  {Shape}      sj
       * @param  {Vec3}       xi
       * @param  {Vec3}       xj
       * @param  {Quaternion} qi
       * @param  {Quaternion} qj
       * @param  {Body}       bi
       * @param  {Body}       bj
       */
      Narrowphase.prototype[Shape.types.PARTICLE | Shape.types.CONVEXPOLYHEDRON] =
      Narrowphase.prototype.convexParticle = function(sj,si,xj,xi,qj,qi,bj,bi,rsi,rsj,justTest){
          var penetratedFaceIndex = -1;
          var penetratedFaceNormal = convexParticle_penetratedFaceNormal;
          var worldPenetrationVec = convexParticle_worldPenetrationVec;
          var minPenetration = null;

          // Convert particle position xi to local coords in the convex
          var local = convexParticle_local;
          local.copy(xi);
          local.vsub(xj,local); // Convert position to relative the convex origin
          qj.conjugate(cqj);
          cqj.vmult(local,local);

          if(sj.pointIsInside(local)){

              if(sj.worldVerticesNeedsUpdate){
                  sj.computeWorldVertices(xj,qj);
              }
              if(sj.worldFaceNormalsNeedsUpdate){
                  sj.computeWorldFaceNormals(qj);
              }

              // For each world polygon in the polyhedra
              for(var i=0,nfaces=sj.faces.length; i!==nfaces; i++){

                  // Construct world face vertices
                  var verts = [ sj.worldVertices[ sj.faces[i][0] ] ];
                  var normal = sj.worldFaceNormals[i];

                  // Check how much the particle penetrates the polygon plane.
                  xi.vsub(verts[0],convexParticle_vertexToParticle);
                  var penetration = -normal.dot(convexParticle_vertexToParticle);
                  if(minPenetration===null || Math.abs(penetration)<Math.abs(minPenetration)){

                      if(justTest){
                          return true;
                      }

                      minPenetration = penetration;
                      penetratedFaceIndex = i;
                      penetratedFaceNormal.copy(normal);
                  }
              }

              if(penetratedFaceIndex!==-1){
                  // Setup contact
                  var r = this.createContactEquation(bi,bj,si,sj,rsi,rsj);
                  penetratedFaceNormal.mult(minPenetration, worldPenetrationVec);

                  // rj is the particle position projected to the face
                  worldPenetrationVec.vadd(xi,worldPenetrationVec);
                  worldPenetrationVec.vsub(xj,worldPenetrationVec);
                  r.rj.copy(worldPenetrationVec);
                  //var projectedToFace = xi.vsub(xj).vadd(worldPenetrationVec);
                  //projectedToFace.copy(r.rj);

                  //qj.vmult(r.rj,r.rj);
                  penetratedFaceNormal.negate( r.ni ); // Contact normal
                  r.ri.set(0,0,0); // Center of particle

                  var ri = r.ri,
                      rj = r.rj;

                  // Make relative to bodies
                  ri.vadd(xi, ri);
                  ri.vsub(bi.position, ri);
                  rj.vadd(xj, rj);
                  rj.vsub(bj.position, rj);

                  this.result.push(r);
                  this.createFrictionEquationsFromContact(r, this.frictionResult);
              } else {
                  console.warn("Point found inside convex, but did not find penetrating face!");
              }
          }
      };

      Narrowphase.prototype[Shape.types.BOX | Shape.types.HEIGHTFIELD] =
      Narrowphase.prototype.boxHeightfield = function (si,sj,xi,xj,qi,qj,bi,bj,rsi,rsj,justTest){
          si.convexPolyhedronRepresentation.material = si.material;
          si.convexPolyhedronRepresentation.collisionResponse = si.collisionResponse;
          return this.convexHeightfield(si.convexPolyhedronRepresentation,sj,xi,xj,qi,qj,bi,bj,si,sj,justTest);
      };

      var convexHeightfield_tmp1 = new Vec3();
      var convexHeightfield_tmp2 = new Vec3();
      var convexHeightfield_faceList = [0];

      /**
       * @method convexHeightfield
       */
      Narrowphase.prototype[Shape.types.CONVEXPOLYHEDRON | Shape.types.HEIGHTFIELD] =
      Narrowphase.prototype.convexHeightfield = function (
          convexShape,
          hfShape,
          convexPos,
          hfPos,
          convexQuat,
          hfQuat,
          convexBody,
          hfBody,
          rsi,
          rsj,
          justTest
      ){
          var data = hfShape.data,
              w = hfShape.elementSize,
              radius = convexShape.boundingSphereRadius,
              worldPillarOffset = convexHeightfield_tmp2,
              faceList = convexHeightfield_faceList;

          // Get sphere position to heightfield local!
          var localConvexPos = convexHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, convexPos, localConvexPos);

          // Get the index of the data points to test against
          var iMinX = Math.floor((localConvexPos.x - radius) / w) - 1,
              iMaxX = Math.ceil((localConvexPos.x + radius) / w) + 1,
              iMinY = Math.floor((localConvexPos.y - radius) / w) - 1,
              iMaxY = Math.ceil((localConvexPos.y + radius) / w) + 1;

          // Bail out if we are out of the terrain
          if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
              return;
          }

          // Clamp index to edges
          if(iMinX < 0){ iMinX = 0; }
          if(iMaxX < 0){ iMaxX = 0; }
          if(iMinY < 0){ iMinY = 0; }
          if(iMaxY < 0){ iMaxY = 0; }
          if(iMinX >= data.length){ iMinX = data.length - 1; }
          if(iMaxX >= data.length){ iMaxX = data.length - 1; }
          if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
          if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];

          // Bail out if we're cant touch the bounding height box
          if(localConvexPos.z - radius > max || localConvexPos.z + radius < min){
              return;
          }

          for(var i = iMinX; i < iMaxX; i++){
              for(var j = iMinY; j < iMaxY; j++){

                  var intersecting = false;

                  // Lower triangle
                  hfShape.getConvexTrianglePillar(i, j, false);
                  Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                  if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                      intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, rsi, rsj, justTest, faceList, null);
                  }

                  if(justTest && intersecting){
                      return true;
                  }

                  // Upper triangle
                  hfShape.getConvexTrianglePillar(i, j, true);
                  Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                  if (convexPos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + convexShape.boundingSphereRadius) {
                      intersecting = this.convexConvex(convexShape, hfShape.pillarConvex, convexPos, worldPillarOffset, convexQuat, hfQuat, convexBody, hfBody, rsi, rsj, justTest, faceList, null);
                  }

                  if(justTest && intersecting){
                      return true;
                  }
              }
          }
      };

      var sphereHeightfield_tmp1 = new Vec3();
      var sphereHeightfield_tmp2 = new Vec3();

      /**
       * @method sphereHeightfield
       */
      Narrowphase.prototype[Shape.types.SPHERE | Shape.types.HEIGHTFIELD] =
      Narrowphase.prototype.sphereHeightfield = function (
          sphereShape,
          hfShape,
          spherePos,
          hfPos,
          sphereQuat,
          hfQuat,
          sphereBody,
          hfBody,
          rsi,
          rsj,
          justTest
      ){
          var data = hfShape.data,
              radius = sphereShape.radius,
              w = hfShape.elementSize,
              worldPillarOffset = sphereHeightfield_tmp2;

          // Get sphere position to heightfield local!
          var localSpherePos = sphereHeightfield_tmp1;
          Transform.pointToLocalFrame(hfPos, hfQuat, spherePos, localSpherePos);

          // Get the index of the data points to test against
          var iMinX = Math.floor((localSpherePos.x - radius) / w) - 1,
              iMaxX = Math.ceil((localSpherePos.x + radius) / w) + 1,
              iMinY = Math.floor((localSpherePos.y - radius) / w) - 1,
              iMaxY = Math.ceil((localSpherePos.y + radius) / w) + 1;

          // Bail out if we are out of the terrain
          if(iMaxX < 0 || iMaxY < 0 || iMinX > data.length || iMinY > data[0].length){
              return;
          }

          // Clamp index to edges
          if(iMinX < 0){ iMinX = 0; }
          if(iMaxX < 0){ iMaxX = 0; }
          if(iMinY < 0){ iMinY = 0; }
          if(iMaxY < 0){ iMaxY = 0; }
          if(iMinX >= data.length){ iMinX = data.length - 1; }
          if(iMaxX >= data.length){ iMaxX = data.length - 1; }
          if(iMaxY >= data[0].length){ iMaxY = data[0].length - 1; }
          if(iMinY >= data[0].length){ iMinY = data[0].length - 1; }

          var minMax = [];
          hfShape.getRectMinMax(iMinX, iMinY, iMaxX, iMaxY, minMax);
          var min = minMax[0];
          var max = minMax[1];

          // Bail out if we're cant touch the bounding height box
          if(localSpherePos.z - radius > max || localSpherePos.z + radius < min){
              return;
          }

          var result = this.result;
          for(var i = iMinX; i < iMaxX; i++){
              for(var j = iMinY; j < iMaxY; j++){

                  var numContactsBefore = result.length;

                  var intersecting = false;

                  // Lower triangle
                  hfShape.getConvexTrianglePillar(i, j, false);
                  Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                  if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                      intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
                  }

                  if(justTest && intersecting){
                      return true;
                  }

                  // Upper triangle
                  hfShape.getConvexTrianglePillar(i, j, true);
                  Transform.pointToWorldFrame(hfPos, hfQuat, hfShape.pillarOffset, worldPillarOffset);
                  if (spherePos.distanceTo(worldPillarOffset) < hfShape.pillarConvex.boundingSphereRadius + sphereShape.boundingSphereRadius) {
                      intersecting = this.sphereConvex(sphereShape, hfShape.pillarConvex, spherePos, worldPillarOffset, sphereQuat, hfQuat, sphereBody, hfBody, sphereShape, hfShape, justTest);
                  }

                  if(justTest && intersecting){
                      return true;
                  }

                  var numContacts = result.length - numContactsBefore;

                  if(numContacts > 2){
                      return;
                  }
                  /*
                  // Skip all but 1
                  for (var k = 0; k < numContacts - 1; k++) {
                      result.pop();
                  }
                  */
              }
          }
      };

      },{"../collision/AABB":3,"../collision/Ray":10,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../math/Quaternion":29,"../math/Transform":30,"../math/Vec3":31,"../objects/Body":32,"../shapes/ConvexPolyhedron":39,"../shapes/Shape":44,"../solver/Solver":48,"../utils/Vec3Pool":55}],57:[function(_dereq_,module,exports){
      /* global performance */

      module.exports = World;

      _dereq_('../shapes/Shape');
      var Vec3 = _dereq_('../math/Vec3');
      var Quaternion = _dereq_('../math/Quaternion');
      var GSSolver = _dereq_('../solver/GSSolver');
      _dereq_('../equations/ContactEquation');
      _dereq_('../equations/FrictionEquation');
      var Narrowphase = _dereq_('./Narrowphase');
      var EventTarget = _dereq_('../utils/EventTarget');
      var ArrayCollisionMatrix = _dereq_('../collision/ArrayCollisionMatrix');
      var ObjectCollisionMatrix = _dereq_('../collision/ObjectCollisionMatrix');
      var OverlapKeeper = _dereq_('../collision/OverlapKeeper');
      var Material = _dereq_('../material/Material');
      var ContactMaterial = _dereq_('../material/ContactMaterial');
      var Body = _dereq_('../objects/Body');
      var TupleDictionary = _dereq_('../utils/TupleDictionary');
      var RaycastResult = _dereq_('../collision/RaycastResult');
      var AABB = _dereq_('../collision/AABB');
      var Ray = _dereq_('../collision/Ray');
      var NaiveBroadphase = _dereq_('../collision/NaiveBroadphase');

      /**
       * The physics world
       * @class World
       * @constructor
       * @extends EventTarget
       * @param {object} [options]
       * @param {Vec3} [options.gravity]
       * @param {boolean} [options.allowSleep]
       * @param {Broadphase} [options.broadphase]
       * @param {Solver} [options.solver]
       * @param {boolean} [options.quatNormalizeFast]
       * @param {number} [options.quatNormalizeSkip]
       */
      function World(options){
          options = options || {};
          EventTarget.apply(this);

          /**
           * Currently / last used timestep. Is set to -1 if not available. This value is updated before each internal step, which means that it is "fresh" inside event callbacks.
           * @property {Number} dt
           */
          this.dt = -1;

          /**
           * Makes bodies go to sleep when they've been inactive
           * @property allowSleep
           * @type {Boolean}
           * @default false
           */
          this.allowSleep = !!options.allowSleep;

          /**
           * All the current contacts (instances of ContactEquation) in the world.
           * @property contacts
           * @type {Array}
           */
          this.contacts = [];
          this.frictionEquations = [];

          /**
           * How often to normalize quaternions. Set to 0 for every step, 1 for every second etc.. A larger value increases performance. If bodies tend to explode, set to a smaller value (zero to be sure nothing can go wrong).
           * @property quatNormalizeSkip
           * @type {Number}
           * @default 0
           */
          this.quatNormalizeSkip = options.quatNormalizeSkip !== undefined ? options.quatNormalizeSkip : 0;

          /**
           * Set to true to use fast quaternion normalization. It is often enough accurate to use. If bodies tend to explode, set to false.
           * @property quatNormalizeFast
           * @type {Boolean}
           * @see Quaternion.normalizeFast
           * @see Quaternion.normalize
           * @default false
           */
          this.quatNormalizeFast = options.quatNormalizeFast !== undefined ? options.quatNormalizeFast : false;

          /**
           * The wall-clock time since simulation start
           * @property time
           * @type {Number}
           */
          this.time = 0.0;

          /**
           * Number of timesteps taken since start
           * @property stepnumber
           * @type {Number}
           */
          this.stepnumber = 0;

          /// Default and last timestep sizes
          this.default_dt = 1/60;

          this.nextId = 0;
          /**
           * @property gravity
           * @type {Vec3}
           */
          this.gravity = new Vec3();
          if(options.gravity){
              this.gravity.copy(options.gravity);
          }

          /**
           * The broadphase algorithm to use. Default is NaiveBroadphase
           * @property broadphase
           * @type {Broadphase}
           */
          this.broadphase = options.broadphase !== undefined ? options.broadphase : new NaiveBroadphase();

          /**
           * @property bodies
           * @type {Array}
           */
          this.bodies = [];

          /**
           * The solver algorithm to use. Default is GSSolver
           * @property solver
           * @type {Solver}
           */
          this.solver = options.solver !== undefined ? options.solver : new GSSolver();

          /**
           * @property constraints
           * @type {Array}
           */
          this.constraints = [];

          /**
           * @property narrowphase
           * @type {Narrowphase}
           */
          this.narrowphase = new Narrowphase(this);

          /**
           * @property {ArrayCollisionMatrix} collisionMatrix
      	 * @type {ArrayCollisionMatrix}
      	 */
      	this.collisionMatrix = new ArrayCollisionMatrix();

          /**
           * CollisionMatrix from the previous step.
           * @property {ArrayCollisionMatrix} collisionMatrixPrevious
      	 * @type {ArrayCollisionMatrix}
      	 */
      	this.collisionMatrixPrevious = new ArrayCollisionMatrix();

          this.bodyOverlapKeeper = new OverlapKeeper();
          this.shapeOverlapKeeper = new OverlapKeeper();

          /**
           * All added materials
           * @property materials
           * @type {Array}
           */
          this.materials = [];

          /**
           * @property contactmaterials
           * @type {Array}
           */
          this.contactmaterials = [];

          /**
           * Used to look up a ContactMaterial given two instances of Material.
           * @property {TupleDictionary} contactMaterialTable
           */
          this.contactMaterialTable = new TupleDictionary();

          this.defaultMaterial = new Material("default");

          /**
           * This contact material is used if no suitable contactmaterial is found for a contact.
           * @property defaultContactMaterial
           * @type {ContactMaterial}
           */
          this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial, this.defaultMaterial, { friction: 0.3, restitution: 0.0 });

          /**
           * @property doProfiling
           * @type {Boolean}
           */
          this.doProfiling = false;

          /**
           * @property profile
           * @type {Object}
           */
          this.profile = {
              solve:0,
              makeContactConstraints:0,
              broadphase:0,
              integrate:0,
              narrowphase:0,
          };

          /**
           * Time accumulator for interpolation. See http://gafferongames.com/game-physics/fix-your-timestep/
           * @property {Number} accumulator
           */
          this.accumulator = 0;

          /**
           * @property subsystems
           * @type {Array}
           */
          this.subsystems = [];

          /**
           * Dispatched after a body has been added to the world.
           * @event addBody
           * @param {Body} body The body that has been added to the world.
           */
          this.addBodyEvent = {
              type:"addBody",
              body : null
          };

          /**
           * Dispatched after a body has been removed from the world.
           * @event removeBody
           * @param {Body} body The body that has been removed from the world.
           */
          this.removeBodyEvent = {
              type:"removeBody",
              body : null
          };

          this.idToBodyMap = {};

          this.broadphase.setWorld(this);
          this.substeps = 0;
          this.cm = new ObjectCollisionMatrix();
          this.tm = new ObjectCollisionMatrix();
          this.triggerDic = new TupleDictionary();
          this.oldTriggerDic = new TupleDictionary();
          this.contactsDic = new TupleDictionary();
          this.oldContactsDic = new TupleDictionary();
      }
      World.idToBodyMap = {};
      World.idToShapeMap = {};
      World.integrateKinematic = false;
      World.ccdSphereAdvance = false;
      World.prototype = new EventTarget();

      // Temp stuff
      new AABB();
      var tmpRay = new Ray();

      /**
       * Get the contact material between materials m1 and m2
       * @method getContactMaterial
       * @param {Material} m1
       * @param {Material} m2
       * @return {ContactMaterial} The contact material if it was found.
       */
      World.prototype.getContactMaterial = function(m1,m2){
          return this.contactMaterialTable.get(m1.id,m2.id); //this.contactmaterials[this.mats2cmat[i+j*this.materials.length]];
      };

      /**
       * Get number of objects in the world.
       * @method numObjects
       * @return {Number}
       * @deprecated
       */
      World.prototype.numObjects = function(){
          return this.bodies.length;
      };

      /**
       * Store old collision state info
       * @method collisionMatrixTick
       */
      World.prototype.collisionMatrixTick = function(){
      	var temp = this.collisionMatrixPrevious;
      	this.collisionMatrixPrevious = this.collisionMatrix;
      	this.collisionMatrix = temp;
      	this.collisionMatrix.reset();

          this.bodyOverlapKeeper.tick();
          this.shapeOverlapKeeper.tick();
      };

      /**
       * Add a rigid body to the simulation.
       * @method add
       * @param {Body} body
       * @todo If the simulation has not yet started, why recrete and copy arrays for each body? Accumulate in dynamic arrays in this case.
       * @todo Adding an array of bodies should be possible. This would save some loops too
       * @deprecated Use .addBody instead
       */
      World.prototype.add = World.prototype.addBody = function(body){
          if(this.bodies.indexOf(body) !== -1){
              return;
          }
          body.index = this.bodies.length;
          this.bodies.push(body);
          body.world = this;
          body.initPosition.copy(body.position);
          body.initVelocity.copy(body.velocity);
          body.timeLastSleepy = this.time;
          if(body instanceof Body){
              body.initAngularVelocity.copy(body.angularVelocity);
              body.initQuaternion.copy(body.quaternion);
          }
      	this.collisionMatrix.setNumObjects(this.bodies.length);
          this.addBodyEvent.body = body;
          this.cm.setNumObjects(this.bodies.length);
          World.idToBodyMap[body.id] = body;
          this.dispatchEvent(this.addBodyEvent);
      };

      /**
       * Add a constraint to the simulation.
       * @method addConstraint
       * @param {Constraint} c
       */
      World.prototype.addConstraint = function(c){
          this.constraints.push(c);
      };

      /**
       * Removes a constraint
       * @method removeConstraint
       * @param {Constraint} c
       */
      World.prototype.removeConstraint = function(c){
          var idx = this.constraints.indexOf(c);
          if(idx!==-1){
              this.constraints.splice(idx,1);
          }
      };

      /**
       * Raycast test
       * @method rayTest
       * @param {Vec3} from
       * @param {Vec3} to
       * @param {RaycastResult} result
       * @deprecated Use .raycastAll, .raycastClosest or .raycastAny instead.
       */
      World.prototype.rayTest = function(from, to, result){
          if(result instanceof RaycastResult){
              // Do raycastclosest
              this.raycastClosest(from, to, {
                  skipBackfaces: true
              }, result);
          } else {
              // Do raycastAll
              this.raycastAll(from, to, {
                  skipBackfaces: true
              }, result);
          }
      };

      /**
       * Ray cast against all bodies. The provided callback will be executed for each hit with a RaycastResult as single argument.
       * @method raycastAll
       * @param  {Vec3} from
       * @param  {Vec3} to
       * @param  {Object} options
       * @param  {number} [options.collisionFilterMask=-1]
       * @param  {number} [options.collisionFilterGroup=-1]
       * @param  {boolean} [options.skipBackfaces=false]
       * @param  {boolean} [options.checkCollisionResponse=true]
       * @param  {Function} callback
       * @return {boolean} True if any body was hit.
       */
      World.prototype.raycastAll = function(from, to, options, callback){
          options.mode = Ray.ALL;
          options.from = from;
          options.to = to;
          options.callback = callback;
          return tmpRay.intersectWorld(this, options);
      };

      /**
       * Ray cast, and stop at the first result. Note that the order is random - but the method is fast.
       * @method raycastAny
       * @param  {Vec3} from
       * @param  {Vec3} to
       * @param  {Object} options
       * @param  {number} [options.collisionFilterMask=-1]
       * @param  {number} [options.collisionFilterGroup=-1]
       * @param  {boolean} [options.skipBackfaces=false]
       * @param  {boolean} [options.checkCollisionResponse=true]
       * @param  {RaycastResult} result
       * @return {boolean} True if any body was hit.
       */
      World.prototype.raycastAny = function(from, to, options, result){
          options.mode = Ray.ANY;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
      };

      /**
       * Ray cast, and return information of the closest hit.
       * @method raycastClosest
       * @param  {Vec3} from
       * @param  {Vec3} to
       * @param  {Object} options
       * @param  {number} [options.collisionFilterMask=-1]
       * @param  {number} [options.collisionFilterGroup=-1]
       * @param  {boolean} [options.skipBackfaces=false]
       * @param  {boolean} [options.checkCollisionResponse=true]
       * @param  {RaycastResult} result
       * @return {boolean} True if any body was hit.
       */
      World.prototype.raycastClosest = function(from, to, options, result){
          options.mode = Ray.CLOSEST;
          options.from = from;
          options.to = to;
          options.result = result;
          return tmpRay.intersectWorld(this, options);
      };

      /**
       * Remove a rigid body from the simulation.
       * @method remove
       * @param {Body} body
       * @deprecated Use .removeBody instead
       */
      World.prototype.remove = function(body){
          body.world = null;
          var n = this.bodies.length - 1,
              bodies = this.bodies,
              idx = bodies.indexOf(body);
          if(idx !== -1){
              bodies.splice(idx, 1); // Todo: should use a garbage free method

              // Recompute index
              for(var i=0; i!==bodies.length; i++){
                  bodies[i].index = i;
              }

              this.collisionMatrix.setNumObjects(n);
              this.removeBodyEvent.body = body;
              delete World.idToBodyMap[body.id];
              this.cm.setNumObjects(n);
              this.dispatchEvent(this.removeBodyEvent);
          }
      };

      /**
       * Remove a rigid body from the simulation.
       * @method removeBody
       * @param {Body} body
       */
      World.prototype.removeBody = World.prototype.remove;

      World.prototype.getBodyById = function (id) {
          return World.idToBodyMap[id];
      };

      World.prototype.getShapeById = function (id) {
          return World.idToShapeMap[id];
      };

      /**
       * Adds a material to the World.
       * @method addMaterial
       * @param {Material} m
       * @todo Necessary?
       */
      World.prototype.addMaterial = function(m){
          this.materials.push(m);
      };

      /**
       * Adds a contact material to the World
       * @method addContactMaterial
       * @param {ContactMaterial} cmat
       */
      World.prototype.addContactMaterial = function(cmat) {

          // Add contact material
          this.contactmaterials.push(cmat);

          // Add current contact material to the material table
          this.contactMaterialTable.set(cmat.materials[0].id,cmat.materials[1].id,cmat);
      };

      // performance.now()
      if(typeof performance === 'undefined'){
          performance = {};
      }
      if(!performance.now){
          var nowOffset = Date.now();
          if (performance.timing && performance.timing.navigationStart){
              nowOffset = performance.timing.navigationStart;
          }
          performance.now = function(){
              return Date.now() - nowOffset;
          };
      }

      World.prototype.saveKinematicAndApplyGravity = function(dt) {
          var bodies = this.bodies;
          var N = this.bodies.length;
          // apply damping / kinematic / gravity
          for(var i=0; i!==N; i++){
              var bi = bodies[i];
              if(bi.type === Body.DYNAMIC) {
                  bi.applyGravity(this.gravity);
              } else if(bi.type === Body.KINEMATIC) {
                  bi.updateKinematic(dt);
              }
          }
      };

      /**
       * Step the physics world forward in time.
       *
       * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.
       *
       * @method step
       * @param {Number} dt                       The fixed time step size to use.
       * @param {Number} [timeSinceLastCalled]    The time elapsed since the function was last called.
       * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.
       *
       * @example
       *     // fixed timestepping without interpolation
       *     world.step(1/60);
       *
       * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World
       */
      World.prototype.step = function(dt, timeSinceLastCalled, maxSubSteps){
          maxSubSteps = maxSubSteps || 10;
          timeSinceLastCalled = timeSinceLastCalled || 0;

          if(timeSinceLastCalled === 0){ // Fixed, simple stepping

              this.saveKinematicAndApplyGravity(dt);
              this.internalStep(dt);

              // Increment time
              this.time += dt;
              this.substeps = 1;

          } else {
              this.saveKinematicAndApplyGravity(timeSinceLastCalled);

              this.accumulator += timeSinceLastCalled;
              this.substeps = 0;
              while (this.accumulator >= dt && this.substeps < maxSubSteps) {
                  // Do fixed steps to catch up
                  this.internalStep(dt);
                  this.accumulator -= dt;
                  this.substeps++;
              }

              var t = (this.accumulator % dt) / dt;
              for(var j=0; j !== this.bodies.length; j++){
                  var b = this.bodies[j];
                  b.previousPosition.lerp(b.position, t, b.interpolatedPosition);
                  b.previousQuaternion.slerp(b.quaternion, t, b.interpolatedQuaternion);
                  b.previousQuaternion.normalize();
              }
              this.time += timeSinceLastCalled;
          }
          this.clearForces();
      };

      var /**
           * Dispatched after the world has stepped forward in time.
           * @event postStep
           */
          World_step_postStepEvent = {type:"postStep"}, // Reusable event objects to save memory
          /**
           * Dispatched before the world steps forward in time.
           * @event preStep
           */
          World_step_preStepEvent = {type:"preStep"},
          World_step_collideEvent = {type:"collide", body:null, contact:null },
          World_step_oldContacts = [], // Pools for unused objects
          World_step_frictionEquationPool = [],
          World_step_p1 = [], // Reusable arrays for collision pairs
          World_step_p2 = [];
          new Vec3(); // Temporary vectors and quats
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Vec3();
          new Quaternion();
          new Quaternion();
          new Quaternion();
          new Vec3();
      World.prototype.internalStep = function(dt){
          this.dt = dt;

          var contacts = this.contacts,
              p1 = World_step_p1,
              p2 = World_step_p2,
              N = this.numObjects(),
              bodies = this.bodies,
              solver = this.solver,
              doProfiling = this.doProfiling,
              profile = this.profile,
              DYNAMIC = Body.DYNAMIC,
              profilingStart,
              constraints = this.constraints,
              frictionEquationPool = World_step_frictionEquationPool,
              i=0;

          if(doProfiling){
              profilingStart = performance.now();
          }

          // Update subsystems
          for(var i=0, Nsubsystems=this.subsystems.length; i!==Nsubsystems; i++){
              this.subsystems[i].update();
          }

          // Collision detection
          if(doProfiling){ profilingStart = performance.now(); }
          p1.length = 0; // Clean up pair arrays from last step
          p2.length = 0;
          this.broadphase.collisionPairs(this,p1,p2);
          if(doProfiling){ profile.broadphase = performance.now() - profilingStart; }

          // Remove constrained pairs with collideConnected == false
          var Nconstraints = constraints.length;
          for(i=0; i!==Nconstraints; i++){
              var c = constraints[i];
              if(!c.collideConnected){
                  for(var j = p1.length-1; j>=0; j-=1){
                      if( (c.bodyA === p1[j] && c.bodyB === p2[j]) ||
                          (c.bodyB === p1[j] && c.bodyA === p2[j])){
                          p1.splice(j, 1);
                          p2.splice(j, 1);
                      }
                  }
              }
          }

          this.collisionMatrixTick();

          // Generate contacts
          if(doProfiling){ profilingStart = performance.now(); }
          var oldcontacts = World_step_oldContacts;
          var NoldContacts = contacts.length;

          for(i=0; i!==NoldContacts; i++){
              oldcontacts.push(contacts[i]);
          }
          contacts.length = 0;

          // Transfer FrictionEquation from current list to the pool for reuse
          var NoldFrictionEquations = this.frictionEquations.length;
          for(i=0; i!==NoldFrictionEquations; i++){
              frictionEquationPool.push(this.frictionEquations[i]);
          }
          this.frictionEquations.length = 0;

          this.narrowphase.getContacts(
              p1,
              p2,
              this,
              contacts,
              oldcontacts, // To be reused
              this.frictionEquations,
              frictionEquationPool
          );

          if(doProfiling){
              profile.narrowphase = performance.now() - profilingStart;
          }

          // Loop over all collisions
          if(doProfiling){
              profilingStart = performance.now();
          }

          // Add all friction eqs
          for (var i = 0; i < this.frictionEquations.length; i++) {
              solver.addEquation(this.frictionEquations[i]);
          }

          var ncontacts = contacts.length;
          for(var k=0; k!==ncontacts; k++){

              // Current contact
              var c = contacts[k];

              // Get current collision indeces
              var bi = c.bi,
                  bj = c.bj,
                  si = c.si,
                  sj = c.sj;

              // // Get collision properties
              // var cm;
              // if(bi.material && bj.material){
              //     cm = this.getContactMaterial(bi.material,bj.material) || this.defaultContactMaterial;
              // } else {
              //     cm = this.defaultContactMaterial;
              // }

              // // c.enabled = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;

              // var mu = cm.friction;
              // // c.restitution = cm.restitution;

              // // If friction or restitution were specified in the material, use them
              // if(bi.material && bj.material){
              //     if(bi.material.friction >= 0 && bj.material.friction >= 0){
              //         mu = bi.material.friction * bj.material.friction;
              //     }

              //     if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
              //         c.restitution = bi.material.restitution * bj.material.restitution;
              //     }
              // }

              // EXTEND
              if (si.material && sj.material) {            
                  if(si.material.restitution >= 0 && sj.material.restitution >= 0){
                      c.restitution = si.material.restitution * sj.material.restitution;
                  }
              }else {
                  if(bi.material && bj.material){   
                      if(bi.material.restitution >= 0 && bj.material.restitution >= 0){
                          c.restitution = bi.material.restitution * bj.material.restitution;
                      }
                  }
              }

      		// c.setSpookParams(
        //           cm.contactEquationStiffness,
        //           cm.contactEquationRelaxation,
        //           dt
        //       );

      		solver.addEquation(c);

      		// // Add friction constraint equation
      		// if(mu > 0){

      		// 	// Create 2 tangent equations
      		// 	var mug = mu * gnorm;
      		// 	var reducedMass = (bi.invMass + bj.invMass);
      		// 	if(reducedMass > 0){
      		// 		reducedMass = 1/reducedMass;
      		// 	}
      		// 	var pool = frictionEquationPool;
      		// 	var c1 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
      		// 	var c2 = pool.length ? pool.pop() : new FrictionEquation(bi,bj,mug*reducedMass);
      		// 	this.frictionEquations.push(c1, c2);

      		// 	c1.bi = c2.bi = bi;
      		// 	c1.bj = c2.bj = bj;
      		// 	c1.minForce = c2.minForce = -mug*reducedMass;
      		// 	c1.maxForce = c2.maxForce = mug*reducedMass;

      		// 	// Copy over the relative vectors
      		// 	c1.ri.copy(c.ri);
      		// 	c1.rj.copy(c.rj);
      		// 	c2.ri.copy(c.ri);
      		// 	c2.rj.copy(c.rj);

      		// 	// Construct tangents
      		// 	c.ni.tangents(c1.t, c2.t);

        //           // Set spook params
        //           c1.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);
        //           c2.setSpookParams(cm.frictionEquationStiffness, cm.frictionEquationRelaxation, dt);

        //           c1.enabled = c2.enabled = c.enabled;

      		// 	// Add equations to solver
      		// 	solver.addEquation(c1);
      		// 	solver.addEquation(c2);
      		// }

              if( bi.allowSleep &&
                  bi.type === Body.DYNAMIC &&
                  bi.sleepState  === Body.SLEEPING &&
                  bj.sleepState  === Body.AWAKE &&
                  bj.type !== Body.STATIC
              ){
                  var speedSquaredB = bj.velocity.norm2() + bj.angularVelocity.norm2();
                  var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);
                  if(speedSquaredB >= speedLimitSquaredB*2){
                      bi._wakeUpAfterNarrowphase = true;
                  }
              }

              if( bj.allowSleep &&
                  bj.type === Body.DYNAMIC &&
                  bj.sleepState  === Body.SLEEPING &&
                  bi.sleepState  === Body.AWAKE &&
                  bi.type !== Body.STATIC
              ){
                  var speedSquaredA = bi.velocity.norm2() + bi.angularVelocity.norm2();
                  var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);
                  if(speedSquaredA >= speedLimitSquaredA*2){
                      bj._wakeUpAfterNarrowphase = true;
                  }
              }

              // Now we know that i and j are in contact. Set collision matrix state
      		this.collisionMatrix.set(bi, bj, true);

              if (!this.collisionMatrixPrevious.get(bi, bj)) {
                  // First contact!
                  // We reuse the collideEvent object, otherwise we will end up creating new objects for each new contact, even if there's no event listener attached.
                  World_step_collideEvent.body = bj;
                  World_step_collideEvent.contact = c;
                  bi.dispatchEvent(World_step_collideEvent);

                  World_step_collideEvent.body = bi;
                  bj.dispatchEvent(World_step_collideEvent);
              }

              this.bodyOverlapKeeper.set(bi.id, bj.id);
              this.shapeOverlapKeeper.set(si.id, sj.id);
          }

          this.emitContactEvents();

          if(doProfiling){
              profile.makeContactConstraints = performance.now() - profilingStart;
              profilingStart = performance.now();
          }

          // Wake up bodies
          for(i=0; i!==N; i++){
              var bi = bodies[i];
              if(bi._wakeUpAfterNarrowphase){
                  bi.wakeUp();
                  bi._wakeUpAfterNarrowphase = false;
              }
          }

          // Add user-added constraints
          var Nconstraints = constraints.length;
          for(i=0; i!==Nconstraints; i++){
              var c = constraints[i];
              c.update();
              for(var j=0, Neq=c.equations.length; j!==Neq; j++){
                  var eq = c.equations[j];
                  solver.addEquation(eq);
              }
          }

          // Solve the constrained system
          solver.solve(dt,this);

          if(doProfiling){
              profile.solve = performance.now() - profilingStart;
          }

          // Remove all contacts from solver
          solver.removeAllEquations();

          this.dispatchEvent(World_step_preStepEvent);

          // Invoke pre-step callbacks
          for(i=0; i!==N; i++){
              var bi = bodies[i];
              if(bi.preStep){
                  bi.preStep.call(bi);
              }
          }

          // Leap frog
          // vnew = v + h*f/m
          // xnew = x + h*vnew
          if(doProfiling){
              profilingStart = performance.now();
          }
          var stepnumber = this.stepnumber;
          var quatNormalize = stepnumber % (this.quatNormalizeSkip + 1) === 0;
          var quatNormalizeFast = this.quatNormalizeFast;

          for(i=0; i!==N; i++){
              bodies[i].integrate(dt, quatNormalize, quatNormalizeFast);
          }

          // Apply damping, see http://code.google.com/p/bullet/issues/detail?id=74 for details
          var pow = Math.pow;
          for(i=0; i!==N; i++){
              var bi = bodies[i];
              if(bi.type & DYNAMIC){ // Only for dynamic bodies
                  var ld = pow(1.0 - bi.linearDamping,dt);
                  var v = bi.velocity;
                  v.mult(ld,v);
                  var av = bi.angularVelocity;
                  if(av){
                      var ad = pow(1.0 - bi.angularDamping,dt);
                      av.mult(ad,av);
                  }
              }
          }

          this.broadphase.dirty = true;

          if(doProfiling){
              profile.integrate = performance.now() - profilingStart;
          }

          // Update world time
          this.time += dt;
          this.stepnumber += 1;

          this.dispatchEvent(World_step_postStepEvent);

          // Invoke post-step callbacks
          for(i=0; i!==N; i++){
              var bi = bodies[i];
              var postStep = bi.postStep;
              if(postStep){
                  postStep.call(bi);
              }
          }

          // Sleeping update
          if(this.allowSleep){
              for(i=0; i!==N; i++){
                  bodies[i].sleepTick(this.time);
              }
          }
      };

      World.prototype.emitContactEvents = (function(){
          var additions = [];
          var removals = [];
          var beginContactEvent = {
              type: 'beginContact',
              bodyA: null,
              bodyB: null
          };
          var endContactEvent = {
              type: 'endContact',
              bodyA: null,
              bodyB: null
          };
          var beginShapeContactEvent = {
              type: 'beginShapeContact',
              bodyA: null,
              bodyB: null,
              shapeA: null,
              shapeB: null
          };
          var endShapeContactEvent = {
              type: 'endShapeContact',
              bodyA: null,
              bodyB: null,
              shapeA: null,
              shapeB: null
          };
          return function(){
              var hasBeginContact = this.hasAnyEventListener('beginContact');
              var hasEndContact = this.hasAnyEventListener('endContact');

              if(hasBeginContact || hasEndContact){
                  this.bodyOverlapKeeper.getDiff(additions, removals);
              }

              if(hasBeginContact){
                  for (var i = 0, l = additions.length; i < l; i += 2) {
                      beginContactEvent.bodyA = this.getBodyById(additions[i]);
                      beginContactEvent.bodyB = this.getBodyById(additions[i+1]);
                      this.dispatchEvent(beginContactEvent);
                  }
                  beginContactEvent.bodyA = beginContactEvent.bodyB = null;
              }

              if(hasEndContact){
                  for (var i = 0, l = removals.length; i < l; i += 2) {
                      endContactEvent.bodyA = this.getBodyById(removals[i]);
                      endContactEvent.bodyB = this.getBodyById(removals[i+1]);
                      this.dispatchEvent(endContactEvent);
                  }
                  endContactEvent.bodyA = endContactEvent.bodyB = null;
              }

              additions.length = removals.length = 0;

              var hasBeginShapeContact = this.hasAnyEventListener('beginShapeContact');
              var hasEndShapeContact = this.hasAnyEventListener('endShapeContact');

              if(hasBeginShapeContact || hasEndShapeContact){
                  this.shapeOverlapKeeper.getDiff(additions, removals);
              }

              if(hasBeginShapeContact){
                  for (var i = 0, l = additions.length; i < l; i += 2) {
                      var shapeA = this.getShapeById(additions[i]);
                      var shapeB = this.getShapeById(additions[i+1]);
                      beginShapeContactEvent.shapeA = shapeA;
                      beginShapeContactEvent.shapeB = shapeB;
                      beginShapeContactEvent.bodyA = shapeA.body;
                      beginShapeContactEvent.bodyB = shapeB.body;
                      this.dispatchEvent(beginShapeContactEvent);
                  }
                  beginShapeContactEvent.bodyA = beginShapeContactEvent.bodyB = beginShapeContactEvent.shapeA = beginShapeContactEvent.shapeB = null;
              }

              if(hasEndShapeContact){
                  for (var i = 0, l = removals.length; i < l; i += 2) {
                      var shapeA = this.getShapeById(removals[i]);
                      var shapeB = this.getShapeById(removals[i+1]);
                      endShapeContactEvent.shapeA = shapeA;
                      endShapeContactEvent.shapeB = shapeB;
                      endShapeContactEvent.bodyA = shapeA.body;
                      endShapeContactEvent.bodyB = shapeB.body;
                      this.dispatchEvent(endShapeContactEvent);
                  }
                  endShapeContactEvent.bodyA = endShapeContactEvent.bodyB = endShapeContactEvent.shapeA = endShapeContactEvent.shapeB = null;
              }

          };
      })();

      /**
       * Sets all body forces in the world to zero.
       * @method clearForces
       */
      World.prototype.clearForces = function(){
          var bodies = this.bodies;
          var N = bodies.length;
          for(var i=0; i !== N; i++){
              var b = bodies[i];
                  b.force;
                  b.torque;

              b.force.set(0,0,0);
              b.torque.set(0,0,0);
          }
      };

      var cc_trigger = {type: 'cc-trigger',event: '',selfBody: null,otherBody: null,selfShape: null,otherShape: null};
      var cc_collide = {type: "cc-collide",event: '',body: null,selfShape: null,otherShape: null,contacts: null};
      var cc_oldContacts = [];
      World.prototype.emitTriggeredEvents = function () {
          if (this.substeps == 0) return;

          var key;
          var data;
          var i = this.triggerDic.getLength();
          while (i--) {
              key = this.triggerDic.getKeyByIndex(i);
              data = this.triggerDic.getDataByKey(key);
              
              if (data == null) continue;
              
              var shapeA = data.si;
              var shapeB = data.sj;
              if (this.tm.get(shapeA, shapeB)) {
                  cc_trigger.event = 'onTriggerStay';
              } else {
                  this.tm.set(shapeA, shapeB, true);
                  cc_trigger.event = 'onTriggerEnter';
              }
              cc_trigger.selfShape = shapeA;
              cc_trigger.otherShape = shapeB;
              cc_trigger.selfBody = shapeA.body;
              cc_trigger.otherBody = shapeB.body;
              shapeA.dispatchEvent(cc_trigger);

              cc_trigger.selfShape = shapeB;
              cc_trigger.otherShape = shapeA;
              cc_trigger.selfBody = shapeB.body;
              cc_trigger.otherBody = shapeA.body;
              shapeB.dispatchEvent(cc_trigger);
          }

          i = this.oldTriggerDic.getLength();
          while (i > 0) {
              i--;
              key = this.oldTriggerDic.getKeyByIndex(i);

              if (this.triggerDic.getDataByKey(key) != null) continue;

              data = this.oldTriggerDic.getDataByKey(key);        
              if (data == null) continue;

              var shapeA = data.si;
              var shapeB = data.sj;
                      
              this.tm.set(shapeA, shapeB, false);
              if (this.oldTriggerDic.del(shapeA.id, shapeB.id)) i--;

              cc_trigger.event = 'onTriggerExit';
              cc_trigger.selfShape = shapeA;
              cc_trigger.otherShape = shapeB;
              cc_trigger.selfBody = shapeA.body;
              cc_trigger.otherBody = shapeB.body;
              shapeA.dispatchEvent(cc_trigger);

              cc_trigger.selfShape = shapeB;
              cc_trigger.otherShape = shapeA;
              cc_trigger.selfBody = shapeB.body;
              cc_trigger.otherBody = shapeA.body;
              shapeB.dispatchEvent(cc_trigger);
          }

          this.triggerDic.reset();
      };

      World.prototype.emitCollisionEvents = function () {
          if (this.substeps == 0)
              return;

          var contacts = this.contacts;
          var i = this.contacts.length;
          while (i--) {
              // Current contact
              var c = contacts[i];
              // Get current collision indeces
              var si = c.si;
              var sj = c.sj;
              var item = this.contactsDic.get(si.id, sj.id);
              if (item == null) {
                  item = this.contactsDic.set(si.id, sj.id, []);
              }
              item.push(c);
          }

          var key;
          var data;
          // is collision enter or stay
          var i = this.contactsDic.getLength();
          while (i--) {
              key = this.contactsDic.getKeyByIndex(i);
              data = this.contactsDic.getDataByKey(key);

              if (data == null)
                  continue;

              var si = data[0].si;
              var sj = data[0].sj;
              var bi = si.body;
              var bj = sj.body;

              // Now we know that i and j are in contact. Set collision matrix state		
              if (this.cm.get(bi, bj)) {
                  // collision stay
                  cc_collide.event = 'onCollisionStay';

              } else {
                  this.cm.set(bi, bj, true);
                  // collision enter
                  cc_collide.event = 'onCollisionEnter';
              }

              cc_collide.bi = bi;
              cc_collide.contact = data[0];

              cc_collide.contacts = data;

              cc_collide.body = bj;
              cc_collide.selfShape = si;
              cc_collide.otherShape = sj;
              bi.dispatchEvent(cc_collide);

              cc_collide.body = bi;
              cc_collide.selfShape = sj;
              cc_collide.otherShape = si;
              bj.dispatchEvent(cc_collide);
          }
          var oldcontacts = cc_oldContacts;
          for (i = oldcontacts.length; i--;) {
              // Current contact
              var c = oldcontacts[i];

              // Get current collision indeces
              var si = c.si;
              var sj = c.sj;
              if (this.oldContactsDic.get(si.id, sj.id) == null) {
                  this.oldContactsDic.set(si.id, sj.id, c);
              }
          }

          // is collision exit
          i = this.oldContactsDic.getLength();
          while (i--) {
              key = this.oldContactsDic.getKeyByIndex(i);
              if (this.contactsDic.getDataByKey(key) == null) {
                  data = this.oldContactsDic.getDataByKey(key);
                  var si = data.si;
                  var sj = data.sj;
                  var bi = si.body;
                  var bj = sj.body;
                  if (this.cm.get(bi, bj)) {
                      if (!bi.isSleeping() || !bj.isSleeping()) {
                          this.cm.set(bi, bj, false);

                          cc_collide.bi = bi;    
                          cc_collide.contact = data;
                  
                          // collision exit
                          cc_collide.event = 'onCollisionExit';
                          cc_collide.body = bj;
                          cc_collide.selfShape = si;
                          cc_collide.otherShape = sj;
                          cc_collide.contacts.length = 0;
                          cc_collide.contacts.push(data);
                          bi.dispatchEvent(cc_collide);

                          cc_collide.body = bi;
                          cc_collide.selfShape = sj;
                          cc_collide.otherShape = si;
                          bj.dispatchEvent(cc_collide);
                      }
                  }
              }
          }

          this.contactsDic.reset();
          this.oldContactsDic.reset();
          World_step_oldContacts = cc_oldContacts;  
          cc_oldContacts = this.contacts.slice();
          this.contacts.length = 0;
      };

      },{"../collision/AABB":3,"../collision/ArrayCollisionMatrix":4,"../collision/NaiveBroadphase":7,"../collision/ObjectCollisionMatrix":8,"../collision/OverlapKeeper":9,"../collision/Ray":10,"../collision/RaycastResult":11,"../equations/ContactEquation":20,"../equations/FrictionEquation":22,"../material/ContactMaterial":25,"../material/Material":26,"../math/Quaternion":29,"../math/Vec3":31,"../objects/Body":32,"../shapes/Shape":44,"../solver/GSSolver":47,"../utils/EventTarget":50,"../utils/TupleDictionary":53,"./Narrowphase":56}]},{},[2])
      (2)
      });
      });

      const v3_cannon0$1 = new cannon.Vec3();
      const v3_cannon1 = new cannon.Vec3();
      class CannonRigidBody {
        constructor() {
          this._rigidBody = void 0;
          this._sharedBody = void 0;
          this._isEnabled = false;
        }
        get isAwake() {
          return this.impl.isAwake();
        }
        get isSleepy() {
          return this.impl.isSleepy();
        }
        get isSleeping() {
          return this.impl.isSleeping();
        }
        setAllowSleep(v) {
          if (this.impl.type !== cannon.Body.DYNAMIC) return;
          this.impl.allowSleep = v;
          this._wakeUpIfSleep();
        }
        setMass(value) {
          if (this.impl.type !== cannon.Body.DYNAMIC) return;
          this.impl.mass = value;
          this.impl.updateMassProperties();
          this._wakeUpIfSleep();
        }
        setType(v) {
          switch (v) {
            case ERigidBodyType.DYNAMIC:
              this.impl.type = cannon.Body.DYNAMIC;
              this.impl.allowSleep = this._rigidBody.allowSleep;
              this.setMass(this._rigidBody.mass);
              break;
            case ERigidBodyType.KINEMATIC:
              this.impl.type = cannon.Body.KINEMATIC;
              this.impl.mass = 0;
              this.impl.allowSleep = false;
              this.impl.sleepState = cannon.Body.AWAKE;
              this.impl.updateMassProperties();
              break;
            case ERigidBodyType.STATIC:
            default:
              this.impl.type = cannon.Body.STATIC;
              this.impl.mass = 0;
              this.impl.allowSleep = true;
              this.impl.updateMassProperties();
              this.clearState();
              break;
          }
        }
        setLinearDamping(value) {
          this.impl.linearDamping = value;
        }
        setAngularDamping(value) {
          this.impl.angularDamping = value;
        }
        useGravity(value) {
          this.impl.useGravity = value;
          this._wakeUpIfSleep();
        }
        useCCD(value) {
          this.impl.ccdSpeedThreshold = value ? 0.01 : -1;
        }
        isUsingCCD() {
          return this.impl.ccdSpeedThreshold !== -1;
        }
        setLinearFactor(value) {
          Vec3.copy(this.impl.linearFactor, value);
          this._wakeUpIfSleep();
        }
        setAngularFactor(value) {
          Vec3.copy(this.impl.angularFactor, value);
          const fixR = Vec3.equals(this.impl.angularFactor, Vec3.ZERO);
          if (fixR !== this.impl.fixedRotation) {
            this.impl.fixedRotation = fixR;
            this.impl.updateMassProperties();
          }
          this._wakeUpIfSleep();
        }
        get impl() {
          return this._sharedBody.body;
        }
        get rigidBody() {
          return this._rigidBody;
        }
        get sharedBody() {
          return this._sharedBody;
        }
        get isEnabled() {
          return this._isEnabled;
        }
        initialize(com) {
          this._rigidBody = com;
          this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._rigidBody.node, this);
          this._sharedBody.reference = true;
          this._sharedBody.wrappedBody = this;
        }
        onLoad() {}
        onEnable() {
          this._isEnabled = true;
          this.setType(this._rigidBody.type);
          this.setMass(this._rigidBody.mass);
          this.setAllowSleep(this._rigidBody.allowSleep);
          this.setLinearDamping(this._rigidBody.linearDamping);
          this.setAngularDamping(this._rigidBody.angularDamping);
          this.useGravity(this._rigidBody.useGravity);
          this.setLinearFactor(this._rigidBody.linearFactor);
          this.setAngularFactor(this._rigidBody.angularFactor);
          this._sharedBody.enabled = true;
        }
        onDisable() {
          this._isEnabled = false;
          this._sharedBody.enabled = false;
        }
        onDestroy() {
          this._sharedBody.reference = false;
          this._rigidBody = null;
          this._sharedBody = null;
        }
        clearVelocity() {
          this.impl.velocity.setZero();
          this.impl.angularVelocity.setZero();
        }
        clearForces() {
          this.impl.force.setZero();
          this.impl.torque.setZero();
        }
        clearState() {
          this.clearVelocity();
          this.clearForces();
        }
        wakeUp() {
          return this.impl.wakeUp();
        }
        sleep() {
          return this.impl.sleep();
        }
        setSleepThreshold(v) {
          this.impl.sleepSpeedLimit = v;
          this._wakeUpIfSleep();
        }
        getSleepThreshold() {
          return this.impl.sleepSpeedLimit;
        }
        getLinearVelocity(out) {
          Vec3.copy(out, this.impl.velocity);
          return out;
        }
        setLinearVelocity(value) {
          this._wakeUpIfSleep();
          Vec3.copy(this.impl.velocity, value);
        }
        getAngularVelocity(out) {
          Vec3.copy(out, this.impl.angularVelocity);
          return out;
        }
        setAngularVelocity(value) {
          this._wakeUpIfSleep();
          Vec3.copy(this.impl.angularVelocity, value);
        }
        applyForce(force, worldPoint) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          if (worldPoint == null) worldPoint = Vec3.ZERO;
          this.impl.applyForce(Vec3.copy(v3_cannon0$1, force), Vec3.copy(v3_cannon1, worldPoint));
        }
        applyImpulse(impulse, worldPoint) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          if (worldPoint == null) worldPoint = Vec3.ZERO;
          this.impl.applyImpulse(Vec3.copy(v3_cannon0$1, impulse), Vec3.copy(v3_cannon1, worldPoint));
        }
        applyLocalForce(force, localPoint) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          if (localPoint == null) localPoint = Vec3.ZERO;
          this.impl.applyLocalForce(Vec3.copy(v3_cannon0$1, force), Vec3.copy(v3_cannon1, localPoint));
        }
        applyLocalImpulse(impulse, localPoint) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          if (localPoint == null) localPoint = Vec3.ZERO;
          this.impl.applyLocalImpulse(Vec3.copy(v3_cannon0$1, impulse), Vec3.copy(v3_cannon1, localPoint));
        }
        applyTorque(torque) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          Vec3.add(this.impl.torque, this.impl.torque, torque);
        }
        applyLocalTorque(torque) {
          this._sharedBody.syncSceneToPhysics();
          this._wakeUpIfSleep();
          Vec3.copy(v3_cannon0$1, torque);
          this.impl.vectorToWorldFrame(v3_cannon0$1, v3_cannon0$1);
          Vec3.add(this.impl.torque, this.impl.torque, v3_cannon0$1);
        }
        getGroup() {
          return this.impl.collisionFilterGroup;
        }
        setGroup(v) {
          this.impl.collisionFilterGroup = v;
          this._wakeUpIfSleep();
        }
        addGroup(v) {
          this.impl.collisionFilterGroup |= v;
          this._wakeUpIfSleep();
        }
        removeGroup(v) {
          this.impl.collisionFilterGroup &= ~v;
          this._wakeUpIfSleep();
        }
        getMask() {
          return this.impl.collisionFilterMask;
        }
        setMask(v) {
          this.impl.collisionFilterMask = v;
          this._wakeUpIfSleep();
        }
        addMask(v) {
          this.impl.collisionFilterMask |= v;
          this._wakeUpIfSleep();
        }
        removeMask(v) {
          this.impl.collisionFilterMask &= ~v;
          this._wakeUpIfSleep();
        }
        _wakeUpIfSleep() {
          if (!this.impl.isAwake()) this.impl.wakeUp();
        }
      }

      function toCannonRaycastOptions(out, options) {
        out.checkCollisionResponse = !options.queryTrigger;
        out.collisionFilterGroup = -1;
        out.collisionFilterMask = options.mask;
      }
      function fillRaycastResult(result, cannonResult) {
        result._assign(cannonResult.hitPointWorld, cannonResult.distance, getWrap(cannonResult.shape).collider, cannonResult.hitNormalWorld);
      }
      function commitShapeUpdates(body) {
        body.aabbNeedsUpdate = true;
        body.updateMassProperties();
        body.updateBoundingRadius();
      }

      const TriggerEventObject = {
        type: 'onTriggerEnter',
        selfCollider: null,
        otherCollider: null,
        impl: null
      };
      const cannonQuat_0 = new cannon.Quaternion();
      const cannonVec3_0 = new cannon.Vec3();
      const cannonVec3_1 = new cannon.Vec3();
      class CannonShape {
        constructor() {
          this._collider = void 0;
          this._shape = void 0;
          this._offset = new cannon.Vec3();
          this._orient = new cannon.Quaternion();
          this._index = -1;
          this._sharedBody = void 0;
          this.onTriggerListener = this._onTrigger.bind(this);
          this._isBinding = false;
        }
        updateEventListener() {}
        get impl() {
          return this._shape;
        }
        get collider() {
          return this._collider;
        }
        get attachedRigidBody() {
          if (this._sharedBody.wrappedBody) {
            return this._sharedBody.wrappedBody.rigidBody;
          }
          return null;
        }
        get sharedBody() {
          return this._sharedBody;
        }
        setMaterial(mat) {
          const mat1 = mat == null ? PhysicsSystem.instance.defaultMaterial : mat;
          if (CannonShape.idToMaterial[mat1.id] == null) {
            CannonShape.idToMaterial[mat1.id] = new cannon.Material(mat1.id);
          }
          this._shape.material = CannonShape.idToMaterial[mat1.id];
          const smat = this._shape.material;
          smat.friction = mat1.friction;
          smat.restitution = mat1.restitution;
          const coef = cannon.CC_CONFIG.correctInelastic;
          smat.correctInelastic = smat.restitution === 0 ? coef : 0;
        }
        setAsTrigger(v) {
          this._shape.collisionResponse = !v;
          if (this._index >= 0) {
            this._body.updateHasTrigger();
          }
        }
        setCenter(v) {
          this._setCenter(v);
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        }
        setAttachedBody(v) {
          if (v) {
            if (this._sharedBody) {
              if (this._sharedBody.wrappedBody === v.body) return;
              this._sharedBody.reference = false;
            }
            this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(v.node);
            this._sharedBody.reference = true;
          } else {
            if (this._sharedBody) {
              this._sharedBody.reference = false;
            }
            this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
            this._sharedBody.reference = true;
          }
        }
        getAABB(v) {
          Quat.copy(cannonQuat_0, this._collider.node.worldRotation);
          this._shape.calculateWorldAABB(cannon.Vec3.ZERO, cannonQuat_0, cannonVec3_0, cannonVec3_1);
          Vec3.subtract(v.halfExtents, cannonVec3_1, cannonVec3_0);
          Vec3.multiplyScalar(v.halfExtents, v.halfExtents, 0.5);
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        }
        getBoundingSphere(v) {
          v.radius = this._shape.boundingSphereRadius;
          Vec3.add(v.center, this._collider.node.worldPosition, this._collider.center);
        }
        get _body() {
          return this._sharedBody.body;
        }
        initialize(comp) {
          this._collider = comp;
          this._isBinding = true;
          this._sharedBody = PhysicsSystem.instance.physicsWorld.getSharedBody(this._collider.node);
          this._sharedBody.reference = true;
          this.onComponentSet();
          setWrap(this._shape, this);
          this._shape.addEventListener('cc-trigger', this.onTriggerListener);
        }
        onComponentSet() {}
        onLoad() {
          this.setMaterial(this._collider.sharedMaterial);
          this.setCenter(this._collider.center);
          this.setAsTrigger(this._collider.isTrigger);
        }
        onEnable() {
          this._sharedBody.addShape(this);
          this._sharedBody.enabled = true;
        }
        onDisable() {
          this._sharedBody.removeShape(this);
          this._sharedBody.enabled = false;
        }
        onDestroy() {
          this._sharedBody.reference = false;
          this._shape.removeEventListener('cc-trigger', this.onTriggerListener);
          delete cannon.World.idToShapeMap[this._shape.id];
          this._sharedBody = null;
          setWrap(this._shape, null);
          this._offset = null;
          this._orient = null;
          this._shape = null;
          this._collider = null;
          this.onTriggerListener = null;
        }
        getGroup() {
          return this._body.collisionFilterGroup;
        }
        setGroup(v) {
          this._body.collisionFilterGroup = v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        addGroup(v) {
          this._body.collisionFilterGroup |= v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        removeGroup(v) {
          this._body.collisionFilterGroup &= ~v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        getMask() {
          return this._body.collisionFilterMask;
        }
        setMask(v) {
          this._body.collisionFilterMask = v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        addMask(v) {
          this._body.collisionFilterMask |= v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        removeMask(v) {
          this._body.collisionFilterMask &= ~v;
          if (!this._body.isAwake()) this._body.wakeUp();
        }
        setScale(scale) {
          this._setCenter(this._collider.center);
        }
        setIndex(index) {
          this._index = index;
        }
        setOffsetAndOrient(offset, orient) {
          Vec3.copy(offset, this._offset);
          Quat.copy(orient, this._orient);
          this._offset = offset;
          this._orient = orient;
        }
        _setCenter(v) {
          const lpos = this._offset;
          Vec3.subtract(lpos, this._sharedBody.node.worldPosition, this._collider.node.worldPosition);
          Vec3.add(lpos, lpos, v);
          Vec3.multiply(lpos, lpos, this._collider.node.worldScale);
        }
        _onTrigger(event) {
          TriggerEventObject.type = event.event;
          const self = getWrap(event.selfShape);
          const other = getWrap(event.otherShape);
          if (self && self.collider.needTriggerEvent) {
            TriggerEventObject.selfCollider = self.collider;
            TriggerEventObject.otherCollider = other ? other.collider : null;
            TriggerEventObject.impl = event;
            this._collider.emit(TriggerEventObject.type, TriggerEventObject);
          }
        }
      }
      CannonShape.idToMaterial = {};

      const quat = new Quat();
      class CannonContactEquation {
        get isBodyA() {
          if (this.impl) {
            const si = this.event.selfCollider.shape.impl;
            const bj = this.impl.bj;
            return si.body.id === bj.id;
          }
          return false;
        }
        constructor(event) {
          this.impl = null;
          this.event = void 0;
          this.event = event;
        }
        getLocalPointOnA(out) {
          if (this.impl) Vec3.copy(out, this.impl.rj);
        }
        getLocalPointOnB(out) {
          if (this.impl) Vec3.copy(out, this.impl.ri);
        }
        getWorldPointOnA(out) {
          if (this.impl) Vec3.add(out, this.impl.rj, this.impl.bj.position);
        }
        getWorldPointOnB(out) {
          if (this.impl) Vec3.add(out, this.impl.ri, this.impl.bi.position);
        }
        getLocalNormalOnA(out) {
          if (this.impl) {
            this.getWorldNormalOnA(out);
            Quat.conjugate(quat, this.impl.bi.quaternion);
            Vec3.transformQuat(out, out, quat);
          }
        }
        getLocalNormalOnB(out) {
          if (this.impl) {
            Quat.conjugate(quat, this.impl.bj.quaternion);
            Vec3.transformQuat(out, this.impl.ni, quat);
          }
        }
        getWorldNormalOnA(out) {
          if (this.impl) {
            this.getWorldNormalOnB(out);
            if (!this.isBodyA) Vec3.negate(out, out);
          }
        }
        getWorldNormalOnB(out) {
          if (this.impl) Vec3.copy(out, this.impl.ni);
        }
      }

      const v3_0$3 = new Vec3();
      const quat_0$1 = new Quat();
      const contactsPool = [];
      const CollisionEventObject = {
        type: 'onCollisionEnter',
        selfCollider: null,
        otherCollider: null,
        contacts: [],
        impl: null
      };
      class CannonSharedBody {
        static getSharedBody(node, wrappedWorld, wrappedBody) {
          const key = node.uuid;
          let newSB;
          if (CannonSharedBody.sharedBodesMap.has(key)) {
            newSB = CannonSharedBody.sharedBodesMap.get(key);
          } else {
            newSB = new CannonSharedBody(node, wrappedWorld);
            const g = PhysicsGroup.DEFAULT;
            const m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.body.collisionFilterGroup = g;
            newSB.body.collisionFilterMask = m;
            newSB.body.position = new cannon.Vec3(node.worldPosition.x, node.worldPosition.y, node.worldPosition.z);
            newSB.body.quaternion = new cannon.Quaternion(node.worldRotation.x, node.worldRotation.y, node.worldRotation.z, node.worldRotation.w);
            CannonSharedBody.sharedBodesMap.set(node.uuid, newSB);
          }
          if (wrappedBody) {
            newSB.wrappedBody = wrappedBody;
            const g = wrappedBody.rigidBody.group;
            const m = PhysicsSystem.instance.collisionMatrix[g];
            newSB.body.collisionFilterGroup = g;
            newSB.body.collisionFilterMask = m;
            newSB.body.position = new cannon.Vec3(node.worldPosition.x, node.worldPosition.y, node.worldPosition.z);
            newSB.body.quaternion = new cannon.Quaternion(node.worldRotation.x, node.worldRotation.y, node.worldRotation.z, node.worldRotation.w);
          }
          return newSB;
        }
        set enabled(v) {
          if (v) {
            if (this.index < 0) {
              this.index = this.wrappedWorld.bodies.length;
              this.wrappedWorld.addSharedBody(this);
              this.syncInitial();
            }
          } else if (this.index >= 0) {
            const isRemove = this.wrappedShapes.length === 0 && this.wrappedBody == null || this.wrappedShapes.length === 0 && this.wrappedBody != null && !this.wrappedBody.isEnabled;
            if (isRemove) {
              this.body.sleep();
              this.index = -1;
              this.wrappedWorld.removeSharedBody(this);
            }
          }
        }
        set reference(v) {
          v ? this.ref++ : this.ref--;
          if (this.ref === 0) {
            this.destroy();
          }
        }
        constructor(node, wrappedWorld) {
          this.node = void 0;
          this.wrappedWorld = void 0;
          this.body = void 0;
          this.wrappedShapes = [];
          this.wrappedJoints0 = [];
          this.wrappedJoints1 = [];
          this.wrappedBody = null;
          this.index = -1;
          this.ref = 0;
          this.onCollidedListener = this.onCollided.bind(this);
          this.wrappedWorld = wrappedWorld;
          this.node = node;
          this.body = new cannon.Body();
          setWrap(this.body, this);
          this.body.collisionFilterGroup = PhysicsSystem.PhysicsGroup.DEFAULT;
          this.body.sleepSpeedLimit = PhysicsSystem.instance.sleepThreshold;
          this.body.material = this.wrappedWorld.impl.defaultMaterial;
          this.body.addEventListener('cc-collide', this.onCollidedListener);
        }
        addShape(v) {
          const index = this.wrappedShapes.indexOf(v);
          if (index < 0) {
            const index = this.body.shapes.length;
            this.body.addShape(v.impl);
            this.wrappedShapes.push(v);
            v.setIndex(index);
            const offset = this.body.shapeOffsets[index];
            const orient = this.body.shapeOrientations[index];
            v.setOffsetAndOrient(offset, orient);
            if (this.body.isSleeping()) this.body.wakeUp();
          }
        }
        removeShape(v) {
          const index = this.wrappedShapes.indexOf(v);
          if (index >= 0) {
            fastRemoveAt(this.wrappedShapes, index);
            this.body.removeShape(v.impl);
            v.setIndex(-1);
            if (this.body.isSleeping()) this.body.wakeUp();
          }
        }
        addJoint(v, type) {
          if (type) {
            const i = this.wrappedJoints1.indexOf(v);
            if (i < 0) this.wrappedJoints1.push(v);
          } else {
            const i = this.wrappedJoints0.indexOf(v);
            if (i < 0) this.wrappedJoints0.push(v);
          }
        }
        removeJoint(v, type) {
          if (type) {
            const i = this.wrappedJoints1.indexOf(v);
            if (i >= 0) fastRemoveAt(this.wrappedJoints1, i);
          } else {
            const i = this.wrappedJoints0.indexOf(v);
            if (i >= 0) fastRemoveAt(this.wrappedJoints0, i);
          }
        }
        syncSceneToPhysics() {
          const node = this.node;
          const body = this.body;
          if (node.hasChangedFlags) {
            if (body.isSleeping()) body.wakeUp();
            Vec3.copy(body.position, node.worldPosition);
            Quat.copy(body.quaternion, node.worldRotation);
            body.aabbNeedsUpdate = true;
            if (node.hasChangedFlags & TransformBit.SCALE) this.syncScale();
          }
        }
        syncPhysicsToScene() {
          const n = this.node;
          const b = this.body;
          if (b.type === ERigidBodyType.DYNAMIC) {
            if (!b.isSleeping()) {
              Vec3.copy(v3_0$3, b.position);
              Quat.copy(quat_0$1, b.quaternion);
              n.worldPosition = v3_0$3;
              n.worldRotation = quat_0$1;
            }
          }
        }
        syncInitial() {
          const n = this.node;
          const b = this.body;
          Vec3.copy(b.position, n.worldPosition);
          Quat.copy(b.quaternion, n.worldRotation);
          Vec3.copy(b.previousPosition, n.worldPosition);
          Quat.copy(b.previousQuaternion, n.worldRotation);
          b.aabbNeedsUpdate = true;
          this.syncScale();
          if (b.isSleeping()) b.wakeUp();
        }
        syncScale() {
          for (let i = 0; i < this.wrappedShapes.length; i++) {
            this.wrappedShapes[i].setScale(this.node.worldScale);
          }
          for (let i = 0; i < this.wrappedJoints0.length; i++) {
            this.wrappedJoints0[i].updateScale0();
          }
          for (let i = 0; i < this.wrappedJoints1.length; i++) {
            this.wrappedJoints1[i].updateScale1();
          }
          commitShapeUpdates(this.body);
        }
        destroy() {
          setWrap(this.body, null);
          this.body.removeEventListener('cc-collide', this.onCollidedListener);
          CannonSharedBody.sharedBodesMap.delete(this.node.uuid);
          delete cannon.World.idToBodyMap[this.body.id];
          this.node = null;
          this.wrappedWorld = null;
          this.body = null;
          this.wrappedShapes = null;
          this.wrappedJoints0 = null;
          this.wrappedJoints1 = null;
          this.onCollidedListener = null;
        }
        onCollided(event) {
          CollisionEventObject.type = event.event;
          const self = getWrap(event.selfShape);
          const other = getWrap(event.otherShape);
          if (self && self.collider.needCollisionEvent) {
            contactsPool.push.apply(contactsPool, CollisionEventObject.contacts);
            CollisionEventObject.contacts.length = 0;
            CollisionEventObject.impl = event;
            CollisionEventObject.selfCollider = self.collider;
            CollisionEventObject.otherCollider = other ? other.collider : null;
            let i = 0;
            if (CollisionEventObject.type !== 'onCollisionExit') {
              for (i = 0; i < event.contacts.length; i++) {
                const cq = event.contacts[i];
                if (contactsPool.length > 0) {
                  const c = contactsPool.pop();
                  c.impl = cq;
                  CollisionEventObject.contacts.push(c);
                } else {
                  const c = new CannonContactEquation(CollisionEventObject);
                  c.impl = cq;
                  CollisionEventObject.contacts.push(c);
                }
              }
            }
            for (i = 0; i < this.wrappedShapes.length; i++) {
              const shape = this.wrappedShapes[i];
              shape.collider.emit(CollisionEventObject.type, CollisionEventObject);
            }
          }
        }
      }
      CannonSharedBody.sharedBodesMap = new Map();

      const aabbTemp = new AABB();
      const AABB_LINE_COUNT = 12;
      class CannonWorld {
        get impl() {
          return this._world;
        }
        setDefaultMaterial(mat) {
          this._world.defaultMaterial.friction = mat.friction;
          this._world.defaultMaterial.restitution = mat.restitution;
          if (CannonShape.idToMaterial[mat.id] != null) {
            CannonShape.idToMaterial[mat.id] = this._world.defaultMaterial;
          }
        }
        setAllowSleep(v) {
          this._world.allowSleep = v;
        }
        setGravity(gravity) {
          Vec3.copy(this._world.gravity, gravity);
        }
        constructor() {
          this.bodies = [];
          this.constraints = [];
          this._world = void 0;
          this._debugLineCount = 0;
          this._MAX_DEBUG_LINE_COUNT = 16384;
          this._debugDrawFlags = EPhysicsDrawFlags.NONE;
          this._debugConstraintSize = 0.3;
          this._aabbColor = new Color(0, 255, 255, 255);
          this._wireframeColor = new Color(255, 0, 255, 255);
          this._world = new cannon.World();
          this._world.broadphase = new cannon.NaiveBroadphase();
          this._world.solver.iterations = 10;
          this._world.solver.tolerance = 0.0001;
          this._world.defaultContactMaterial.contactEquationStiffness = 1000000;
          this._world.defaultContactMaterial.frictionEquationStiffness = 1000000;
          this._world.defaultContactMaterial.contactEquationRelaxation = 3;
          this._world.defaultContactMaterial.frictionEquationRelaxation = 3;
        }
        sweepBox(worldRay, halfExtent, orientation, options, pool, results) {
          warnID(9641);
          return false;
        }
        sweepBoxClosest(worldRay, halfExtent, orientation, options, result) {
          warnID(9641);
          return false;
        }
        sweepSphere(worldRay, radius, options, pool, results) {
          warnID(9641);
          return false;
        }
        sweepSphereClosest(worldRay, radius, options, result) {
          warnID(9641);
          return false;
        }
        sweepCapsule(worldRay, radius, height, orientation, options, pool, results) {
          warnID(9641);
          return false;
        }
        sweepCapsuleClosest(worldRay, radius, height, orientation, options, result) {
          warnID(9641);
          return false;
        }
        destroy() {
          if (this.constraints.length || this.bodies.length) error('You should destroy all physics component first.');
          this._world.broadphase = null;
          this._world = null;
        }
        emitEvents() {
          this._world.emitTriggeredEvents();
          this._world.emitCollisionEvents();
        }
        syncSceneToPhysics() {
          for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].syncSceneToPhysics();
          }
        }
        syncAfterEvents() {
          this.syncSceneToPhysics();
        }
        step(deltaTime, timeSinceLastCalled, maxSubStep) {
          if (this.bodies.length === 0) return;
          this._world.step(deltaTime, timeSinceLastCalled, maxSubStep);
          for (let i = 0; i < this.bodies.length; i++) {
            this.bodies[i].syncPhysicsToScene();
          }
          this._debugDraw();
        }
        raycastClosest(worldRay, options, result) {
          setupFromAndTo(worldRay, options.maxDistance);
          toCannonRaycastOptions(raycastOpt, options);
          const hit = this._world.raycastClosest(from, to, raycastOpt, CannonWorld.rayResult);
          if (hit) {
            fillRaycastResult(result, CannonWorld.rayResult);
          }
          return hit;
        }
        raycast(worldRay, options, pool, results) {
          setupFromAndTo(worldRay, options.maxDistance);
          toCannonRaycastOptions(raycastOpt, options);
          const hit = this._world.raycastAll(from, to, raycastOpt, result => {
            const r = pool.add();
            fillRaycastResult(r, result);
            results.push(r);
          });
          return hit;
        }
        getSharedBody(node, wrappedBody) {
          return CannonSharedBody.getSharedBody(node, this, wrappedBody);
        }
        addSharedBody(sharedBody) {
          const i = this.bodies.indexOf(sharedBody);
          if (i < 0) {
            this.bodies.push(sharedBody);
            this._world.addBody(sharedBody.body);
          }
        }
        removeSharedBody(sharedBody) {
          const i = this.bodies.indexOf(sharedBody);
          if (i >= 0) {
            fastRemoveAt(this.bodies, i);
            this._world.remove(sharedBody.body);
          }
        }
        addConstraint(constraint) {
          const i = this.constraints.indexOf(constraint);
          if (i < 0) {
            this.constraints.push(constraint);
            this._world.addConstraint(constraint.impl);
          }
        }
        removeConstraint(constraint) {
          const i = this.constraints.indexOf(constraint);
          if (i >= 0) {
            fastRemoveAt(this.constraints, i);
            this._world.removeConstraint(constraint.impl);
          }
        }
        get debugDrawFlags() {
          return this._debugDrawFlags;
        }
        set debugDrawFlags(v) {
          this._debugDrawFlags = v;
        }
        get debugDrawConstraintSize() {
          return this._debugConstraintSize;
        }
        set debugDrawConstraintSize(v) {
          this._debugConstraintSize = v;
        }
        _getDebugRenderer() {
          var _mainWindow;
          const cameras = (_mainWindow = director.root.mainWindow) === null || _mainWindow === void 0 ? void 0 : _mainWindow.cameras;
          if (!cameras) return null;
          if (cameras.length === 0) return null;
          if (!cameras[0]) return null;
          cameras[0].initGeometryRenderer();
          return cameras[0].geometryRenderer;
        }
        _debugDraw() {
          const debugRenderer = this._getDebugRenderer();
          if (!debugRenderer) return;
          this._debugLineCount = 0;
          if (this._debugDrawFlags & EPhysicsDrawFlags.AABB) {
            for (let i = 0; i < this.bodies.length; i++) {
              const body = this.bodies[i];
              for (let j = 0; j < body.wrappedShapes.length; j++) {
                const shape = body.wrappedShapes[j];
                if (this._debugLineCount + AABB_LINE_COUNT < this._MAX_DEBUG_LINE_COUNT) {
                  this._debugLineCount += AABB_LINE_COUNT;
                  shape.getAABB(aabbTemp);
                  debugRenderer.addBoundingBox(aabbTemp, this._aabbColor);
                }
              }
            }
          }
        }
      }
      CannonWorld.rayResult = new cannon.RaycastResult();
      const from = new cannon.Vec3();
      const to = new cannon.Vec3();
      function setupFromAndTo(worldRay, distance) {
        Vec3.copy(from, worldRay.o);
        worldRay.computeHit(to, distance);
      }
      const raycastOpt = {
        checkCollisionResponse: false,
        collisionFilterGroup: -1,
        collisionFilterMask: -1,
        skipBackfaces: true
      };

      class CannonBoxShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        constructor() {
          super();
          this.halfExtent = void 0;
          this.halfExtent = new cannon.Vec3(0.5, 0.5, 0.5);
          this._shape = new cannon.Box(this.halfExtent.clone());
        }
        updateSize() {
          Vec3.multiplyScalar(this.halfExtent, this.collider.size, 0.5);
          const ws = absolute(VEC3_0.set(this.collider.node.worldScale));
          const x = this.halfExtent.x * ws.x;
          const y = this.halfExtent.y * ws.y;
          const z = this.halfExtent.z * ws.z;
          const minVolumeSize = PhysicsSystem.instance.minVolumeSize;
          this.impl.halfExtents.x = clamp(x, minVolumeSize, Number.MAX_VALUE);
          this.impl.halfExtents.y = clamp(y, minVolumeSize, Number.MAX_VALUE);
          this.impl.halfExtents.z = clamp(z, minVolumeSize, Number.MAX_VALUE);
          this.impl.updateConvexPolyhedronRepresentation();
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        }
        onLoad() {
          super.onLoad();
          this.updateSize();
        }
        setScale(scale) {
          super.setScale(scale);
          this.updateSize();
        }
      }

      class CannonSphereShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        updateRadius() {
          const max = Math.abs(absMaxComponent(this.collider.node.worldScale));
          this.impl.radius = clamp(this.collider.radius * Math.abs(max), PhysicsSystem.instance.minVolumeSize, Number.MAX_VALUE);
          this.impl.updateBoundingSphereRadius();
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        }
        constructor(radius = 0.5) {
          super();
          this._shape = new cannon.Sphere(radius);
        }
        onLoad() {
          super.onLoad();
          this.updateRadius();
        }
        setScale(scale) {
          super.setScale(scale);
          this.updateRadius();
        }
      }

      const v3_cannon0 = new cannon.Vec3();
      class CannonTrimeshShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        setMesh(v) {
          if (!this._isBinding) return;
          const mesh = v;
          if (this._shape != null) {
            if (mesh && mesh.renderingSubMeshes.length > 0) {
              const vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
              const indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
              if (indices instanceof Uint8Array) {
                this.updateProperties(vertices, new Uint16Array(indices));
              } else if (indices instanceof Uint16Array) {
                this.updateProperties(vertices, indices);
              } else if (indices instanceof Uint32Array) {
                this.updateProperties(vertices, new Uint16Array(indices));
              } else {
                this.updateProperties(vertices, new Uint16Array());
              }
            } else {
              this.updateProperties(new Float32Array(), new Uint16Array());
            }
          } else if (mesh && mesh.renderingSubMeshes.length > 0) {
            const vertices = mesh.renderingSubMeshes[0].geometricInfo.positions;
            const indices = mesh.renderingSubMeshes[0].geometricInfo.indices;
            this._shape = new cannon.Trimesh(vertices, indices);
          } else {
            this._shape = new cannon.Trimesh(new Float32Array(), new Uint16Array());
          }
        }
        onComponentSet() {
          this.setMesh(this.collider.mesh);
        }
        onLoad() {
          super.onLoad();
          this.setMesh(this.collider.mesh);
        }
        setScale(scale) {
          super.setScale(scale);
          Vec3.copy(v3_cannon0, scale);
          this.impl.setScale(v3_cannon0);
        }
        updateProperties(vertices, indices) {
          this.impl.vertices = new Float32Array(vertices);
          this.impl.indices = new Int16Array(indices);
          this.impl.normals = new Float32Array(indices.length);
          this.impl.aabb = new cannon.AABB();
          this.impl.edges = [];
          this.impl.tree = new cannon.Octree(new cannon.AABB());
          this.impl.updateEdges();
          this.impl.updateNormals();
          this.impl.updateAABB();
          this.impl.updateBoundingSphereRadius();
          this.impl.updateTree();
          this.impl.setScale(this.impl.scale);
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        }
      }

      class CannonCylinderShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        setRadius(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCylinder, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        setHeight(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCylinder, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        setDirection(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCylinder, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        constructor(radius = 0.5, height = 2, direction = EAxisDirection.Y_AXIS) {
          super();
          this._shape = new cannon.Cylinder(radius, radius, height, cannon.CC_CONFIG.numSegmentsCylinder, direction === EAxisDirection.Y_AXIS);
        }
        onLoad() {
          super.onLoad();
          this.setRadius(this.collider.radius);
        }
        setScale(scale) {
          super.setScale(scale);
          this.setRadius(this.collider.radius);
        }
        updateProperties(radius, height, numSegments, direction, scale) {
          let wh = height;
          let wr = radius;
          const cos = Math.cos;
          const sin = Math.sin;
          const abs = Math.abs;
          const max = Math.max;
          if (direction === 1) {
            wh = abs(scale.y) * height;
            wr = max(abs(scale.x), abs(scale.z)) * radius;
          } else if (direction === 2) {
            wh = abs(scale.z) * height;
            wr = max(abs(scale.x), abs(scale.y)) * radius;
          } else {
            wh = abs(scale.x) * height;
            wr = max(abs(scale.y), abs(scale.z)) * radius;
          }
          const N = numSegments;
          const hH = wh / 2;
          const vertices = [];
          const indices = [];
          const axes = [];
          const theta = Math.PI * 2 / N;
          if (direction === 1) {
            const bf = [1];
            const tf = [0];
            for (let i = 0; i < N; i++) {
              const x = wr * cos(theta * i);
              const z = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(x, hH, z));
              vertices.push(new cannon.Vec3(x, -hH, z));
              if (i < N - 1) {
                indices.push([2 * i + 2, 2 * i + 3, 2 * i + 1, 2 * i]);
                tf.push(2 * i + 2);
                bf.push(2 * i + 3);
              } else {
                indices.push([0, 1, 2 * i + 1, 2 * i]);
              }
              if (N % 2 === 1 || i < N / 2) {
                axes.push(new cannon.Vec3(cos(theta * (i + 0.5)), 0, sin(theta * (i + 0.5))));
              }
            }
            indices.push(bf);
            const temp = [];
            for (let i = 0; i < tf.length; i++) {
              temp.push(tf[tf.length - i - 1]);
            }
            indices.push(temp);
            axes.push(new cannon.Vec3(0, 1, 0));
          } else if (direction === 2) {
            const bf = [0];
            const tf = [1];
            for (let i = 0; i < N; i++) {
              const x = wr * cos(theta * i);
              const y = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(x, y, hH));
              vertices.push(new cannon.Vec3(x, y, -hH));
              if (i < N - 1) {
                indices.push([2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2]);
                bf.push(2 * i + 2);
                tf.push(2 * i + 3);
              } else {
                indices.push([2 * i, 2 * i + 1, 0, 1]);
              }
              if (N % 2 === 1 || i < N / 2) {
                axes.push(new cannon.Vec3(cos(theta * (i + 0.5)), sin(theta * (i + 0.5)), 0));
              }
            }
            indices.push(bf);
            const temp = [];
            for (let i = 0; i < tf.length; i++) {
              temp.push(tf[tf.length - i - 1]);
            }
            indices.push(temp);
            axes.push(new cannon.Vec3(0, 0, 1));
          } else {
            const bf = [0];
            const tf = [1];
            for (let i = 0; i < N; i++) {
              const y = wr * cos(theta * i);
              const z = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(hH, y, z));
              vertices.push(new cannon.Vec3(-hH, y, z));
              if (i < N - 1) {
                indices.push([2 * i, 2 * i + 1, 2 * i + 3, 2 * i + 2]);
                bf.push(2 * i + 2);
                tf.push(2 * i + 3);
              } else {
                indices.push([2 * i, 2 * i + 1, 0, 1]);
              }
              if (N % 2 === 1 || i < N / 2) {
                axes.push(new cannon.Vec3(0, cos(theta * (i + 0.5)), sin(theta * (i + 0.5))));
              }
            }
            indices.push(bf);
            const temp = [];
            for (let i = 0; i < tf.length; i++) {
              temp.push(tf[tf.length - i - 1]);
            }
            indices.push(temp);
            axes.push(new cannon.Vec3(1, 0, 0));
          }
          this.impl.vertices = vertices;
          this.impl.faces = indices;
          this.impl.uniqueAxes = axes;
          this.impl.worldVerticesNeedsUpdate = true;
          this.impl.worldFaceNormalsNeedsUpdate = true;
          this.impl.computeNormals();
          this.impl.computeEdges();
          this.impl.updateBoundingSphereRadius();
        }
      }

      const v3_0$2 = new Vec3();
      const v3_1 = new Vec3();
      class CannonConeShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        setRadius(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        setHeight(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        setDirection(v) {
          this.updateProperties(this.collider.radius, this.collider.height, cannon.CC_CONFIG.numSegmentsCone, this.collider.direction, this.collider.node.worldScale);
          if (this._index !== -1) commitShapeUpdates(this._body);
        }
        constructor(radius = 0.5, height = 1, direction = EAxisDirection.Y_AXIS) {
          super();
          this._shape = new cannon.Cylinder(0, radius, height, cannon.CC_CONFIG.numSegmentsCone, direction === EAxisDirection.Y_AXIS);
        }
        onLoad() {
          super.onLoad();
          this.setRadius(this.collider.radius);
        }
        setScale(scale) {
          super.setScale(scale);
          this.setRadius(this.collider.radius);
        }
        updateProperties(radius, height, numSegments, direction, scale) {
          let wh = height;
          let wr = radius;
          const cos = Math.cos;
          const sin = Math.sin;
          const abs = Math.abs;
          const max = Math.max;
          if (direction === 1) {
            wh = abs(scale.y) * height;
            wr = max(abs(scale.x), abs(scale.z)) * radius;
          } else if (direction === 2) {
            wh = abs(scale.z) * height;
            wr = max(abs(scale.x), abs(scale.y)) * radius;
          } else {
            wh = abs(scale.x) * height;
            wr = max(abs(scale.y), abs(scale.z)) * radius;
          }
          const N = numSegments;
          const hH = wh / 2;
          const vertices = [];
          const indices = [];
          const axes = [];
          const theta = Math.PI * 2 / N;
          if (direction === 1) {
            const bf = [];
            indices.push(bf);
            vertices.push(new cannon.Vec3(0, hH, 0));
            for (let i = 0; i < N; i++) {
              const x = wr * cos(theta * i);
              const z = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(x, -hH, z));
            }
            for (let i = 0; i < N; i++) {
              if (i !== 0) bf.push(i);
              let face;
              if (i < N - 1) {
                face = [0, i + 2, i + 1];
              } else {
                face = [0, 1, i + 1];
              }
              indices.push(face);
              Vec3.subtract(v3_0$2, vertices[0], vertices[face[1]]);
              Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
              Vec3.cross(v3_0$2, v3_1, v3_0$2);
              v3_0$2.normalize();
              axes.push(new cannon.Vec3(v3_0$2.x, v3_0$2.y, v3_0$2.z));
            }
            axes.push(new cannon.Vec3(0, -1, 0));
          } else if (direction === 2) {
            const bf = [];
            indices.push(bf);
            vertices.push(new cannon.Vec3(0, 0, hH));
            for (let i = 0; i < N; i++) {
              const x = wr * cos(theta * i);
              const y = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(x, y, -hH));
            }
            for (let i = 0; i < N; i++) {
              if (i !== 0) bf.push(N - i);
              let face;
              if (i < N - 1) {
                face = [0, i + 1, i + 2];
              } else {
                face = [0, i + 1, 1];
              }
              indices.push(face);
              Vec3.subtract(v3_0$2, vertices[0], vertices[face[1]]);
              Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
              Vec3.cross(v3_0$2, v3_0$2, v3_1);
              v3_0$2.normalize();
              axes.push(new cannon.Vec3(v3_0$2.x, v3_0$2.y, v3_0$2.z));
            }
            axes.push(new cannon.Vec3(0, 0, -1));
          } else {
            const bf = [];
            indices.push(bf);
            vertices.push(new cannon.Vec3(hH, 0, 0));
            for (let i = 0; i < N; i++) {
              const y = wr * cos(theta * i);
              const z = wr * sin(theta * i);
              vertices.push(new cannon.Vec3(-hH, y, z));
            }
            for (let i = 0; i < N; i++) {
              if (i !== 0) bf.push(N - i);
              let face;
              if (i < N - 1) {
                face = [0, i + 1, i + 2];
              } else {
                face = [0, i + 1, 1];
              }
              indices.push(face);
              Vec3.subtract(v3_0$2, vertices[0], vertices[face[1]]);
              Vec3.subtract(v3_1, vertices[face[2]], vertices[face[1]]);
              Vec3.cross(v3_0$2, v3_0$2, v3_1);
              v3_0$2.normalize();
              axes.push(new cannon.Vec3(v3_0$2.x, v3_0$2.y, v3_0$2.z));
            }
            axes.push(new cannon.Vec3(-1, 0, 0));
          }
          this.impl.vertices = vertices;
          this.impl.faces = indices;
          this.impl.uniqueAxes = axes;
          this.impl.worldVerticesNeedsUpdate = true;
          this.impl.worldFaceNormalsNeedsUpdate = true;
          this.impl.computeNormals();
          this.impl.computeEdges();
          this.impl.updateBoundingSphereRadius();
        }
      }

      const CANNON_AABB_LOCAL = new cannon.AABB();
      const CANNON_AABB = new cannon.AABB();
      const CANNON_TRANSFORM = new cannon.Transform();
      cannon.Heightfield.prototype.calculateWorldAABB = function (pos, quat, min, max) {
        const frame = CANNON_TRANSFORM;
        const result = CANNON_AABB;
        Vec3.copy(frame.position, pos);
        Quat.copy(frame.quaternion, quat);
        const s = this.elementSize;
        const data = this.data;
        CANNON_AABB_LOCAL.lowerBound.set(0, 0, this.minValue);
        CANNON_AABB_LOCAL.upperBound.set((data.length - 1) * s, (data[0].length - 1) * s, this.maxValue);
        CANNON_AABB_LOCAL.toWorldFrame(frame, result);
        min.copy(result.lowerBound);
        max.copy(result.upperBound);
      };
      class CannonTerrainShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        setTerrain(v) {
          if (v) {
            if (this._terrainID !== v._uuid) {
              const terrain = v;
              const sizeI = terrain.getVertexCountI();
              const sizeJ = terrain.getVertexCountJ();
              this._terrainID = terrain._uuid;
              this.data.length = sizeI - 1;
              for (let i = 0; i < sizeI; i++) {
                if (this.data[i] == null) this.data[i] = [];
                this.data[i].length = sizeJ - 1;
                for (let j = 0; j < sizeJ; j++) {
                  this.data[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
                }
              }
              this.options.elementSize = terrain.tileSize;
              this.updateProperties(this.data, this.options.elementSize);
            }
          } else if (this._terrainID !== '') {
            this._terrainID = '';
            this.data.length = 1;
            this.data[0] = this.data[0] || [];
            this.data[0].length = 0;
            this.options.elementSize = 0;
            this.updateProperties(this.data, this.options.elementSize);
          }
        }
        constructor() {
          super();
          this.data = void 0;
          this.options = void 0;
          this._terrainID = void 0;
          this.data = [[]];
          this.options = {
            elementSize: 0
          };
          this._terrainID = '';
        }
        onComponentSet() {
          const terrain = this.collider.terrain;
          if (terrain) {
            const sizeI = terrain.getVertexCountI();
            const sizeJ = terrain.getVertexCountJ();
            for (let i = 0; i < sizeI; i++) {
              if (this.data[i] == null) this.data[i] = [];
              for (let j = 0; j < sizeJ; j++) {
                this.data[i][j] = terrain.getHeight(i, sizeJ - 1 - j);
              }
            }
            this.options.elementSize = terrain.tileSize;
            this._terrainID = terrain._uuid;
          }
          this._shape = new cannon.Heightfield(this.data, this.options);
        }
        onLoad() {
          super.onLoad();
          this.setTerrain(this.collider.terrain);
        }
        updateProperties(data, elementSize) {
          const impl = this.impl;
          impl.data = data;
          impl.elementSize = elementSize;
          impl.updateMinValue();
          impl.updateMaxValue();
          impl.updateBoundingSphereRadius();
          impl.update();
          if (this._index >= 0) {
            commitShapeUpdates(this._body);
          }
        }
        _setCenter(v) {
          const terrain = this.collider.terrain;
          if (terrain) {
            Quat.fromEuler(this._orient, -90, 0, 0);
            const lpos = this._offset;
            Vec3.set(lpos, 0, 0, (terrain.getVertexCountJ() - 1) * terrain.tileSize);
            Vec3.add(lpos, lpos, v);
          }
        }
      }

      class CannonSimplexShape extends CannonShape {
        constructor(...args) {
          super(...args);
          this.vertices = [];
        }
        setShapeType(v) {
          if (this._isBinding) ;
        }
        setVertices(v) {
          const length = this.vertices.length;
          if (length === 4) {
            const ws = this._collider.node.worldScale;
            for (let i = 0; i < length; i++) {
              Vec3.multiply(this.vertices[i], ws, v[i]);
            }
            const impl = this.impl;
            impl.computeNormals();
            impl.computeEdges();
            impl.updateBoundingSphereRadius();
          }
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        }
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        onComponentSet() {
          const type = this.collider.shapeType;
          if (type === SimplexCollider.ESimplexType.TETRAHEDRON) {
            for (let i = 0; i < 4; i++) {
              this.vertices[i] = new cannon.Vec3(0, 0, 0);
            }
            this._shape = createTetra(this.vertices);
          } else {
            if (type !== SimplexCollider.ESimplexType.VERTEX) ;
            this._shape = new cannon.Particle();
          }
        }
        onLoad() {
          super.onLoad();
          this.collider.updateVertices();
        }
        setScale(scale) {
          super.setScale(scale);
          this.collider.updateVertices();
        }
      }
      const createTetra = function () {
        const faces = [[0, 3, 2], [0, 1, 3], [0, 2, 1], [1, 2, 3]];
        return function (verts) {
          return new cannon.ConvexPolyhedron(verts, faces);
        };
      }();

      class CannonPlaneShape extends CannonShape {
        get collider() {
          return this._collider;
        }
        get impl() {
          return this._shape;
        }
        constructor() {
          super();
          this._shape = new cannon.Plane();
        }
        setNormal(v) {
          Quat.rotationTo(this._orient, Vec3.UNIT_Z, v);
          if (this._index !== -1) {
            commitShapeUpdates(this._body);
          }
        }
        setConstant(v) {
          Vec3.scaleAndAdd(this._offset, this._collider.center, this.collider.normal, v);
        }
        onLoad() {
          super.onLoad();
          this.setConstant(this.collider.constant);
          this.setNormal(this.collider.normal);
        }
        _setCenter(v) {
          super._setCenter(v);
          this.setConstant(this.collider.constant);
        }
      }

      cannon.World.staticBody = new cannon.Body();
      cannon.World.idToConstraintMap = {};
      class CannonConstraint {
        constructor() {
          this._impl = void 0;
          this._com = void 0;
          this._rigidBody = void 0;
          this._connectedBody = void 0;
        }
        setConnectedBody(v) {
          if (this._connectedBody === v) return;
          const oldBody2 = this._connectedBody;
          if (oldBody2) {
            const oldSB2 = oldBody2.body.sharedBody;
            oldSB2.removeJoint(this, 1);
          }
          const sb = this._rigidBody.body.sharedBody;
          sb.removeJoint(this, 0);
          if (this._impl) {
            sb.wrappedWorld.removeConstraint(this);
            delete cannon.World.idToConstraintMap[this._impl.id];
            this._impl = null;
          }
          this._connectedBody = v;
          const connect = this._connectedBody;
          this.onComponentSet();
          this.setEnableCollision(this._com.enableCollision);
          cannon.World.idToConstraintMap[this._impl.id] = this._impl;
          sb.wrappedWorld.addConstraint(this);
          sb.addJoint(this, 0);
          if (connect) {
            const newSB2 = connect.body.sharedBody;
            newSB2.addJoint(this, 1);
          }
        }
        setEnableCollision(v) {
          this._impl.collideConnected = v;
        }
        get impl() {
          return this._impl;
        }
        get constraint() {
          return this._com;
        }
        initialize(v) {
          this._com = v;
          this._rigidBody = v.attachedBody;
          this._connectedBody = v.connectedBody;
          this.onComponentSet();
          this.setEnableCollision(v.enableCollision);
          cannon.World.idToConstraintMap[this._impl.id] = this._impl;
        }
        onComponentSet() {}
        updateScale0() {}
        updateScale1() {}
        onEnable() {
          const sb = this._rigidBody.body.sharedBody;
          sb.wrappedWorld.addConstraint(this);
          sb.addJoint(this, 0);
          const connect = this._connectedBody;
          if (connect) {
            const sb2 = connect.body.sharedBody;
            sb2.addJoint(this, 1);
          }
        }
        onDisable() {
          const sb = this._rigidBody.body.sharedBody;
          sb.wrappedWorld.removeConstraint(this);
          sb.removeJoint(this, 0);
          const connect = this._connectedBody;
          if (connect) {
            const sb2 = connect.body.sharedBody;
            sb2.removeJoint(this, 1);
          }
        }
        onDestroy() {
          delete cannon.World.idToConstraintMap[this._impl.id];
          this._com = null;
          this._rigidBody = null;
          this._connectedBody = null;
          this._impl = null;
        }
      }

      const v3_0$1 = new Vec3();
      class CannonPointToPointConstraint extends CannonConstraint {
        get impl() {
          return this._impl;
        }
        get constraint() {
          return this._com;
        }
        setPivotA(v) {
          const cs = this.constraint;
          Vec3.multiply(this.impl.pivotA, cs.node.worldScale, cs.pivotA);
          if (!cs.connectedBody) this.setPivotB(cs.pivotB);
        }
        setPivotB(v) {
          const cs = this.constraint;
          const cb = cs.connectedBody;
          if (cb) {
            Vec3.multiply(this.impl.pivotB, cb.node.worldScale, cs.pivotB);
          } else {
            const node = cs.node;
            Vec3.multiply(v3_0$1, node.worldScale, cs.pivotA);
            Vec3.transformQuat(v3_0$1, v3_0$1, node.worldRotation);
            Vec3.add(v3_0$1, v3_0$1, node.worldPosition);
            Vec3.copy(this.impl.pivotB, v3_0$1);
          }
        }
        onComponentSet() {
          const bodyA = this._rigidBody.body.impl;
          const cb = this.constraint.connectedBody;
          let bodyB = cannon.World.staticBody;
          if (cb) {
            bodyB = cb.body.impl;
          }
          this._impl = new cannon.PointToPointConstraint(bodyA, null, bodyB);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
        }
        updateScale0() {
          this.setPivotA(this.constraint.pivotA);
        }
        updateScale1() {
          this.setPivotB(this.constraint.pivotB);
        }
      }

      const v3_0 = new Vec3();
      const quat_0 = new Quat();
      class CannonHingeConstraint extends CannonConstraint {
        get impl() {
          return this._impl;
        }
        get constraint() {
          return this._com;
        }
        setPivotA(v) {
          const cs = this.constraint;
          Vec3.multiply(this.impl.pivotA, this.constraint.node.worldScale, cs.pivotA);
          if (!cs.connectedBody) this.setPivotB(cs.pivotB);
        }
        setPivotB(v) {
          const cs = this.constraint;
          const cb = cs.connectedBody;
          if (cb) {
            Vec3.multiply(this.impl.pivotB, cb.node.worldScale, cs.pivotB);
          } else {
            const node = this.constraint.node;
            Vec3.multiply(v3_0, node.worldScale, cs.pivotA);
            Vec3.transformQuat(v3_0, v3_0, node.worldRotation);
            Vec3.add(v3_0, v3_0, node.worldPosition);
            Vec3.copy(this.impl.pivotB, v3_0);
          }
        }
        setAxis(v) {
          const equations = this.impl.equations;
          Vec3.copy(this.impl.axisA, v);
          Vec3.copy(equations[3].axisA, v);
          Vec3.copy(equations[4].axisA, v);
          Vec3.copy(equations[5].axisA, v);
          if (this.constraint.connectedBody) {
            Vec3.transformQuat(this.impl.axisB, v, this.constraint.node.worldRotation);
            Quat.invert(quat_0, this.constraint.connectedBody.node.worldRotation);
            Vec3.transformQuat(this.impl.axisB, this.impl.axisB, quat_0);
            Vec3.copy(equations[3].axisB, this.impl.axisB);
            Vec3.copy(equations[4].axisB, this.impl.axisB);
            Vec3.copy(equations[5].axisB, this.impl.axisB);
          } else {
            Vec3.transformQuat(this.impl.axisB, v, this.constraint.node.worldRotation);
            Vec3.copy(equations[3].axisB, this.impl.axisB);
            Vec3.copy(equations[4].axisB, this.impl.axisB);
            Vec3.copy(equations[5].axisB, this.impl.axisB);
          }
        }
        setLimitEnabled(v) {
          warnID(9613);
        }
        setLowerLimit(min) {
          warnID(9613);
        }
        setUpperLimit(max) {
          warnID(9613);
        }
        setMotorEnabled(v) {
          warnID(9613);
        }
        setMotorVelocity(v) {
          warnID(9613);
        }
        setMotorForceLimit(v) {
          warnID(9613);
        }
        onComponentSet() {
          const bodyA = this._rigidBody.body.impl;
          const cb = this.constraint.connectedBody;
          let bodyB = cannon.World.staticBody;
          if (cb) {
            bodyB = cb.body.impl;
          }
          this._impl = new cannon.HingeConstraint(bodyA, bodyB);
          this.setPivotA(this.constraint.pivotA);
          this.setPivotB(this.constraint.pivotB);
          this.setAxis(this.constraint.axis);
        }
        updateScale0() {
          this.setPivotA(this.constraint.pivotA);
        }
        updateScale1() {
          this.setPivotB(this.constraint.pivotB);
        }
      }

      class CannonLockConstraint extends CannonConstraint {
        constructor(...args) {
          super(...args);
          this._breakForce = 1e9;
        }
        setBreakForce(v) {
          this._breakForce = v;
          this.updateFrame();
        }
        setBreakTorque(v) {}
        get impl() {
          return this._impl;
        }
        get constraint() {
          return this._com;
        }
        onComponentSet() {
          this._breakForce = this.constraint.breakForce;
          this.updateFrame();
        }
        updateFrame() {
          const bodyA = this._rigidBody.body.impl;
          const cb = this.constraint.connectedBody;
          let bodyB = cannon.World.staticBody;
          if (cb) {
            bodyB = cb.body.impl;
          }
          this._impl = new cannon.LockConstraint(bodyA, bodyB, {
            maxForce: this._breakForce
          });
        }
        updateScale0() {
          this.updateFrame();
        }
        updateScale1() {
          this.updateFrame();
        }
      }

      game.once(Game.EVENT_PRE_SUBSYSTEM_INIT, () => {
        selector.register('cannon.js', {
          PhysicsWorld: CannonWorld,
          RigidBody: CannonRigidBody,
          BoxShape: CannonBoxShape,
          SphereShape: CannonSphereShape,
          TrimeshShape: CannonTrimeshShape,
          CylinderShape: CannonCylinderShape,
          ConeShape: CannonConeShape,
          TerrainShape: CannonTerrainShape,
          SimplexShape: CannonSimplexShape,
          PlaneShape: CannonPlaneShape,
          PointToPointConstraint: CannonPointToPointConstraint,
          HingeConstraint: CannonHingeConstraint,
          FixedConstraint: CannonLockConstraint
        });
      });

      if (globalThis) globalThis.CANNON = cannon;
      cannon.CC_CONFIG = {
        numSegmentsCone: 12,
        numSegmentsCylinder: 12,
        ignoreSelfBody: true,
        correctInelastic: 3
      };
      cannon.ArrayCollisionMatrix.prototype.reset = function reset() {
        for (const key in this.matrix) {
          delete this.matrix[key];
        }
      };
      cannon.Ray.perBodyFilter = function (r, b) {
        return (r.collisionFilterMask & b.collisionFilterGroup) !== 0;
      };

    })
  };
}));
