System.register(['./index-900b1aba.js', './mesh-renderer-345caf1a.js', './mesh.jsb-fd5f72d1.js', './index-cdf65239.js', './skeleton.jsb-dc71323f.js', './deprecated-5661531b.js', './find-a2ac9aec.js', './device-62ae3c0d.js', './pipeline-sub-state.jsb-4e7eafde.js', './create-mesh.jsb-a12ceaf9.js', './buffer-ad75ba4d.js', './util-bc981e2e.js', './capsule-d64bdce8.js', './murmurhash2_gc-2108d723.js', './node-event-41e0592a.js', './decorators-f21c5b0b.js', './builtin-res-mgr.jsb-782de3de.js', './touch-28f50917.js', './deprecated-158528dd.js', './renderer-259bfa66.js', './rendering-sub-mesh.jsb-361ed7d8.js', './scene-asset.jsb-81748dae.js', './camera-component-4ee32ea3.js', './model-renderer-52e7f62a.js'], (function (exports) {
    'use strict';
    var MeshRenderer, Mesh, Mat4;
    return {
        setters: [function (module) {
            exports({ DirectionalLight: module.D, DirectionalLightComponent: module.D, LOD: module.b, LODGroup: module.c, Light: module.L, LightComponent: module.L, PointLight: module.P, RangedDirectionalLight: module.R, ReflectionProbe: module.d, ReflectionProbeManager: module.e, SphereLight: module.S, SphereLightComponent: module.S, SpotLight: module.a, SpotLightComponent: module.a, utils: module.u });
        }, function (module) {
            MeshRenderer = module.M;
            exports({ MeshRenderer: module.M, ModelComponent: module.M, ReflectionProbeType: module.R });
        }, function (module) {
            Mesh = module.M;
            exports('Mesh', module.M);
        }, function (module) {
            Mat4 = module.s;
        }, function (module) {
            exports('Skeleton', module.S);
        }, function (module) {
            exports({ BatchedSkinningModelComponent: module.a, SkinnedMeshBatchRenderer: module.a, SkinnedMeshRenderer: module.S, SkinnedMeshUnit: module.b, SkinningModelComponent: module.S, SkinningModelUnit: module.b });
        }, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}, function () {}],
        execute: (function () {

            function checkMaterialisSame(comp1, comp2) {
              const matNum = comp1.sharedMaterials.length;
              if (matNum !== comp2.sharedMaterials.length) {
                return false;
              }
              for (let i = 0; i < matNum; i++) {
                if (comp1.getRenderMaterial(i) !== comp2.getRenderMaterial(i)) {
                  return false;
                }
              }
              return true;
            }
            class BatchingUtility {
              static batchStaticModel(staticModelRoot, batchedRoot) {
                const models = staticModelRoot.getComponentsInChildren(MeshRenderer);
                if (models.length < 2) {
                  console.error('the number of static models to batch is less than 2,it needn\'t batch.');
                  return false;
                }
                for (let i = 1; i < models.length; i++) {
                  if (!models[0].mesh.validateMergingMesh(models[i].mesh)) {
                    console.error(`the meshes of ${models[0].node.name} and ${models[i].node.name} can't be merged`);
                    return false;
                  }
                  if (!checkMaterialisSame(models[0], models[i])) {
                    console.error(`the materials of ${models[0].node.name} and ${models[i].node.name} can't be merged`);
                    return false;
                  }
                }
                const batchedMesh = new Mesh();
                const worldMat = new Mat4();
                const rootWorldMatInv = new Mat4();
                staticModelRoot.getWorldMatrix(rootWorldMatInv);
                Mat4.invert(rootWorldMatInv, rootWorldMatInv);
                for (let i = 0; i < models.length; i++) {
                  const comp = models[i];
                  comp.node.getWorldMatrix(worldMat);
                  Mat4.multiply(worldMat, rootWorldMatInv, worldMat);
                  batchedMesh.merge(models[i].mesh, worldMat);
                  comp.enabled = false;
                }
                const batchedModel = batchedRoot.addComponent(MeshRenderer);
                batchedModel.mesh = batchedMesh;
                batchedModel.sharedMaterials = models[0].sharedMaterials;
                return true;
              }
              static unbatchStaticModel(staticModelRoot, batchedRoot) {
                const models = staticModelRoot.getComponentsInChildren(MeshRenderer);
                for (let i = 0; i < models.length; i++) {
                  const comp = models[i];
                  comp.enabled = true;
                }
                const batchedModel = batchedRoot.getComponent(MeshRenderer);
                if (batchedModel) {
                  if (batchedModel.mesh) {
                    batchedModel.mesh.destroyRenderingMesh();
                  }
                  batchedModel.destroy();
                }
                return true;
              }
            } exports('BatchingUtility', BatchingUtility);

        })
    };
}));
