import React, { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Text, Image as KonvaImage, Rect, Transformer } from 'react-konva';
import {
  X, Type, Image as ImageIcon, RotateCw, Trash2,
  ArrowUp, ArrowDown, Check, Undo2, Redo2, Plus, Move
} from 'lucide-react';
import { useStudioStore, FONTS_LIST } from './useStudioStore';

// Native Image loader hook for Konva
function useNativeImage(url, crossOrigin) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    if (!url) return;
    const img = new window.Image();
    if (crossOrigin) img.crossOrigin = crossOrigin;
    img.src = url;
    img.onload = () => setImage(img);
  }, [url, crossOrigin]);
  return [image];
}

// URL-based Image component for Konva
const URLImage = ({ imageObj, isSelected, onSelect, onChange }) => {
  const [image] = useNativeImage(imageObj.src, 'anonymous');
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <KonvaImage
        image={image}
        x={imageObj.x}
        y={imageObj.y}
        width={imageObj.width}
        height={imageObj.height}
        rotation={imageObj.rotation || 0}
        scaleX={imageObj.scaleX || 1}
        scaleY={imageObj.scaleY || 1}
        draggable
        ref={shapeRef}
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange({
            ...imageObj,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          onChange({
            ...imageObj,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            scaleX,
            scaleY
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 20 || newBox.height < 20) return oldBox;
            return newBox;
          }}
        />
      )}
    </>
  );
};

// Draggable Text Element in Konva
const EditableText = ({ textObj, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        text={textObj.text}
        x={textObj.x}
        y={textObj.y}
        fontSize={textObj.fontSize || 32}
        fontFamily={textObj.fontFamily || 'Impact'}
        fill={textObj.fill || '#F5A623'}
        stroke={textObj.stroke || '#000000'}
        strokeWidth={textObj.strokeWidth || 2}
        rotation={textObj.rotation || 0}
        draggable
        ref={shapeRef}
        onClick={onSelect}
        onTap={onSelect}
        onDragEnd={(e) => {
          onChange({
            ...textObj,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          onChange({
            ...textObj,
            x: node.x(),
            y: node.y(),
            rotation: node.rotation(),
            fontSize: Math.round(node.fontSize() * node.scaleX())
          });
          node.scaleX(1);
          node.scaleY(1);
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
        />
      )}
    </>
  );
};

export default function Artwork2DEditorModal({ isOpen, onClose }) {
  const {
    nameNumber,
    logos,
    primaryColor,
    secondaryColor,
    setNameNumber,
    addLogo
  } = useStudioStore();

  const [elements, setElements] = useState([
    {
      id: 'team_name',
      type: 'text',
      text: nameNumber.teamName || 'HAMLO SPORTS',
      x: 160,
      y: 140,
      fontSize: 38,
      fontFamily: nameNumber.font || 'Impact',
      fill: nameNumber.textColor || '#F5A623',
      stroke: nameNumber.strokeColor || '#000000',
      strokeWidth: 2
    },
    {
      id: 'player_num',
      type: 'text',
      text: nameNumber.playerNumber || '26',
      x: 230,
      y: 220,
      fontSize: 75,
      fontFamily: nameNumber.font || 'Impact',
      fill: nameNumber.textColor || '#F5A623',
      stroke: nameNumber.strokeColor || '#000000',
      strokeWidth: 3
    }
  ]);

  const [selectedId, setSelectedId] = useState(null);
  const stageRef = useRef();

  if (!isOpen) return null;

  const handleAddText = () => {
    const newEl = {
      id: 'text_' + Date.now(),
      type: 'text',
      text: 'NEW TEXT',
      x: 200,
      y: 200,
      fontSize: 32,
      fontFamily: 'Impact',
      fill: secondaryColor,
      stroke: '#000000',
      strokeWidth: 2
    };
    setElements([...elements, newEl]);
    setSelectedId(newEl.id);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const src = event.target.result;
      const newImg = {
        id: 'img_' + Date.now(),
        type: 'image',
        src,
        x: 200,
        y: 180,
        width: 120,
        height: 120,
        rotation: 0
      };
      setElements([...elements, newImg]);
      setSelectedId(newImg.id);
      addLogo({ url: src, name: file.name, placement: 'chest' });
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteSelected = () => {
    if (!selectedId) return;
    setElements(elements.filter(el => el.id !== selectedId));
    setSelectedId(null);
  };

  const handleApplyTo3D = () => {
    // Extract team name and number if modified in 2D editor
    const tn = elements.find(el => el.id === 'team_name' || (el.type === 'text' && el.text !== '26'));
    const pn = elements.find(el => el.id === 'player_num' || (el.type === 'text' && /^[0-9]+$/.test(el.text)));

    if (tn) setNameNumber({ teamName: tn.text, font: tn.fontFamily, textColor: tn.fill });
    if (pn) setNameNumber({ playerNumber: pn.text });

    onClose();
  };

  const selectedElement = elements.find(el => el.id === selectedId);

  return (
    <div className="fixed inset-0 z-[350] bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-[5px] shadow-2xl border border-neutral-300 flex flex-col max-h-[92vh] overflow-hidden">

        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-slate-50 text-slate-800 flex items-center justify-between border-b border-slate-200">
          <div>
            <span className="text-[10px] font-medium text-[var(--accent)] block">
              2D Graphic Studio
            </span>
            <h3 className="text-sm font-semibold text-slate-900">
              Garment Artwork & Decal Layout
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Workspace (Split 2D Canvas + Right Controls) */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-y-auto">

          {/* Left Canvas Preview Area (8 Cols) */}
          <div className="md:col-span-8 p-6 bg-slate-100 flex flex-col items-center justify-center border-r border-slate-200">
            <span className="text-[11px] font-normal text-slate-500 mb-2">
              Front Chest & Torso Print Area (Drag, Rotate, Resize Handles)
            </span>

            {/* Konva Stage Container with Jersey Outline */}
            <div className="relative bg-white border border-slate-300 shadow-sm rounded overflow-hidden">
              <Stage
                width={520}
                height={520}
                ref={stageRef}
                onMouseDown={(e) => {
                  if (e.target === e.target.getStage()) {
                    setSelectedId(null);
                  }
                }}
              >
                <Layer>
                  {/* Subtle Background Guide Grid */}
                  <Rect x={0} y={0} width={520} height={520} fill="#FAFAFA" />

                  {/* Render Elements */}
                  {elements.map((el) => {
                    if (el.type === 'text') {
                      return (
                        <EditableText
                          key={el.id}
                          textObj={el}
                          isSelected={el.id === selectedId}
                          onSelect={() => setSelectedId(el.id)}
                          onChange={(newProps) => {
                            setElements(elements.map(item => item.id === el.id ? newProps : item));
                          }}
                        />
                      );
                    }
                    if (el.type === 'image') {
                      return (
                        <URLImage
                          key={el.id}
                          imageObj={el}
                          isSelected={el.id === selectedId}
                          onSelect={() => setSelectedId(el.id)}
                          onChange={(newProps) => {
                            setElements(elements.map(item => item.id === el.id ? newProps : item));
                          }}
                        />
                      );
                    }
                    return null;
                  })}
                </Layer>
              </Stage>
            </div>
          </div>

          {/* Right Control Tools Dock (4 Cols) */}
          <div className="md:col-span-4 p-6 bg-white space-y-5">
            <div>
              <h4 className="text-xs font-medium text-slate-700 mb-2.5">
                Artwork Tools
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAddText}
                  className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-200"
                >
                  <Type size={14} className="text-[var(--accent)]" /> Add Text
                </button>

                <label className="px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition cursor-pointer border border-slate-200">
                  <ImageIcon size={14} className="text-[var(--accent)]" /> Upload Logo
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Selected Element Properties Inspector */}
            {selectedElement && selectedElement.type === 'text' && (
              <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-3">
                <span className="text-[11px] font-medium text-slate-700 block">
                  Text Properties
                </span>

                <div>
                  <label className="block text-xs font-normal text-slate-600 mb-1">Text Content</label>
                  <input
                    type="text"
                    value={selectedElement.text}
                    onChange={(e) => {
                      const updated = { ...selectedElement, text: e.target.value };
                      setElements(elements.map(el => el.id === selectedId ? updated : el));
                    }}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded font-normal bg-white text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-normal text-slate-600 mb-1">Font Family</label>
                  <select
                    value={selectedElement.fontFamily}
                    onChange={(e) => {
                      const updated = { ...selectedElement, fontFamily: e.target.value };
                      setElements(elements.map(el => el.id === selectedId ? updated : el));
                    }}
                    className="w-full px-2.5 py-1.5 text-xs border border-slate-300 rounded font-normal bg-white text-slate-800"
                  >
                    {FONTS_LIST.map(f => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="block text-xs font-normal text-slate-600 mb-1">Fill Color</label>
                    <input
                      type="color"
                      value={selectedElement.fill}
                      onChange={(e) => {
                        const updated = { ...selectedElement, fill: e.target.value };
                        setElements(elements.map(el => el.id === selectedId ? updated : el));
                      }}
                      className="w-full h-8 p-0 border border-slate-300 rounded cursor-pointer bg-white"
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-xs font-normal text-slate-600 mb-1">Stroke</label>
                    <input
                      type="color"
                      value={selectedElement.stroke}
                      onChange={(e) => {
                        const updated = { ...selectedElement, stroke: e.target.value };
                        setElements(elements.map(el => el.id === selectedId ? updated : el));
                      }}
                      className="w-full h-8 p-0 border border-slate-300 rounded cursor-pointer bg-white"
                    />
                  </div>
                </div>

                <button
                  onClick={handleDeleteSelected}
                  className="w-full py-2 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-medium rounded flex items-center justify-center gap-1.5 transition cursor-pointer mt-2 border border-red-200"
                >
                  <Trash2 size={13} /> Delete Text
                </button>
              </div>
            )}

            {/* Elements Layer List */}
            <div>
              <span className="text-xs font-medium text-slate-600 block mb-2">
                Active Layers ({elements.length})
              </span>
              <div className="space-y-1.5 max-h-40 overflow-y-auto">
                {elements.map((el) => (
                  <div
                    key={el.id}
                    onClick={() => setSelectedId(el.id)}
                    className={`px-3 py-2 rounded text-xs flex items-center justify-between cursor-pointer border transition ${
                      selectedId === el.id
                        ? 'bg-slate-900 text-white border-slate-900 font-medium'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 font-normal'
                    }`}
                  >
                    <span>{el.type === 'text' ? `Text: ${el.text}` : 'Uploaded Logo Image'}</span>
                    <Move size={12} className="opacity-60" />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-normal">
            Artwork is automatically mapped to 3D garment UV textures.
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-slate-300 hover:bg-slate-100 text-slate-700 font-normal text-xs rounded transition cursor-pointer"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyTo3D}
              className="px-5 py-2 bg-[var(--accent)] hover:brightness-105 text-white font-medium text-xs rounded shadow-xs transition cursor-pointer flex items-center gap-1.5"
            >
              <Check size={14} /> Apply to 3D Viewport
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

