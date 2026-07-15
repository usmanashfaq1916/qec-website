"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Filter } from "lucide-react"

const categories = [
  "All",
  "Campus Life",
  "Academic Activities",
  "Sports",
  "Events",
  "Seminars",
  "Labs",
]

const galleryItems = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: [
    "Campus Panorama", "Classroom Session", "Science Lab", "Sports Day",
    "Annual Event", "Seminar Hall", "Computer Lab", "Library",
    "Cultural Day", "Award Ceremony", "Playing Ground", "Art Exhibition",
    "Debate Competition", "Graduation Day", "Teachers Training", "Field Trip",
    "Morning Assembly", "Music Room", "Cafeteria", "Auditorium",
    "Sports Trophy", "Workshop", "Conference", "Study Group",
  ][i],
  category: categories[
    [1, 1, 5, 3, 4, 4, 5, 1, 4, 4, 3, 2, 2, 4, 2, 2, 1, 2, 1, 4, 3, 5, 5, 1][i]
  ],
  color: `hsl(${Math.random() * 360}, 60%, ${30 + Math.random() * 40}%)`,
}))

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Gallery</h1>
        <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
          A visual journey through life at Quaid Educational Complex
        </p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-white"
                : "bg-primary/5 text-muted hover:bg-primary/10 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: i * 0.03 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden border border-border bg-card aspect-square"
            onClick={() => setLightboxIndex(galleryItems.indexOf(item))}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)` }}
            >
              <ImageIcon className="h-12 w-12 text-muted/40" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <div>
                <p className="text-white font-medium text-sm">{item.title}</p>
                <p className="text-white/70 text-xs">{item.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxIndex(null)}
            >
              <X className="h-6 w-6" />
            </button>

            {lightboxIndex > 0 && (
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }}
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
            )}

            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full rounded-2xl overflow-hidden bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="h-80 sm:h-96 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${galleryItems[lightboxIndex].color}33, ${galleryItems[lightboxIndex].color}66)` }}
              >
                <ImageIcon className="h-24 w-24 text-white/30" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-card-foreground">{galleryItems[lightboxIndex].title}</h3>
                <p className="text-sm text-muted mt-1">{galleryItems[lightboxIndex].category}</p>
              </div>
            </motion.div>

            {lightboxIndex < galleryItems.length - 1 && (
              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }}
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
