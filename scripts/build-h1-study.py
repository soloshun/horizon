"""Horizon H1: editable architectural massing concept, not engineering validation.
Run: /Applications/Blender.app/Contents/MacOS/Blender -b --python scripts/build-h1-study.py
"""
import bpy, math, os
from mathutils import Vector
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'artifacts/blender'; OUT.mkdir(parents=True,exist_ok=True)
bpy.ops.object.select_all(action='SELECT'); bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene
scene.render.engine='CYCLES'; scene.cycles.samples=32
scene.cycles.use_denoising=True
scene.render.resolution_x=1600; scene.render.resolution_y=1000; scene.render.resolution_percentage=100
scene.world.color=(0.18,0.18,0.18)
scene.view_settings.view_transform='AgX'
def mat(name,color,metal=0,rough=.6):
 m=bpy.data.materials.new(name); m.diffuse_color=(*color,1); m.use_nodes=True
 p=m.node_tree.nodes.get('Principled BSDF'); p.inputs['Base Color'].default_value=(*color,1); p.inputs['Metallic'].default_value=metal;p.inputs['Roughness'].default_value=rough
 return m
ivory=mat('Lime plaster | concept',(0.72,.69,.60)); bronze=mat('Brushed bronze',(.33,.22,.10),.65,.35); glass=mat('Tinted glazing',(.07,.15,.15),.55,.23); ground=mat('Charcoal display ground',(.036,.047,.049));base=mat('Model plinth',(.13,.16,.15));solar=mat('Photovoltaic surface | indicative',(.028,.06,.095),.4,.24);wood=mat('Timber',(.29,.16,.074));green=mat('Canopy',(.17,.23,.12)); gold=mat('Diagram gold',(.63,.43,.18),.4)
def box(name,loc,scale,material,bevel=.035):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc); o=bpy.context.object; o.name=name; o.dimensions=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(material)
 if bevel: m=o.modifiers.new('Soft construction edges','BEVEL');m.width=bevel;m.segments=2;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 return o
def rod(name,a,b,r,material):
 d=Vector(b)-Vector(a);p=(Vector(a)+Vector(b))/2
 bpy.ops.mesh.primitive_cylinder_add(vertices=12,radius=r,depth=d.length,location=p);o=bpy.context.object;o.name=name;o.rotation_euler=d.to_track_quat('Z','Y').to_euler();o.data.materials.append(material)
box('Ground',(0,0,-.55),(200,200,.1),ground)
box('H1 | study plinth',(0,0,-.22),(16,13,.4),base,.12)
box('Foundation',(0,0,.02),(12,9,.18),ivory)
# Two perpendicular wings around an open courtyard.
box('Living wing',(0,2.4,1.45),(10,3.2,2.8),ivory)
box('Sleeping wing',(-3.5,-.8,1.45),(3,3.3,2.8),ivory)
box('Living glazing',(1.25,.76,1.35),(7.25,.06,2.15),glass,.005)
box('Bedroom glazing',(-1.96,-.8,1.35),(.06,2.85,2.15),glass,.005)
box('Upper studio',(-2.8,2.4,4),(4.4,3.2,2.25),ivory)
box('Studio glazing',(-2.8,.76,3.92),(3.8,.06,1.7),glass,.005)
for x in [-2,-.8,.4,1.6,2.8,4]: box('Glazing mullion',(x,.69,1.35),(.042,.08,2.2),bronze,.005)
box('Main shading canopy',(.1,2.1,2.94),(11.7,4.8,.18),ivory)
box('Studio roof',(-2.8,2.35,5.22),(5.2,4.1,.2),ivory)
box('Bedroom roof',(-3.5,-1,2.94),(3.6,3.7,.18),ivory)
for x in [i*.29+2 for i in range(10)]:box('Bronze solar screen',(x,.42,1.47),(.055,.27,2.8),wood,.01)
for x in [-4.3,-3.45,-2.6,-1.75]:
 for y in [1.65,2.8]:box('Solar module',(x,y,5.38),(.78,1.04,.035),solar,.01)
for y in [-2.5,-1.8,-1.1,-.4]:box('Courtyard stepping stone',(.55,y,.17),(2.3,.5,.09),ivory)
box('Shaded terrace',(2.3,-.2,.18),(4.5,1.2,.12),wood)
box('Bench',(3.3,-2.8,.55),(2.3,.55,.18),wood)
for x in [2.5,4.1]:box('Bench support',(x,-2.8,.35),(.13,.44,.4),bronze)
box('Equipment enclosure',(-5.28,3.2,1.05),(.5,1.7,1.8),bronze)
box('Water storage | schematic',(-5.35,1.3,.8),(.58,.9,1.3),ivory)
# Model vegetation, deliberately diagrammatic.
for i,(x,y,s) in enumerate([(4.8,-3.7,1),(-5.7,-3.2,.8),(6,2.5,.85),(3.8,4.6,.7),(-6,4.5,.9)]):
 rod('Tree trunk',(x,y,.1),(x,y,2.1*s),.09,wood)
 for dx,dy,dz,rad in [(0,0,2.55,.9),(.42,.1,2.2,.6),(-.4,.15,2.4,.6)]:
  bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2,radius=rad*s,location=(x+dx*s,y+dy*s,dz*s));bpy.context.object.name='Abstract model canopy';bpy.context.object.data.materials.append(green)
# Quiet ground perimeter and system connection lines.
for a,b in [((-6,-4.7,.12),(6,-4.7,.12)),((6,-4.7,.12),(6,4.7,.12))]:rod('System datum',a,b,.012,gold)
for a,b in [((-5.4,3.2,.22),(-5.4,-4.2,.22)),((-5.4,-4.2,.22),(4.4,-4.2,.22))]:rod('Indicative energy route',a,b,.018,gold)
bpy.ops.object.light_add(type='AREA',location=(1,-5,13));bpy.context.object.data.energy=2300;bpy.context.object.data.shape='DISK';bpy.context.object.data.size=10
bpy.ops.object.light_add(type='AREA',location=(-9,2,7));bpy.context.object.data.energy=1700;bpy.context.object.data.color=(1,.72,.4);bpy.context.object.data.size=8
bpy.ops.object.camera_add(location=(16,-21,16));cam=bpy.context.object;scene.camera=cam;cam.data.type='ORTHO';cam.data.ortho_scale=22
cam.rotation_euler=(Vector((0,0,1.3))-cam.location).to_track_quat('-Z','Y').to_euler()
scene.render.image_settings.file_format='PNG';scene.render.filepath=str(OUT/'h1-study.png')
bpy.ops.wm.save_as_mainfile(filepath=str(OUT/'horizon-h1-study.blend'));bpy.ops.render.render(write_still=True)
# Optional full camera-orbit frames: use HORIZON_RENDER_ANIMATION=1.
if os.environ.get('HORIZON_RENDER_ANIMATION')=='1':
 scene.cycles.samples=12;scene.render.resolution_x=960;scene.render.resolution_y=600
 for frame in range(120):
  angle=-.93+(frame/119)*.22;cam.location=(26*math.cos(angle),26*math.sin(angle),16);cam.rotation_euler=(Vector((0,0,1.3))-cam.location).to_track_quat('-Z','Y').to_euler();scene.render.filepath=str(OUT/'frames'/f'{frame:04d}.png');bpy.ops.render.render(write_still=True)
